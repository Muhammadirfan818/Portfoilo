import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { usePortfolioData } from '../../hooks/usePortfolioData';
import { Briefcase } from 'lucide-react';

export const Experience = () => {
  const { data, loading } = usePortfolioData();
  const containerRef = React.useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  if (loading || !data) return null;

  return (
    <section id="experience" className="py-32 relative" ref={containerRef}>
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-32">
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-indigo-400 font-bold tracking-[0.4em] uppercase text-[10px] mb-6 px-4 py-1.5 bg-indigo-500/5 rounded-full border border-indigo-500/10"
          >
            Chronicle
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-8xl font-bold text-white tracking-tighter"
          >
            Professional <span className="text-gray-500">Timeline</span>
          </motion.h2>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Vertical Progress Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-[1px] bg-white/5 -translate-x-1/2" />
          <motion.div 
            style={{ scaleY }}
            className="absolute left-0 md:left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-indigo-500 via-purple-500 to-transparent -translate-x-1/2 origin-top"
          />

          <div className="space-y-32">
            {data.experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1, delay: index * 0.2 }}
                className={`relative flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center`}
              >
                {/* Connector Dot */}
                <div className="absolute left-0 md:left-1/2 top-0 md:top-8 w-4 h-4 bg-[#020617] border-2 border-indigo-500 rounded-full -translate-x-1/2 z-10 hidden md:block">
                  <div className="absolute inset-0 bg-indigo-400 rounded-full animate-ping opacity-20" />
                </div>

                <div className="w-full md:w-1/2 px-8 md:px-12">
                  <div className={`flex flex-col ${index % 2 === 0 ? 'md:items-end md:text-right' : 'md:items-start md:text-left'} mb-4`}>
                    <span className="text-indigo-400 font-mono text-sm tracking-widest mb-2">
                      {exp.period}
                    </span>
                    <h3 className="text-3xl font-bold text-white mb-2 leading-tight">
                      {exp.role}
                    </h3>
                    <p className="text-gray-500 font-bold uppercase tracking-widest text-xs">
                      {exp.company} • {exp.location}
                    </p>
                  </div>
                </div>

                <div className="w-full md:w-1/2 px-8 md:px-12">
                  <div className="p-10 bg-white/[0.02] border border-white/5 rounded-[40px] hover:bg-white/[0.04] hover:border-indigo-500/20 transition-all duration-700 group">
                    <ul className="space-y-4">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-4 text-gray-400 group-hover:text-gray-200 transition-colors duration-500 leading-relaxed">
                          <div className="mt-2.5 w-1.5 h-1.5 rounded-full bg-indigo-500 shrink-0 shadow-[0_0_10px_rgba(99,102,241,0.5)]" />
                          <span className="text-sm font-medium">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
