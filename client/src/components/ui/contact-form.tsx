import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { trackEvent } from '@/lib/analytics';
import { Send } from 'lucide-react';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  company: z.string().optional(),
  currentWebsite: z.string().url('Please enter a valid URL').optional().or(z.literal('')),
  message: z.string().min(20, 'Message must be at least 20 characters'),
  website: z.string().optional(), // honeypot field
});

type ContactFormData = z.infer<typeof contactSchema>;

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      email: '',
      company: '',
      currentWebsite: '',
      message: '',
      website: '', // honeypot
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    // Check honeypot
    if (data.website) {
      console.warn('Spam submission detected');
      return;
    }

    setIsSubmitting(true);
    try {
      // Track form submission
      trackEvent('form_submit', 'contact', 'contact_form');

      // Send data to Formspree via AJAX
      const response = await fetch('https://formspree.io/f/mrbazjjn', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          company: data.company,
          currentWebsite: data.currentWebsite,
          message: data.message,
        }),
      });
      if (response.ok) {
        toast({
          title: "Message sent successfully!",
          description: "We'll send you a detailed audit within 24-48 hours.",
        });
        form.reset();
      } else {
        toast({
          title: "Error sending message",
          description: "Please try again or contact us directly.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Error sending message",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white p-8 rounded-2xl shadow-sm">
      <h3 className="font-sora font-semibold text-xl text-dark mb-6">
        Get Your Free Website Audit
      </h3>
      
  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        {/* Honeypot field */}
        <input
          type="text"
          {...form.register('website')}
          className="hidden"
          tabIndex={-1}
          autoComplete="off"
        />
        
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="name">Full Name *</Label>
            <Input
              id="name"
              {...form.register('name')}
              placeholder="Your full name"
              className="mt-2"
            />
            {form.formState.errors.name && (
              <p className="text-sm text-destructive mt-1">
                {form.formState.errors.name.message}
              </p>
            )}
          </div>
          
          <div>
            <Label htmlFor="email">Email Address *</Label>
            <Input
              id="email"
              type="email"
              {...form.register('email')}
              placeholder="your@email.com"
              className="mt-2"
            />
            {form.formState.errors.email && (
              <p className="text-sm text-destructive mt-1">
                {form.formState.errors.email.message}
              </p>
            )}
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="company">Company Name</Label>
            <Input
              id="company"
              {...form.register('company')}
              placeholder="Your company"
              className="mt-2"
            />
          </div>
          
          <div>
            <Label htmlFor="currentWebsite">Current Website URL</Label>
            <Input
              id="currentWebsite"
              type="url"
              {...form.register('currentWebsite')}
              placeholder="https://yourwebsite.com"
              className="mt-2"
            />
            {form.formState.errors.currentWebsite && (
              <p className="text-sm text-destructive mt-1">
                {form.formState.errors.currentWebsite.message}
              </p>
            )}
          </div>
        </div>
        
        <div>
          <Label htmlFor="message">Project Details *</Label>
          <Textarea
            id="message"
            {...form.register('message')}
            placeholder="Tell us about your business and what you'd like to achieve with your website..."
            className="mt-2 min-h-24 resize-none"
          />
          {form.formState.errors.message && (
            <p className="text-sm text-destructive mt-1">
              {form.formState.errors.message.message}
            </p>
          )}
          <div className="text-xs text-gray-text mt-1">Minimum 20 characters</div>
        </div>
        
        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-primary hover:bg-blue-700 text-white py-4 px-6 rounded-lg font-semibold text-lg transition-colors"
        >
          {isSubmitting ? (
            'Sending...'
          ) : (
            <>
              <Send className="mr-2 h-5 w-5" />
              Send My Free Audit Request
            </>
          )}
        </Button>
        
        <p className="text-xs text-gray-text text-center">
          We'll send you a detailed Loom video audit within 24-48 hours
        </p>
      </form>
    </div>
  );
}
