import React, { useEffect } from 'react';
import { motion, useMotionValue, useSpring, useMotionTemplate } from 'framer-motion';

export const MouseSpotlight = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 30, stiffness: 100 };
  const lightX = useSpring(mouseX, springConfig);
  const lightY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  const background = useMotionTemplate`radial-gradient(800px circle at ${lightX}px ${lightY}px, rgba(99, 102, 241, 0.1), transparent 80%)`;

  return (
    <motion.div
      className="fixed inset-0 z-0 pointer-events-none overflow-hidden"
      style={{ background }}
    >
      <motion.div
        style={{
          left: lightX,
          top: lightY,
        }}
        className="absolute w-[600px] h-[600px] -translate-x-1/2 -translate-y-1/2 bg-indigo-500/10 rounded-full blur-[140px]"
      />
      <motion.div
        style={{
          left: lightX,
          top: lightY,
        }}
        className="absolute w-[400px] h-[400px] -translate-x-1/2 -translate-y-1/2 bg-purple-500/5 rounded-full blur-[100px]"
      />
    </motion.div>
  );
};
