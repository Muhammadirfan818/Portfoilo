import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform, useScroll } from 'framer-motion';
import { Github, ArrowUpRight } from 'lucide-react';
import { Project } from '../../types';

interface PremiumCardProps {
  project: Project;
  index: number;
}

export const PremiumCard: React.FC<PremiumCardProps> = ({ project, index }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Mouse tilt
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [10, -10]));
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-10, 10]));

  // Scroll parallax for image
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"]
  });
  const imageY = useTransform(scrollYProgress, [0, 1], [-20, 20]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => { x.set(0); y.set(0); setIsHovered(false); }}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className="group relative h-[500px] w-full"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 via-purple-500/10 to-pink-500/20 rounded-[40px] blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      
      <div className="relative h-full w-full bg-[#030712]/80 backdrop-blur-2xl border border-white/5 rounded-[40px] overflow-hidden group-hover:border-white/20 transition-all duration-700 flex flex-col">
        <div className="relative h-64 w-full overflow-hidden">
          <motion.div style={{ y: imageY }} className="absolute inset-0 h-[120%] -top-[10%]">
            <motion.img
              src={project.image}
              alt={project.title}
              animate={{ scale: isHovered ? 1.1 : 1.05 }}
              transition={{ duration: 0.7 }}
              className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700"
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-transparent opacity-60" />
        </div>

        <div className="flex-1 p-8 flex flex-col justify-between">
          <div>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.slice(0, 3).map((tag) => (
                <span key={tag} className="text-[10px] font-bold uppercase tracking-widest text-indigo-400">
                  #{tag}
                </span>
              ))}
            </div>
            
            <h3 className="text-2xl font-bold text-white mb-2 tracking-tight group-hover:text-indigo-400 transition-colors duration-500">
              {project.title}
            </h3>
            
            <p className="text-gray-400 text-sm leading-relaxed line-clamp-2">
              {project.description}
            </p>
          </div>

          <div className="flex items-center justify-between mt-6 pt-6 border-t border-white/5">
            <span className="text-xs font-medium text-gray-500 uppercase tracking-widest">
              {project.category}
            </span>
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-bold text-white group-hover:text-indigo-400 transition-all duration-300"
            >
              Launch Project <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
