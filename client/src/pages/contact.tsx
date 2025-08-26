import { motion } from 'framer-motion';
import { MessageCircle, Mail, Phone, MapPin, Calendar, Clock } from 'lucide-react';
import { SEOHead } from '@/components/ui/seo-head';
import { SectionHeader } from '@/components/ui/section-header';
import { ContactForm } from '@/components/ui/contact-form';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Contact() {
  const contactInfo = {
    email: 'hello.forcontactus@gmail.com',
    phone: '+91 8087949226',
    location: 'Pune, India',
    whatsapp: '+918087949226'
  };

  return (
    <>
      <SEOHead 
        title="Contact Us - Get Your Free Website Audit | WebRevamp Studio"
        description="Ready to transform your website? Contact WebRevamp Studio for a free audit and consultation. We'll send you a detailed Loom video audit within 24-48 hours."
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-blue-50 py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial="initial"
            animate="animate"
            variants={fadeInUp}
          >
            <h1 className="text-4xl md:text-6xl font-sora font-bold text-dark mb-6 leading-tight">
              Ready to transform{' '}
              <span className="text-primary">your website?</span>
            </h1>
            
            <p className="text-xl text-gray-text mb-8 max-w-2xl mx-auto leading-relaxed">
              Get a free audit of your current website and discover how we can help you grow your business online.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <motion.div
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={fadeInUp}
              >
                <ContactForm />
              </motion.div>
              
              {/* Contact Information */}
              <motion.div 
                className="space-y-8"
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
              >
                {/* WhatsApp Contact */}
                <motion.div 
                  className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100"
                  variants={fadeInUp}
                >
                  <h3 className="font-sora font-semibold text-xl text-dark mb-4">Prefer to chat?</h3>
                  <p className="text-gray-text mb-6">
                    Get instant answers to your questions via WhatsApp. We're here to help!
                  </p>
                  <a 
                    href={`https://wa.me/${contactInfo.whatsapp}?text=Hi%2C%20I%27d%20like%20to%20discuss%20a%20website%20redesign%20project`}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-success hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                  >
                    <MessageCircle className="mr-2" size={20} />
                    Chat on WhatsApp
                  </a>
                </motion.div>
                
                {/* Direct Contact */}
                <motion.div 
                  className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100"
                  variants={fadeInUp}
                >
                  <h3 className="font-sora font-semibold text-xl text-dark mb-4">Get in Touch</h3>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <Mail className="text-primary mr-3 flex-shrink-0" size={20} />
                      <a 
                        href={`mailto:${contactInfo.email}`}
                        className="text-gray-text hover:text-primary transition-colors"
                      >
                        {contactInfo.email}
                      </a>
                    </div>
                    <div className="flex items-center">
                      <Phone className="text-primary mr-3 flex-shrink-0" size={20} />
                      <a 
                        href={`tel:${contactInfo.phone}`}
                        className="text-gray-text hover:text-primary transition-colors"
                      >
                        {contactInfo.phone}
                      </a>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="text-primary mr-3 flex-shrink-0" size={20} />
                      <span className="text-gray-text">{contactInfo.location}</span>
                    </div>
                  </div>
                </motion.div>
                
                {/* Calendar Booking */}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeader 
            title="Frequently Asked Questions"
            subtitle="Quick answers to common questions about our services"
          />
          
          <motion.div 
            className="max-w-3xl mx-auto space-y-6"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              {
                question: "How long does a redesign take?",
                answer: "Most redesign projects take 2-4 weeks for typical SMB sites, depending on complexity and requirements."
              },
              {
                question: "Can you migrate my content?",
                answer: "Yes, we handle all content migration including pages, images, and setting up proper redirects to maintain SEO value."
              },
              {
                question: "Do you provide hosting?",
                answer: "We deploy your site on modern platforms like Vercel or Netlify and help you set up your custom domain."
              },
              {
                question: "What's included in maintenance?",
                answer: "Our maintenance plans include regular updates, security monitoring, backups, performance checks, and monthly reports."
              },
             
            ].map((faq, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm"
                variants={fadeInUp}
              >
                <h3 className="font-sora font-semibold text-lg text-dark mb-2">{faq.question}</h3>
                <p className="text-gray-text">{faq.answer}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Response Time Promise */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div 
            className="max-w-4xl mx-auto text-center bg-primary/5 p-8 rounded-2xl"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <Clock className="text-primary mx-auto mb-4" size={48} />
            <h2 className="font-sora font-semibold text-2xl text-dark mb-4">
              Our Response Time Promise
            </h2>
            <p className="text-gray-text text-lg mb-6">
              We'll send you a detailed Loom video audit of your current website within 24-48 hours of receiving your inquiry.
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-sm">
              <div>
                <div className="font-semibold text-dark mb-1">Form Submission</div>
                <div className="text-gray-text">Within 1 hour acknowledgment</div>
              </div>
              <div>
                <div className="font-semibold text-dark mb-1">Audit Delivery</div>
                <div className="text-gray-text">24-48 hours max</div>
              </div>
              <div>
                <div className="font-semibold text-dark mb-1">Follow-up Call</div>
                <div className="text-gray-text">Within 3 business days</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
