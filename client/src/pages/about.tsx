import { motion } from 'framer-motion';
import { TrendingUp, Eye, Code } from 'lucide-react';
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

export default function About() {
  const principles = [
    {
      icon: <TrendingUp className="text-primary text-2xl" />,
      title: "Performance First",
      description: "Every line of code is optimized for speed and Core Web Vitals compliance."
    },
    {
      icon: <Eye className="text-primary text-2xl" />,
      title: "Crystal Clear", 
      description: "Clean design and intuitive user experience that guides visitors to action."
    },
    {
      icon: <Code className="text-primary text-2xl" />,
      title: "Maintainable",
      description: "Built with modern frameworks and best practices for long-term reliability."
    }
  ];

  const techStack = [
    "React", "Next.js", "Tailwind CSS", "Node.js", 
    "Express", "MongoDB", "Vercel", "TypeScript"
  ];

  return (
    <>
      <SEOHead 
        title="About WebRevamp Studio - Modern Website Redesign Experts"
        description="Learn about our mission to help Indian SMBs compete online with modern, fast, and conversion-focused websites. Founded by Nikhil Borude, MERN stack expert."
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
              About{' '}
              <span className="text-primary">WebRevamp Studio</span>
            </h1>
            
            <p className="text-xl text-gray-text mb-8 max-w-2xl mx-auto leading-relaxed">
              We're on a mission to help Indian SMBs compete online with modern, fast, and conversion-focused websites.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <motion.div
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={fadeInUp}
              >
                <h2 className="font-sora font-semibold text-3xl text-dark mb-6">Our Mission</h2>
                <p className="text-gray-text mb-6">
                  Too many great businesses are held back by outdated websites that don't represent their quality. We bridge that gap by creating modern web experiences that drive real business growth.
                </p>
                <p className="text-gray-text">
                  Founded by <strong>Nikhil Borude</strong>, a full-stack developer with expertise in the MERN stack, we combine technical excellence with business understanding to deliver websites that actually work for your business.
                </p>
              </motion.div>
              
              <motion.div 
                className="bg-gray-50 p-8 rounded-2xl"
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={fadeInUp}
              >
                <img 
                  src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300"
                  alt="Modern web development workspace"
                  className="w-full h-64 object-cover rounded-xl"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Principles */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeader 
            title="Our Core Principles"
            subtitle="The values that guide every project we undertake"
          />
          
          <motion.div 
            className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {principles.map((principle, index) => (
              <motion.div
                key={index}
                className="text-center bg-white p-8 rounded-2xl shadow-sm"
                variants={fadeInUp}
              >
                <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  {principle.icon}
                </div>
                <h3 className="font-sora font-semibold text-lg text-dark mb-2">{principle.title}</h3>
                <p className="text-gray-text text-sm">{principle.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <SectionHeader 
              title="Technologies We Use"
              subtitle="Modern tools and frameworks that power performance and reliability"
            />
            
            <div className="flex flex-wrap justify-center gap-4">
              {techStack.map((tech, index) => (
                <span 
                  key={index}
                  className="bg-gray-100 text-dark px-4 py-2 rounded-lg font-medium transition-colors hover:bg-primary hover:text-white"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div 
            className="max-w-4xl mx-auto"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm">
              <div className="grid md:grid-cols-3 gap-8 items-center">
                <div className="text-center">
                  <div className="w-32 h-32 bg-gradient-to-br from-primary to-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-white text-4xl font-sora font-bold">NB</span>
                  </div>
                  <h3 className="font-sora font-semibold text-xl text-dark mb-1">Nikhil Borude</h3>
                  <p className="text-gray-text">Founder & Lead Developer</p>
                </div>
                
                <div className="md:col-span-2">
                  <h3 className="font-sora font-semibold text-2xl text-dark mb-4">Meet the Founder</h3>
                  <p className="text-gray-text mb-4">
                    With years of experience in full-stack development and a passion for helping small businesses succeed online, Nikhil founded WebRevamp Studio to bridge the gap between great businesses and great websites.
                  </p>
                  <p className="text-gray-text">
                    Specializing in the MERN stack and modern web technologies, he leads every project with a focus on performance, user experience, and business results.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeader 
            title="Why Choose WebRevamp Studio?"
            subtitle="The qualities that set us apart from other web development agencies"
          />
          
          <motion.div 
            className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              {
                title: "Business-First Approach",
                description: "We don't just build websites; we build growth engines. Every decision is made with your business goals in mind."
              },
              {
                title: "Transparent Communication",
                description: "No tech jargon or hidden surprises. We keep you informed every step of the way with clear, honest communication."
              },
              {
                title: "Local Market Understanding", 
                description: "As experts in the Indian market, we understand the unique challenges and opportunities facing SMBs in India."
              },
              {
                title: "Long-term Partnership",
                description: "We're not just vendors; we're partners in your growth. Our maintenance plans ensure your website continues to perform."
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                className="bg-gray-50 p-6 rounded-xl"
                variants={fadeInUp}
              >
                <h3 className="font-sora font-semibold text-lg text-dark mb-3">{value.title}</h3>
                <p className="text-gray-text text-sm">{value.description}</p>
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
              Ready to work with us?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Let's discuss how we can help transform your website and grow your business online.
            </p>
            <CTAButton
              href="/contact"
              variant="secondary"
              size="lg"
              eventLabel="about_bottom_cta"
            >
              Start Your Project
            </CTAButton>
          </div>
        </div>
      </section>
    </>
  );
}
