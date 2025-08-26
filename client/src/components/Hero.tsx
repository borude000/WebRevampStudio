import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { CTAButton } from '@/components/ui/cta-button';
import { Link } from 'wouter';

export function Hero() {
  const fadeInLeft = {
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  const fadeInRight = {
    initial: { opacity: 0, x: 50 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.8, ease: "easeOut", delay: 0.2 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const staggerItem = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 }
  };

  return (
    <section className="bg-white py-20 lg:py-32 overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Column - Content */}
          <motion.div 
            className="space-y-8"
            initial="initial"
            animate="animate"
            variants={staggerContainer}
          >
            <motion.h1 
              className="text-4xl md:text-5xl font-bold text-dark leading-tight"
              variants={staggerItem}
            >
              Transforming ideas into modern,{' '}
              <span className="text-primary">responsive websites</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl text-gray-text leading-relaxed max-w-lg"
              variants={staggerItem}
            >
              Breathe new life into your old site or start fresh with a custom build.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              variants={staggerItem}
            >
              <Link href="/contact">
                <CTAButton size="lg" className="px-8 py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                  Get a Free Audit
                </CTAButton>
              </Link>
              
              <Link href="/work">
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="px-8 py-4 text-lg rounded-xl border-2 hover:bg-primary hover:text-white hover:border-primary transition-all duration-300"
                >
                  View Work
                </Button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Column - Device Mockups */}
          <motion.div 
            className="relative"
            initial="initial"
            animate="animate"
            variants={fadeInRight}
          >
            {/* Laptop Mockup */}
            <motion.div 
              className="relative z-10"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="bg-gray-800 rounded-t-2xl p-3 shadow-2xl">
                {/* Laptop Screen - PNG Image */}
                <div className="bg-white rounded-lg overflow-hidden aspect-[16/10] flex items-center justify-center">
                  <img src="/images/fitl.png" alt="Laptop" className="w-full h-full object-cover" />
                </div>
              </div>
              {/* Laptop Base */}
              <div className="bg-gray-300 h-4 rounded-b-2xl shadow-lg relative">
                <div className="absolute inset-x-0 top-1 h-2 bg-gray-400 rounded-b-lg mx-20"></div>
              </div>
            </motion.div>

            {/* Mobile Mockup */}
            <motion.div 
              className="absolute -bottom-8 -right-4 lg:-right-8 z-20"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className="bg-gray-900 rounded-3xl p-2 shadow-2xl w-28 sm:w-32">
                {/* Mobile Screen - PNG Image */}
                <div className="bg-white rounded-2xl overflow-hidden aspect-[9/19.5] flex items-center justify-center">
                  <img src="/images/fit3.png" alt="Mobile" className="w-full h-full object-cover" />
                </div>
              </div>
            </motion.div>

            {/* Floating Elements */}
            <motion.div
              className="absolute -top-6 -left-6 w-12 h-12 bg-primary/20 rounded-full"
              animate={{ 
                y: [0, -10, 0],
                rotate: [0, 180, 360]
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            
            <motion.div
              className="absolute -bottom-4 -left-8 w-8 h-8 bg-success/20 rounded-full"
              animate={{ 
                y: [0, 10, 0],
                x: [0, 5, 0]
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}