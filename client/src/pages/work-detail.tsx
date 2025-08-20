import { useParams } from 'wouter';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, Star } from 'lucide-react';
import { Link } from 'wouter';
import { SEOHead } from '@/components/ui/seo-head';
import { BeforeAfterSlider } from '@/components/ui/before-after-slider';
import { CTAButton } from '@/components/ui/cta-button';
import projectsData from '@/data/projects.json';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

export default function WorkDetail() {
  const { slug } = useParams();
  const project = projectsData.projects.find(p => p.slug === slug);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-sora font-bold text-dark mb-4">Project Not Found</h1>
          <Link href="/work" className="text-primary hover:underline">
            ← Back to Portfolio
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <SEOHead 
        title={`${project.title} Case Study - WebRevamp Studio`}
        description={`${project.summary} See how we achieved ${project.impact.leads} increase in leads and ${project.impact.lcp} page load time.`}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-blue-50 py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div 
            className="max-w-4xl mx-auto"
            initial="initial"
            animate="animate"
            variants={fadeInUp}
          >
            <Link 
              href="/work" 
              className="inline-flex items-center text-primary hover:text-blue-700 mb-8 transition-colors"
            >
              <ArrowLeft className="mr-2" size={16} />
              Back to Portfolio
            </Link>
            
            <div className="text-center">
              <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium mb-4">
                {project.industry}
              </span>
              
              <h1 className="text-4xl md:text-5xl font-sora font-bold text-dark mb-6">
                {project.title}
              </h1>
              
              <p className="text-xl text-gray-text mb-8 max-w-2xl mx-auto">
                {project.summary}
              </p>
              
              {/* Key Metrics */}
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <div className="text-2xl font-bold text-success mb-1">{project.impact.leads}</div>
                  <div className="text-sm text-gray-text">Lead Increase</div>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <div className="text-2xl font-bold text-primary mb-1">{project.impact.lcp}</div>
                  <div className="text-sm text-gray-text">Page Load Time</div>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <div className="text-2xl font-bold text-warning mb-1">{project.impact.lighthouse}</div>
                  <div className="text-sm text-gray-text">Lighthouse Score</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Before/After Comparison */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div 
            className="max-w-4xl mx-auto"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-sora font-bold text-dark mb-4">
                The Transformation
              </h2>
              <p className="text-lg text-gray-text">
                See the dramatic difference our redesign made
              </p>
            </div>
            
            <BeforeAfterSlider
              beforeImage={project.beforeImage}
              afterImage={project.afterImage}
              beforeAlt={`Before - ${project.title}`}
              afterAlt={`After - ${project.title}`}
            />
          </motion.div>
        </div>
      </section>

      {/* Problem → Solution → Impact */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              <motion.div
                className="bg-white p-8 rounded-2xl shadow-sm"
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={fadeInUp}
              >
                <div className="bg-red-100 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                  <span className="text-red-600 text-xl">⚠️</span>
                </div>
                <h3 className="font-sora font-semibold text-xl text-dark mb-4">The Problem</h3>
                <p className="text-gray-text">{project.problem}</p>
              </motion.div>
              
              <motion.div
                className="bg-white p-8 rounded-2xl shadow-sm"
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ delay: 0.1 }}
              >
                <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                  <span className="text-primary text-xl">💡</span>
                </div>
                <h3 className="font-sora font-semibold text-xl text-dark mb-4">Our Solution</h3>
                <p className="text-gray-text">{project.solution}</p>
              </motion.div>
              
              <motion.div
                className="bg-white p-8 rounded-2xl shadow-sm"
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ delay: 0.2 }}
              >
                <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                  <span className="text-success text-xl">📈</span>
                </div>
                <h3 className="font-sora font-semibold text-xl text-dark mb-4">The Impact</h3>
                <ul className="text-gray-text space-y-2">
                  <li>{project.impact.leads} increase in leads</li>
                  <li>{project.impact.lcp} average load time</li>
                  <li>{project.impact.lighthouse} Lighthouse score</li>
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl font-sora font-bold text-dark mb-4">
              Technology Stack
            </h2>
            <p className="text-lg text-gray-text mb-8">
              Modern technologies that power performance and reliability
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              {project.stack.map((tech, index) => (
                <span 
                  key={index}
                  className="bg-gray-100 text-dark px-4 py-2 rounded-lg font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Gallery */}
      {project.gallery && project.gallery.length > 0 && (
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div 
              className="max-w-4xl mx-auto"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <div className="text-center mb-12">
                <h2 className="text-3xl font-sora font-bold text-dark mb-4">
                  Project Gallery
                </h2>
                <p className="text-lg text-gray-text">
                  Additional views of the final website
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                {project.gallery.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`${project.title} gallery image ${index + 1}`}
                    className="w-full h-64 object-cover rounded-xl shadow-sm hover:shadow-lg transition-shadow"
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Client Testimonial */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div 
            className="max-w-3xl mx-auto text-center"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <div className="bg-gray-50 p-8 rounded-2xl">
              <div className="flex justify-center mb-4">
                <div className="flex text-warning">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="fill-current" size={20} />
                  ))}
                </div>
              </div>
              
              <blockquote className="text-xl text-gray-text mb-6 italic">
                "{project.testimonial.quote}"
              </blockquote>
              
              <div className="text-center">
                <div className="font-semibold text-dark text-lg">{project.testimonial.author}</div>
                <div className="text-gray-text">{project.testimonial.company}</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-sora font-bold mb-4">
              Ready for your own transformation?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Let's discuss how we can achieve similar results for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CTAButton
                href="/contact"
                variant="secondary"
                size="lg"
                eventLabel="case_study_cta"
              >
                Start Your Project
              </CTAButton>
              <CTAButton
                href="/work"
                variant="outline"
                size="lg"
                eventLabel="view_more_work"
              >
                View More Work
              </CTAButton>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
