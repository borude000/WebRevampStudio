import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { Link } from 'wouter';
import { SEOHead } from '@/components/ui/seo-head';
import { SectionHeader } from '@/components/ui/section-header';
import { CTAButton } from '@/components/ui/cta-button';
import projectsData from '@/data/projects.json';

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

export default function Work() {
  const getIndustryColor = (industry: string) => {
    const colors = {
      'Healthcare': 'bg-blue-100 text-primary',
      'E-commerce': 'bg-green-100 text-success', 
      'Manufacturing': 'bg-yellow-100 text-warning'
    };
    return colors[industry as keyof typeof colors] || 'bg-gray-100 text-gray-text';
  };

  return (
    <>
      <SEOHead 
        title="Our Portfolio - Website Redesign Case Studies | WebRevamp Studio"
        description="See real transformations from our website redesign projects. Case studies showing dramatic improvements in performance, user experience, and business results."
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
              Our portfolio of{' '}
              <span className="text-primary">transformations</span>
            </h1>
            
            <p className="text-xl text-gray-text mb-8 max-w-2xl mx-auto leading-relaxed">
              See how we've helped businesses across industries modernize their web presence and achieve measurable growth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeader 
            title="Real projects, real results"
            subtitle="Each case study represents a successful partnership and transformation"
          />
          
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {projectsData.projects.map((project, index) => (
              <motion.div
                key={project.slug}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100"
                variants={fadeInUp}
                whileHover={{ 
                  y: -8,
                  scale: 1.02,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                  borderColor: "rgba(59, 130, 246, 0.3)"
                }}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <motion.div 
                  className="relative overflow-hidden"
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.img 
                    src={project.afterImage}
                    alt={`${project.title} website redesign`}
                    className="w-full h-48 object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  />
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0"
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                  <motion.div 
                    className="absolute top-4 right-4"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: index * 0.1 + 0.5, type: "spring" }}
                  >
                    <motion.span 
                      className={`text-xs px-2 py-1 rounded ${getIndustryColor(project.industry)}`}
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.2 }}
                    >
                      {project.industry}
                    </motion.span>
                  </motion.div>
                </motion.div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-sora font-semibold text-lg text-dark">{project.title}</h3>
                  </div>
                  
                  <p className="text-gray-text text-sm mb-4 line-clamp-2">{project.summary}</p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-sm">
                      <span className="text-success font-semibold">{project.impact.leads}</span>
                      <span className="text-gray-text mx-2">•</span>
                      <span className="text-primary font-semibold">{project.impact.lcp}</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.stack.slice(0, 3).map((tech, idx) => (
                      <span 
                        key={idx}
                        className="text-xs bg-gray-100 text-gray-text px-2 py-1 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.stack.length > 3 && (
                      <span className="text-xs text-gray-400">+{project.stack.length - 3} more</span>
                    )}
                  </div>
                  
                  <Link 
                    href={`/work/${project.slug}`}
                    className="text-primary font-semibold text-sm hover:underline flex items-center group"
                  >
                    View Case Study 
                    <ArrowRight className="ml-1 group-hover:translate-x-1 transition-transform" size={16} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeader 
            title="Results across all projects"
            subtitle="Consistent improvements that drive real business growth"
          />
          
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              { metric: "50+", title: "Projects Completed", desc: "Successful transformations delivered" },
              { metric: "35%", title: "Average Lead Increase", desc: "Across all client websites" },
              { metric: "<2.5s", title: "Average Load Time", desc: "Consistently fast performance" },
              { metric: "92", title: "Average Lighthouse Score", desc: "Optimized for all metrics" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center bg-white p-8 rounded-2xl shadow-sm"
                variants={fadeInUp}
              >
                <div className="text-4xl font-bold text-primary mb-2">{stat.metric}</div>
                <div className="text-lg font-semibold text-dark mb-1">{stat.title}</div>
                <div className="text-sm text-gray-text">{stat.desc}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process Preview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeader 
            title="Our proven process"
            subtitle="How we consistently deliver successful transformations"
          />
          
          <motion.div 
            className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              {
                title: "Analyze & Plan",
                description: "We audit your current site and create a comprehensive strategy for improvement.",
                color: "bg-blue-100 text-primary"
              },
              {
                title: "Design & Build", 
                description: "Our team designs and develops your new website with modern best practices.",
                color: "bg-green-100 text-success"
              },
              {
                title: "Launch & Optimize",
                description: "We handle the launch and provide ongoing optimization for continued growth.",
                color: "bg-yellow-100 text-warning"
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                className="text-center"
                variants={fadeInUp}
              >
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 ${step.color}`}>
                  <span className="text-2xl font-bold">{index + 1}</span>
                </div>
                <h3 className="font-sora font-semibold text-lg text-dark mb-2">{step.title}</h3>
                <p className="text-gray-text text-sm">{step.description}</p>
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
              Ready to join our success stories?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Let's discuss how we can transform your website and drive real business growth.
            </p>
            <CTAButton
              href="/contact"
              variant="secondary"
              size="lg"
              eventLabel="work_bottom_cta"
              icon={<ArrowRight size={20} />}
            >
              Start Your Transformation
            </CTAButton>
          </div>
        </div>
      </section>
    </>
  );
}
