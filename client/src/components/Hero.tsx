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
              We build modern,{' '}
              <span className="text-primary">responsive websites</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl text-gray-text leading-relaxed max-w-lg"
              variants={staggerItem}
            >
              From outdated to outstanding — your website will shine on any device.
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
                {/* Laptop Screen */}
                <div className="bg-white rounded-lg overflow-hidden aspect-[16/10]">
                  {/* Actual Website Preview */}
                  <div className="w-full h-full bg-white">
                    {/* Browser Header */}
                    <div className="bg-gray-100 h-4 flex items-center px-2 rounded-t-lg">
                      <div className="flex space-x-1">
                        <div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div>
                        <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full"></div>
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                      </div>
                      <div className="ml-3 bg-gray-200 rounded px-2 py-0.5 text-xs text-gray-600">
                        localhost:5000
                      </div>
                    </div>
                    
                    {/* Website Content */}
                    <div className="h-full bg-white">
                      {/* Navigation */}
                      <div className="bg-white border-b border-gray-200 h-6 flex items-center px-3">
                        <div className="text-blue-600 font-bold text-sm">WebRevamp Studio</div>
                        <div className="ml-auto flex space-x-3 text-xs text-gray-600">
                          <span>Home</span>
                          <span>Services</span>
                          <span>Work</span>
                          <span>About</span>
                          <span>Contact</span>
                        </div>
                      </div>
                      
                      {/* Hero Section */}
                      <div className="p-3 grid grid-cols-2 gap-3 h-full">
                        {/* Left Column */}
                        <div className="bg-gray-50 rounded p-2">
                          <h1 className="text-sm font-bold text-gray-900 mb-1 leading-tight">
                            We build modern, <span className="text-blue-600">responsive websites</span>
                          </h1>
                          <p className="text-xs text-gray-600 mb-2 leading-tight">
                            From outdated to outstanding — your website will shine on any device.
                          </p>
                          <div className="flex space-x-1">
                            <div className="bg-blue-600 text-white px-2 py-1 rounded text-xs font-medium">Get Audit</div>
                            <div className="border border-blue-600 text-blue-600 px-2 py-1 rounded text-xs font-medium">View Work</div>
                          </div>
                        </div>
                        
                        {/* Right Column - Device Mockups */}
                        <div className="bg-gray-50 rounded p-2 flex items-center justify-center">
                          {/* Mini Laptop */}
                          <div className="bg-gray-800 rounded p-1 mr-2">
                            <div className="bg-white rounded w-10 h-6">
                              <div className="bg-gray-100 h-1 rounded-t flex items-center px-1">
                                <div className="w-0.5 h-0.5 bg-red-400 rounded-full mr-0.5"></div>
                                <div className="w-0.5 h-0.5 bg-yellow-400 rounded-full mr-0.5"></div>
                                <div className="w-0.5 h-0.5 bg-green-400 rounded-full"></div>
                              </div>
                              <div className="p-1">
                                <div className="bg-blue-600 w-4 h-0.5 rounded mb-1"></div>
                                <div className="bg-gray-300 w-3 h-0.5 mb-0.5"></div>
                                <div className="bg-gray-300 w-4 h-0.5 mb-1"></div>
                                <div className="flex space-x-0.5">
                                  <div className="bg-gray-200 w-2 h-1 rounded"></div>
                                  <div className="bg-gray-200 w-2 h-1 rounded"></div>
                                </div>
                              </div>
                            </div>
                          </div>
                          
                          {/* Mini Mobile */}
                          <div className="bg-gray-800 rounded-lg p-0.5 w-4 h-8">
                            <div className="bg-white rounded w-full h-full">
                              <div className="bg-gray-800 w-2 h-1 rounded-b mx-auto"></div>
                              <div className="p-0.5 space-y-0.5">
                                <div className="bg-blue-600 w-full h-0.5 rounded"></div>
                                <div className="bg-gray-300 w-2.5 h-0.5"></div>
                                <div className="bg-gray-300 w-2 h-0.5"></div>
                                <div className="bg-blue-600 w-2 h-0.5 rounded"></div>
                                <div className="bg-gray-200 w-full h-1 rounded"></div>
                                <div className="bg-gray-200 w-full h-1 rounded"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
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
                {/* Mobile Screen */}
                <div className="bg-white rounded-2xl overflow-hidden aspect-[9/19.5]">
                  {/* Actual Mobile Website Preview */}
                  <div className="w-full h-full bg-white">
                    {/* Status Bar */}
                    <div className="bg-black text-white text-xs h-6 flex items-center justify-between px-2">
                      <span>9:41</span>
                      <div className="w-4 h-2 bg-black rounded-sm">
                        <div className="w-2 h-1 bg-gray-300 rounded"></div>
                      </div>
                      <span>100%</span>
                    </div>
                    
                    {/* Notch */}
                    <div className="bg-black w-8 h-4 rounded-b-2xl mx-auto"></div>
                    
                    {/* Mobile Header */}
                    <div className="bg-white border-b border-gray-200 h-12 flex items-center px-3">
                      <div className="text-blue-600 font-bold text-sm">WebRevamp Studio</div>
                      <div className="ml-auto">
                        <div className="w-6 h-6 flex flex-col justify-center space-y-1">
                          <div className="w-4 h-0.5 bg-gray-600"></div>
                          <div className="w-4 h-0.5 bg-gray-600"></div>
                          <div className="w-4 h-0.5 bg-gray-600"></div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Mobile Hero Content */}
                    <div className="p-3 bg-white h-full">
                      {/* Stacked Mobile Layout */}
                      <div className="bg-gray-50 rounded p-3 mb-3">
                        <h1 className="text-lg font-bold text-gray-900 mb-2 leading-tight">
                          We build modern, <span className="text-blue-600">responsive websites</span>
                        </h1>
                        <p className="text-sm text-gray-600 mb-3 leading-relaxed">
                          From outdated to outstanding — your website will shine on any device.
                        </p>
                        <div className="space-y-2">
                          <div className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium text-center">
                            Get a Free Audit
                          </div>
                          <div className="border-2 border-blue-600 text-blue-600 px-4 py-2 rounded-lg text-sm font-medium text-center">
                            View Work
                          </div>
                        </div>
                      </div>
                      
                      {/* Device Preview Section */}
                      <div className="bg-gray-50 rounded p-3">
                        <h3 className="text-sm font-semibold mb-2 text-center">See the difference</h3>
                        <div className="flex justify-center space-x-3">
                          {/* Tiny Laptop Preview */}
                          <div className="bg-gray-800 rounded p-1">
                            <div className="bg-white rounded w-12 h-8">
                              <div className="bg-gray-100 h-1.5 rounded-t"></div>
                              <div className="p-1">
                                <div className="bg-blue-600 w-4 h-1 rounded mb-1"></div>
                                <div className="bg-gray-300 w-3 h-0.5 mb-0.5"></div>
                                <div className="bg-gray-300 w-4 h-0.5"></div>
                              </div>
                            </div>
                          </div>
                          
                          {/* Tiny Mobile Preview */}
                          <div className="bg-gray-800 rounded-lg p-1 w-5 h-10">
                            <div className="bg-white rounded w-full h-full">
                              <div className="bg-gray-800 w-2 h-1 rounded-b mx-auto mb-1"></div>
                              <div className="px-1 space-y-1">
                                <div className="bg-blue-600 w-full h-0.5 rounded"></div>
                                <div className="bg-gray-300 w-3 h-0.5"></div>
                                <div className="bg-blue-600 w-2 h-1 rounded"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
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