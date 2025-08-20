import { motion } from 'framer-motion';
import { Star, CheckCircle, ArrowRight, Search, Rocket, Zap, Eye, Edit, Shield, Code, TrendingUp, Clock, Infinity } from 'lucide-react';
import { SEOHead } from '@/components/ui/seo-head';
import { SectionHeader } from '@/components/ui/section-header';
import { CTAButton } from '@/components/ui/cta-button';
import { BeforeAfterSlider } from '@/components/ui/before-after-slider';
import testimonialsData from '@/data/testimonials.json';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const slideInLeft = {
  initial: { opacity: 0, x: -50 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.8, ease: "easeOut" }
};

const slideInRight = {
  initial: { opacity: 0, x: 50 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.8, ease: "easeOut" }
};

const scaleIn = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.6, ease: "easeOut" }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

const floatingAnimation = {
  animate: {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Number.POSITIVE_INFINITY,
      ease: "easeInOut"
    }
  }
};

const pulseAnimation = {
  animate: {
    scale: [1, 1.05, 1],
    transition: {
      duration: 2,
      repeat: Number.POSITIVE_INFINITY,
      ease: "easeInOut"
    }
  }
};

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "WebRevamp Studio",
    "description": "Modern website redesigns for growing businesses across India",
    "url": "https://webrevampstudio.com",
    "logo": "https://webrevampstudio.com/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-98765-43210",
      "contactType": "customer service",
      "areaServed": "IN",
      "availableLanguage": "en"
    }
  };

  return (
    <>
      <SEOHead 
        title="WebRevamp Studio - Modern Website Redesigns for Growing Businesses"
        description="We transform outdated websites into modern, fast, mobile-first experiences. Professional website redesign, development, and maintenance services for Indian SMBs."
        structuredData={structuredData}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-blue-50 py-20 lg:py-32 relative overflow-hidden">
        {/* Animated Background Elements */}
        <motion.div 
          className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-xl"
          variants={floatingAnimation}
          animate="animate"
        />
        <motion.div 
          className="absolute bottom-20 right-10 w-48 h-48 bg-success/10 rounded-full blur-xl"
          variants={floatingAnimation}
          animate="animate"
          transition={{ delay: 1 }}
        />
        
        <div className="container mx-auto px-4 lg:px-8 relative">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            {/* Trust Badge */}
            <motion.div 
              className="mb-6"
              variants={scaleIn}
            >
              <motion.span 
                className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-success/10 text-success"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <CheckCircle className="mr-2" size={16} />
                Trusted by 50+ businesses across India
              </motion.span>
            </motion.div>
            
            <motion.h1 
              className="text-4xl md:text-6xl font-sora font-bold text-dark mb-6 leading-tight"
              variants={fadeInUp}
            >
              We turn outdated websites into{' '}
              <motion.span 
                className="text-primary"
                animate={{ 
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                style={{
                  background: "linear-gradient(90deg, #3B82F6, #1D4ED8, #3B82F6)",
                  backgroundSize: "200% 100%",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                growth engines
              </motion.span>
            </motion.h1>
            
            <motion.p 
              className="text-xl text-gray-text mb-8 max-w-2xl mx-auto leading-relaxed"
              variants={slideInLeft}
            >
              Modern redesigns, lightning-fast performance, and ongoing maintenance for small businesses ready to grow online.
            </motion.p>
            
            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              variants={slideInRight}
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <CTAButton
                  href="/contact"
                  size="lg"
                  eventLabel="hero_primary_cta"
                  icon={<Search size={20} />}
                >
                  Get a Free Audit
                </CTAButton>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300, delay: 0.1 }}
              >
                <CTAButton
                  href="/work"
                  variant="secondary"
                  size="lg"
                  eventLabel="hero_secondary_cta"
                  icon={<ArrowRight size={20} />}
                >
                  View Our Work
                </CTAButton>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Pain to Outcome Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeader 
            title="From website problems to business growth"
            subtitle="We identify what's holding your website back and transform it into a powerful marketing tool"
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
                problem: { icon: <div className="text-red-500 text-3xl">⚠️</div>, title: "Slow Loading", desc: "5+ seconds load time driving visitors away" },
                solution: { icon: <Zap className="text-3xl text-success" />, title: "Lightning Fast", desc: "Sub-2 second loading with 90+ Lighthouse score" }
              },
              {
                problem: { icon: <div className="text-red-500 text-3xl">📱</div>, title: "Not Mobile Friendly", desc: "Poor mobile experience losing 60% of traffic" },
                solution: { icon: <CheckCircle className="text-3xl text-success" />, title: "100% Responsive", desc: "Perfect experience across all devices" }
              },
              {
                problem: { icon: <div className="text-red-500 text-3xl">👁️</div>, title: "Poor Design", desc: "Outdated design hurting brand credibility" },
                solution: { icon: <Eye className="text-3xl text-success" />, title: "Modern UI/UX", desc: "Clean, professional design that converts" }
              },
              {
                problem: { icon: <div className="text-red-500 text-3xl">⚙️</div>, title: "Hard to Update", desc: "Complex backend requiring developer for changes" },
                solution: { icon: <Edit className="text-3xl text-success" />, title: "Easy Management", desc: "Simple CMS for quick content updates" }
              }
            ].map((item, index) => (
              <motion.div 
                key={index}
                className="text-center"
                variants={fadeInUp}
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div 
                  className="bg-red-50 p-6 rounded-2xl mb-4"
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.2 }}
                >
                  <motion.div
                    animate={{ 
                      rotate: [0, -5, 5, 0],
                      scale: [1, 1.1, 1] 
                    }}
                    transition={{ 
                      duration: 2, 
                      repeat: Number.POSITIVE_INFINITY,
                      repeatDelay: 3
                    }}
                  >
                    {item.problem.icon}
                  </motion.div>
                  <h3 className="font-sora font-semibold text-lg text-dark mb-2 mt-4">{item.problem.title}</h3>
                  <p className="text-gray-text text-sm">{item.problem.desc}</p>
                </motion.div>
                
                <motion.div 
                  className="flex justify-center mb-4"
                  animate={{ 
                    y: [0, -3, 0],
                    rotate: [90, 95, 85, 90]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut"
                  }}
                >
                  <ArrowRight className="text-primary text-2xl rotate-90" />
                </motion.div>
                
                <motion.div 
                  className="bg-success/10 p-6 rounded-2xl"
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.2 }}
                >
                  <motion.div
                    animate={{ 
                      scale: [1, 1.05, 1] 
                    }}
                    transition={{ 
                      duration: 2, 
                      repeat: Number.POSITIVE_INFINITY,
                      repeatDelay: 2,
                      delay: index * 0.5
                    }}
                  >
                    {item.solution.icon}
                  </motion.div>
                  <h3 className="font-sora font-semibold text-lg text-dark mb-2 mt-4">{item.solution.title}</h3>
                  <p className="text-gray-text text-sm">{item.solution.desc}</p>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Snapshot */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeader 
            title="Complete website transformation services"
            subtitle="From redesign to ongoing maintenance, we handle every aspect of your web presence"
          />
          
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              {
                icon: <Eye className="text-primary text-xl" />,
                title: "Website Redesign",
                desc: "Complete UI/UX overhaul with modern design principles and conversion optimization.",
                features: ["User experience audit", "Modern visual design", "Conversion optimization"]
              },
              {
                icon: <Code className="text-primary text-xl" />,
                title: "Responsive Development", 
                desc: "Mobile-first development using React/Next.js with accessibility standards.",
                features: ["React/Next.js development", "WCAG 2.1 accessibility", "Cross-browser compatibility"]
              },
              {
                icon: <TrendingUp className="text-primary text-xl" />,
                title: "Performance & SEO",
                desc: "Core Web Vitals optimization and technical SEO for better search rankings.",
                features: ["Core Web Vitals optimization", "Technical SEO setup", "Schema.org markup"]
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300"
                variants={fadeInUp}
                whileHover={{ 
                  y: -8,
                  scale: 1.02,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div 
                  className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-6"
                  whileHover={{ 
                    scale: 1.1,
                    rotate: 5,
                    backgroundColor: "rgba(59, 130, 246, 0.2)"
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    animate={{ 
                      rotateY: [0, 360] 
                    }}
                    transition={{ 
                      duration: 4, 
                      repeat: Number.POSITIVE_INFINITY,
                      delay: index * 0.5
                    }}
                  >
                    {service.icon}
                  </motion.div>
                </motion.div>
                <motion.h3 
                  className="font-sora font-semibold text-xl text-dark mb-4"
                  whileHover={{ color: "#3B82F6" }}
                  transition={{ duration: 0.2 }}
                >
                  {service.title}
                </motion.h3>
                <p className="text-gray-text mb-6">{service.desc}</p>
                <motion.ul 
                  className="space-y-2 text-sm text-gray-text"
                  variants={staggerContainer}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                >
                  {service.features.map((feature, idx) => (
                    <motion.li 
                      key={idx} 
                      className="flex items-center"
                      variants={slideInLeft}
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ 
                          duration: 1.5,
                          repeat: Number.POSITIVE_INFINITY,
                          delay: idx * 0.2
                        }}
                      >
                        <CheckCircle className="text-success mr-2" size={16} />
                      </motion.div>
                      {feature}
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Case Study */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeader 
            title="See the transformation in action"
            subtitle="Real projects showing the dramatic impact of our redesign process"
          />
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-100 rounded-2xl p-8">
              <div className="text-center mb-8">
                <h3 className="font-sora font-semibold text-2xl text-dark mb-2">Krishna Dentals Redesign</h3>
                <p className="text-gray-text">Healthcare | Appointment booking integration</p>
              </div>
              
              <BeforeAfterSlider
                beforeImage="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400"
                afterImage="https://images.unsplash.com/photo-1629909613654-28e377c37b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400"
                beforeAlt="Before - Outdated dental clinic website"
                afterAlt="After - Modern dental clinic website"
              />
              
              {/* Results */}
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <div className="text-center bg-success/10 p-6 rounded-xl">
                  <div className="text-2xl font-bold text-success mb-2">+35%</div>
                  <div className="text-sm text-gray-text">Increase in online bookings</div>
                </div>
                <div className="text-center bg-primary/10 p-6 rounded-xl">
                  <div className="text-2xl font-bold text-primary mb-2">&lt;2.2s</div>
                  <div className="text-sm text-gray-text">Average page load time</div>
                </div>
                <div className="text-center bg-warning/10 p-6 rounded-xl">
                  <div className="text-2xl font-bold text-warning mb-2">95</div>
                  <div className="text-sm text-gray-text">Google Lighthouse score</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeader 
            title="Our proven 4-step process"
            subtitle="From initial audit to ongoing maintenance, we handle every step with transparency and expertise"
          />
          
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Process Timeline */}
              <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-px top-8 bottom-8 w-0.5 bg-primary"></div>
              
              {/* Process Steps */}
              <div className="space-y-12">
                {[
                  {
                    number: 1,
                    title: "Audit & Strategy",
                    desc: "We analyze your current site's performance, user experience, and business goals to create a comprehensive improvement strategy.",
                    duration: "2-3 days",
                    icon: <Search />
                  },
                  {
                    number: 2,
                    title: "UX/UI Redesign", 
                    desc: "Our designers create wireframes and mockups focused on user experience, conversion optimization, and modern aesthetics.",
                    duration: "1 week",
                    icon: <Eye />
                  },
                  {
                    number: 3,
                    title: "Build & Optimize",
                    desc: "Development using modern frameworks with focus on performance, SEO, accessibility, and mobile responsiveness.",
                    duration: "2-3 weeks", 
                    icon: <Code />
                  },
                  {
                    number: 4,
                    title: "Launch & Maintain",
                    desc: "We handle the migration, provide training, and offer ongoing maintenance to ensure your site stays fast and secure.",
                    duration: "Ongoing",
                    icon: <Rocket />
                  }
                ].map((step, index) => (
                  <motion.div 
                    key={step.number}
                    className="relative flex items-center"
                    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 }}
                  >
                    <div className="absolute left-0 md:left-1/2 md:transform md:-translate-x-1/2 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm">
                      {step.number}
                    </div>
                    <div className={`ml-16 md:ml-0 ${index % 2 === 0 ? 'md:w-1/2 md:pr-8' : 'md:w-1/2 md:pl-8 md:ml-auto'}`}>
                      <h3 className="font-sora font-semibold text-xl text-dark mb-2">{step.title}</h3>
                      <p className="text-gray-text">{step.desc}</p>
                      <div className="mt-4 text-sm text-primary font-medium">
                        <Clock className="inline mr-1" size={16} />
                        {step.duration}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results Metrics */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeader 
            title="Results that drive business growth"
            subtitle="Our data-driven approach delivers measurable improvements across all key metrics"
          />
          
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              { metric: "30%", title: "Average Lead Increase", desc: "More inquiries from better UX", color: "success" },
              { metric: "<2.5s", title: "Page Load Time", desc: "Optimized for Core Web Vitals", color: "primary" },
              { metric: "100%", title: "Mobile Friendly", desc: "Perfect responsive experience", color: "warning" },
              { metric: "90+", title: "Lighthouse Score", desc: "Performance & SEO optimized", color: "success" }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="text-center bg-gray-50 p-8 rounded-2xl"
                variants={fadeInUp}
              >
                <div className={`text-4xl font-bold text-${item.color} mb-2`}>{item.metric}</div>
                <div className="text-lg font-semibold text-dark mb-1">{item.title}</div>
                <div className="text-sm text-gray-text">{item.desc}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeader 
            title="What our clients say"
            subtitle="Real feedback from business owners who transformed their online presence"
          />
          
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {testimonialsData.testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-sm"
                variants={fadeInUp}
              >
                <div className="flex items-center mb-4">
                  <div className="flex text-warning text-sm">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="fill-current" size={16} />
                    ))}
                  </div>
                </div>
                <p className="text-gray-text mb-6 italic">"{testimonial.quote}"</p>
                <div className="flex items-center">
                  <img 
                    src={testimonial.avatar}
                    alt={testimonial.author}
                    className="w-12 h-12 rounded-full mr-4 object-cover"
                  />
                  <div>
                    <div className="font-semibold text-dark">{testimonial.author}</div>
                    <div className="text-sm text-gray-text">{testimonial.company}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-sora font-bold mb-4">
              Don't let an outdated website hold you back
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join 50+ businesses who've transformed their online presence with our proven process
            </p>
            <CTAButton
              href="/contact"
              variant="secondary"
              size="lg"
              eventLabel="final_cta"
              icon={<Rocket size={20} />}
            >
              Start Your Transformation Today
            </CTAButton>
          </div>
        </div>
      </section>
    </>
  );
}
