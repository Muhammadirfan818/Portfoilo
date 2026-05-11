import React from 'react';
import { motion } from 'framer-motion';
import { usePortfolioData } from '../../hooks/usePortfolioData';
import { Cpu, Globe, Database, Terminal, Layers, Code2, Sparkles } from 'lucide-react';

const iconMap: Record<string, any> = {
  'Frontend': Globe,
  'Backend': Terminal,
  'AI & LLM': Cpu,
  'Databases & Infrastructure': Database,
  'Languages': Code2,
  'Tools': Layers,
};

const categoryGradients: Record<string, string> = {
  'Frontend': 'from-blue-500/20 via-cyan-500/10 to-transparent',
  'Backend': 'from-emerald-500/20 via-teal-500/10 to-transparent',
  'AI & LLM': 'from-purple-500/20 via-pink-500/10 to-transparent',
  'Databases & Infrastructure': 'from-orange-500/20 via-amber-500/10 to-transparent',
  'Languages': 'from-indigo-500/20 via-blue-500/10 to-transparent',
  'Tools': 'from-rose-500/20 via-red-500/10 to-transparent',
};

export const Skills = () => {
  const { data, loading } = usePortfolioData();

  if (loading || !data) return null;

  const skillCategories = [
    { title: 'Frontend', skills: data.skills.frontend },
    { title: 'Backend', skills: data.skills.backend },
    { title: 'AI & LLM', skills: data.skills.ai_llm },
    { title: 'Databases & Infrastructure', skills: data.skills.databases },
    { title: 'Languages', skills: data.skills.languages },
    { title: 'Tools', skills: data.skills.tools },
  ];

  return (
    <section id="skills" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-32 gap-10">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-indigo-400 text-[10px] font-bold uppercase tracking-[0.3em] mb-6"
            >
              <Sparkles size={12} /> Technical Mastery
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-6xl md:text-8xl font-black text-white tracking-tighter leading-tight"
            >
              TECH <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-200 via-gray-400 to-gray-600">
                ARSENAL
              </span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-gray-500 max-w-sm text-lg font-medium leading-relaxed"
          >
            A high-performance stack curated for building autonomous AI agents and production-scale digital ecosystems.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => {
            const Icon = iconMap[category.title];
            const gradient = categoryGradients[category.title];
            
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.8 }}
                className="group relative min-h-[550px] p-10 bg-white/[0.02] border border-white/5 rounded-[48px] overflow-hidden hover:border-white/20 transition-all duration-700 flex flex-col"
              >
                {/* Background Mesh Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-1000`} />
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 blur-[100px] rounded-full translate-x-1/2 -translate-y-1/2 group-hover:bg-indigo-500/10 transition-colors duration-1000" />
                
                <div className="relative z-10 h-full flex flex-col">
                  <div className="w-20 h-20 bg-white/5 rounded-[32px] flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-6 transition-all duration-700 border border-white/10 group-hover:border-white/30 shadow-2xl">
                    {Icon && <Icon size={32} className="text-white" />}
                  </div>
                  
                  <h3 className="text-3xl font-bold text-white mb-6 tracking-tight group-hover:translate-x-2 transition-transform duration-500">
                    {category.title}
                  </h3>
                  
                  <div className="flex flex-wrap gap-3">
                    {category.skills.map((skill, sIdx) => (
                      <motion.span
                        key={skill}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + (sIdx * 0.05) }}
                        className="px-4 py-2 bg-white/[0.03] border border-white/5 rounded-2xl text-[12px] font-bold text-gray-500 group-hover:text-white group-hover:bg-white/10 group-hover:border-white/20 transition-all duration-300 hover:scale-110 cursor-pointer"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
                
                {/* Bottom Accent */}
                <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-transparent via-white/10 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
