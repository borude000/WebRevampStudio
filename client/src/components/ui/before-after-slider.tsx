import React, { useState, useRef, useCallback } from 'react';
import { ArrowLeftRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeAlt: string;
  afterAlt: string;
  className?: string;
}

export function BeforeAfterSlider({
  beforeImage,
  afterImage,
  beforeAlt,
  afterAlt,
  className = ""
}: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const updateSliderPosition = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  }, []);

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    setIsDragging(true);
    updateSliderPosition(e.clientX);
    e.preventDefault();
  }, [updateSliderPosition]);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (isDragging) {
      updateSliderPosition(e.clientX);
    }
  }, [isDragging, updateSliderPosition]);

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    setIsDragging(true);
    updateSliderPosition(e.touches[0].clientX);
    e.preventDefault();
  }, [updateSliderPosition]);

  const handleTouchMove = useCallback((e: TouchEvent) => {
    if (isDragging) {
      updateSliderPosition(e.touches[0].clientX);
    }
  }, [isDragging, updateSliderPosition]);

  const handleTouchEnd = useCallback(() => {
    setIsDragging(false);
  }, []);

  // Add global event listeners
  React.useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      document.addEventListener('touchmove', handleTouchMove);
      document.addEventListener('touchend', handleTouchEnd);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleTouchEnd);
    };
  }, [isDragging, handleMouseMove, handleMouseUp, handleTouchMove, handleTouchEnd]);

  return (
    <motion.div 
      ref={containerRef}
      className={`before-after-container bg-white rounded-xl overflow-hidden shadow-lg ${className}`}
      style={{ height: '400px' }}
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.02 }}
    >
      {/* Before Image */}
      <motion.img 
        src={beforeImage}
        alt={beforeAlt}
        className="w-full h-full object-cover"
        draggable={false}
        initial={{ filter: "blur(3px)" }}
        animate={{ filter: "blur(0px)" }}
        transition={{ duration: 0.8 }}
      />
      
      {/* After Image */}
      <motion.div 
        className="after-image"
        style={{
          clipPath: `polygon(${sliderPosition}% 0%, 100% 0%, 100% 100%, ${sliderPosition}% 100%)`
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <motion.img 
          src={afterImage}
          alt={afterAlt}
          className="w-full h-full object-cover"
          draggable={false}
          initial={{ filter: "blur(3px)" }}
          animate={{ filter: "blur(0px)" }}
          transition={{ duration: 0.8, delay: 0.3 }}
        />
      </motion.div>
      
      {/* Slider */}
      <motion.div 
        className="before-after-slider"
        style={{ left: `${sliderPosition}%` }}
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        animate={isDragging ? { scale: 1.15 } : { scale: 1 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <motion.div 
          className="slider-button"
          animate={{ 
            boxShadow: [
              "0 0 0 0 rgba(59, 130, 246, 0.7)",
              "0 0 0 10px rgba(59, 130, 246, 0)",
              "0 0 0 0 rgba(59, 130, 246, 0)"
            ]
          }}
          transition={{ 
            duration: 2, 
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut"
          }}
        >
          <motion.div
            animate={{ rotate: isDragging ? 90 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <ArrowLeftRight size={16} />
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
