import React from 'react';
import { motion } from 'framer-motion';
import { PremiumCard } from '../ui/PremiumCard';
import { usePortfolioData } from '../../hooks/usePortfolioData';

export const Projects = () => {
  const { data, loading } = usePortfolioData();

  if (loading || !data) return null;

  return (
    <section id="projects" className="py-32">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-indigo-400 font-bold tracking-[0.2em] uppercase text-xs mb-4 block"
            >
              Portfolio
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold text-white"
            >
              Featured <span className="text-gray-500">Creations</span>
            </motion.h2>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <button className="px-6 py-3 rounded-full border border-white/10 text-white font-semibold hover:bg-white/5 transition-colors cursor-pointer">
              View All Work
            </button>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.projects.map((project, index) => (
            <PremiumCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
