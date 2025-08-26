import { motion } from 'framer-motion';
import { CheckCircle, Eye, Code, TrendingUp, Shield, Plug, Star, ArrowRight } from 'lucide-react';
import { SEOHead } from '@/components/ui/seo-head';
import { SectionHeader } from '@/components/ui/section-header';
import { CTAButton } from '@/components/ui/cta-button';

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

export default function Services() {
  const services = [
    {
      icon: <Eye className="text-primary text-xl" />,
      title: "Website Redesign",
      description: "Complete UI/UX overhaul with modern design principles, improved information architecture, and conversion-focused copy.",
      features: [
        "User experience audit",
        "Modern visual design", 
        "Conversion optimization"
      ]
    },
    {
      icon: <Code className="text-primary text-xl" />,
      title: "Responsive Development",
      description: "Mobile-first development using React/Next.js with accessibility standards and clean, maintainable code.",
      features: [
        "React/Next.js development",
        "WCAG 2.1 accessibility",
        "Cross-browser compatibility"
      ]
    },
    {
      icon: <TrendingUp className="text-primary text-xl" />,
      title: "Performance & SEO",
      description: "Core Web Vitals optimization, on-page SEO, and schema markup for better search rankings and user experience.",
      features: [
        "Core Web Vitals optimization",
        "Technical SEO setup",
        "Schema.org markup"
      ]
    },
    {
      icon: <Shield className="text-primary text-xl" />,
      title: "Ongoing Maintenance",
      description: "Regular updates, security monitoring, performance checks, and monthly reports to keep your site running smoothly.",
      features: [
        "Security monitoring",
        "Regular backups",
        "Monthly performance reports"
      ]
    },
    {
      icon: <Plug className="text-primary text-xl" />,
      title: "System Integrations",
      description: "Connect your website with WhatsApp, CRM systems, payment gateways, booking systems, and analytics tools.",
      features: [
        "WhatsApp integration",
        "Payment gateway setup",
        "Analytics & tracking"
      ]
    }
  ];

  const maintenancePlans = [
    {
      name: "Starter",
      price: "₹2,999",
      description: "Essential maintenance for small businesses",
      features: [
        "Regular updates & patches",
        "Daily automated backups",
        "Uptime monitoring",
        "Basic security scanning",
        "Email support"
      ],
      popular: false
    },
    {
      name: "Growth",
      price: "₹5,999",
      description: "Everything in Starter plus content management",
      features: [
        "Everything in Starter",
        "Monthly content updates",
        "Advanced security scanning",
        "Performance monitoring",
        "Monthly reports",
        "Priority support"
      ],
      popular: true
    },
    {
      name: "Pro",
      price: "₹9,999",
      description: "Complete management for growing businesses",
      features: [
        "Everything in Growth",
        "5 hours feature development",
        "SEO optimization tweaks",
        "A/B testing setup",
        "Dedicated account manager",
        "24/7 priority support"
      ],
      popular: false
    }
  ];

  return (
    <>
      <SEOHead 
        title="Website Redesign Services - WebRevamp Studio"
        description="Professional website redesign, responsive development, SEO optimization, and maintenance services for Indian SMBs. Transform your outdated website into a growth engine."
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
              Complete website transformation{' '}
              <span className="text-primary">services</span>
            </h1>
            
            <p className="text-xl text-gray-text mb-8 max-w-2xl mx-auto leading-relaxed">
              From redesign to ongoing maintenance, we handle every aspect of your web presence with expertise and transparency.
            </p>
            
            <CTAButton
              href="/contact"
              size="lg"
              eventLabel="services_hero_cta"
              icon={<ArrowRight size={20} />}
            >
              Get Started Today
            </CTAButton>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeader 
            title="Our comprehensive service offerings"
            subtitle="Every service designed to maximize your website's impact on business growth"
          />
          
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow border border-gray-100"
                variants={fadeInUp}
              >
                <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                  {service.icon}
                </div>
                <h3 className="font-sora font-semibold text-xl text-dark mb-4">{service.title}</h3>
                <p className="text-gray-text mb-6">{service.description}</p>
                <ul className="space-y-2 text-sm text-gray-text">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <CheckCircle className="text-success mr-2 flex-shrink-0" size={16} />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}

            {/* Complete Package Card */}
            <motion.div
              className="bg-gradient-to-br from-primary to-blue-600 p-8 rounded-2xl text-white"
              variants={fadeInUp}
            >
              <div className="bg-white/20 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <Star className="text-white text-xl" />
              </div>
              <h3 className="font-sora font-semibold text-xl mb-4">Complete Package</h3>
              <p className="mb-6 opacity-90">Get everything above in one comprehensive package with priority support and dedicated project management.</p>
              <CTAButton
                href="/contact"
                variant="secondary"
                eventLabel="complete_package_cta"
                icon={<ArrowRight size={16} />}
              >
                Get Started
              </CTAButton>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Maintenance Plans */}
      {/* <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeader 
            title="Maintenance plans that fit your needs"
            subtitle="Keep your website secure, fast, and up-to-date with our ongoing maintenance services"
          />
          
          <motion.div 
            className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {maintenancePlans.map((plan, index) => (
              <motion.div
                key={index}
                className={`relative p-8 rounded-2xl ${
                  plan.popular 
                    ? 'bg-primary text-white transform scale-105' 
                    : 'bg-white'
                }`}
                variants={fadeInUp}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-success text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className={`font-sora font-semibold text-xl mb-2 ${plan.popular ? 'text-white' : 'text-dark'}`}>
                    {plan.name}
                  </h3>
                  <div className={`text-3xl font-bold mb-2 ${plan.popular ? 'text-white' : 'text-dark'}`}>
                    {plan.price}
                    <span className={`text-lg font-normal ${plan.popular ? 'opacity-80' : 'text-gray-text'}`}>
                      /month
                    </span>
                  </div>
                  <p className={`${plan.popular ? 'opacity-90' : 'text-gray-text'}`}>
                    {plan.description}
                  </p>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className={`flex items-center ${plan.popular ? 'text-white' : 'text-gray-text'}`}>
                      <CheckCircle className="text-success mr-3 flex-shrink-0" size={16} />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <CTAButton
                  href="/contact"
                  variant={plan.popular ? "secondary" : "outline"}
                  className="w-full"
                  eventLabel={`maintenance_${plan.name.toLowerCase()}_cta`}
                >
                  Get Started
                </CTAButton>
              </motion.div>
            ))}
          </motion.div>
          
          <div className="text-center mt-12">
            <p className="text-gray-text mb-4">
              Need a custom solution?{' '}
              <CTAButton
                href="/contact"
                variant="outline"
                size="sm"
                eventLabel="custom_solution_cta"
                className="inline-flex"
              >
                Let's talk
              </CTAButton>
            </p>
          </div>
        </div>
      </section> */}

      {/* Process Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeader 
            title="How we deliver results"
            subtitle="Our proven methodology ensures successful project delivery every time"
          />
          
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              {
                step: "01",
                title: "Discovery & Audit",
                description: "We analyze your current website and business goals to create a comprehensive strategy."
              },
              {
                step: "02", 
                title: "Design & Plan",
                description: "Our team creates detailed wireframes and mockups for your approval before development begins."
              },
              {
                step: "03",
                title: "Develop & Optimize",
                description: "We build your website using modern technologies with focus on performance and SEO."
              },
              {
                step: "04",
                title: "Launch & Support",
                description: "We handle the launch process and provide ongoing support to ensure continued success."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="text-center"
                variants={fadeInUp}
              >
                <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary font-bold text-lg">{item.step}</span>
                </div>
                <h3 className="font-sora font-semibold text-lg text-dark mb-2">{item.title}</h3>
                <p className="text-gray-text text-sm">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-sora font-bold mb-4">
              Ready to transform your website?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Get a free consultation and discover how our services can help grow your business.
            </p>
            <CTAButton
              href="/contact"
              variant="secondary"
              size="lg"
              eventLabel="services_bottom_cta"
              icon={<ArrowRight size={20} />}
            >
              Start Your Project Today
            </CTAButton>
          </div>
        </div>
      </section>
    </>
  );
}
