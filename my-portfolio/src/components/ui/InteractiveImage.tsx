import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion';

interface InteractiveImageProps {
  src: string;
  alt: string;
  className?: string;
}

export const InteractiveImage: React.FC<InteractiveImageProps> = ({ src, alt, className }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Parallax on scroll
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.1, 1, 1.1]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  // Mouse tilt
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [15, -15]));
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-15, 15]));

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <div 
      ref={containerRef}
      className={`relative perspective-1000 ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        style={{
          rotateX,
          rotateY,
          y,
          scale,
          opacity,
          transformStyle: "preserve-3d"
        }}
        className="relative w-full h-full rounded-[40px] overflow-hidden bg-white/5 border border-white/10 shadow-2xl"
      >
        <motion.div 
          initial={{ scale: 1.5, filter: 'blur(20px)' }}
          whileInView={{ scale: 1, filter: 'blur(0px)' }}
          transition={{ duration: 1.5, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="w-full h-full"
        >
          <img
            src={src}
            alt={alt}
            className="w-full h-full object-cover transition-all duration-700 hover:grayscale-0 grayscale-[0.3]"
          />
        </motion.div>
        
        {/* Shine effect */}
        <motion.div
          style={{
            left: useTransform(mouseX, [-0.5, 0.5], ["-100%", "100%"]),
            top: useTransform(mouseY, [-0.5, 0.5], ["-100%", "100%"]),
          }}
          className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent pointer-events-none"
        />
      </motion.div>
      
      {/* Background shadow/glow */}
      <div className="absolute -inset-4 bg-indigo-500/10 blur-3xl -z-10 rounded-full opacity-50" />
    </div>
  );
};
