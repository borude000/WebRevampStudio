import type { Express } from "express";
import { createServer, type Server } from "http";
import { z } from "zod";
import { storage } from "./storage";
import { insertContactSubmissionSchema } from "@shared/schema";

// Email service simulation (replace with actual Resend implementation)
async function sendEmail(to: string, subject: string, html: string) {
  // In a real implementation, you would use Resend API here
  // For now, we'll log the email that would be sent
  console.log('Email would be sent to:', to);
  console.log('Subject:', subject);
  console.log('Content:', html);
  
  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 500));
  
  return { success: true, messageId: 'mock-message-id' };
}

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post('/api/contact', async (req, res) => {
    try {
      // Check for honeypot (spam protection)
      if (req.body.website) {
        return res.status(400).json({ 
          success: false, 
          message: 'Spam submission detected' 
        });
      }

      // Validate request body
      const validatedData = insertContactSubmissionSchema.parse(req.body);
      
      // Store the contact submission
      const contactSubmission = await storage.createContactSubmission(validatedData);
      
      // Prepare email content
      const emailSubject = `New Website Audit Request from ${validatedData.name}`;
      const emailContent = `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${validatedData.name}</p>
        <p><strong>Email:</strong> ${validatedData.email}</p>
        <p><strong>Company:</strong> ${validatedData.company || 'Not provided'}</p>
        <p><strong>Current Website:</strong> ${validatedData.currentWebsite || 'Not provided'}</p>
        <p><strong>Message:</strong></p>
        <p>${validatedData.message}</p>
        <hr>
        <p><em>Submitted at: ${new Date().toLocaleString()}</em></p>
      `;
      
      // Send notification email to admin
      const adminEmail = process.env.MAIL_TO || 'hello@webrevampstudio.com';
      await sendEmail(adminEmail, emailSubject, emailContent);
      
      // Send confirmation email to user
      const userEmailSubject = 'Thank you for your website audit request';
      const userEmailContent = `
        <h2>Thank you for contacting WebRevamp Studio!</h2>
        <p>Hi ${validatedData.name},</p>
        <p>We've received your website audit request and we're excited to help transform your online presence.</p>
        <p><strong>What happens next:</strong></p>
        <ul>
          <li>We'll review your current website and business goals</li>
          <li>Our team will create a detailed Loom video audit</li>
          <li>You'll receive the audit within 24-48 hours</li>
          <li>We'll follow up to schedule a consultation call</li>
        </ul>
        <p>If you have any urgent questions, feel free to reach out to us directly:</p>
        <ul>
          <li>Email: hello@webrevampstudio.com</li>
          <li>Phone: +91 98765 43210</li>
          <li>WhatsApp: <a href="https://wa.me/919876543210">Chat with us</a></li>
        </ul>
        <p>Best regards,<br>The WebRevamp Studio Team</p>
      `;
      
      await sendEmail(validatedData.email, userEmailSubject, userEmailContent);
      
      res.json({ 
        success: true, 
        message: 'Contact form submitted successfully',
        id: contactSubmission.id 
      });
      
    } catch (error) {
      console.error('Contact form error:', error);
      
      if (error instanceof z.ZodError) {
        return res.status(400).json({ 
          success: false, 
          message: 'Validation error',
          errors: error.errors 
        });
      }
      
      res.status(500).json({ 
        success: false, 
        message: 'Internal server error' 
      });
    }
  });

  // Health check endpoint
  app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', timestamp: new Date().toISOString() });
  });

  // Get contact submissions (admin only - would need authentication in real app)
  app.get('/api/contact-submissions', async (req, res) => {
    try {
      const submissions = await storage.getAllContactSubmissions();
      res.json({ success: true, data: submissions });
    } catch (error) {
      console.error('Error fetching contact submissions:', error);
      res.status(500).json({ 
        success: false, 
        message: 'Internal server error' 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
