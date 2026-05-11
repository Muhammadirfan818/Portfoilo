import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Code, Users, Star, GraduationCap } from 'lucide-react';
import { usePortfolioData } from '../../hooks/usePortfolioData';
import { InteractiveImage } from '../ui/InteractiveImage';

const iconMap: Record<string, any> = {
  Clock,
  Code,
  Users,
  Star,
};

export const About = () => {
  const { data, loading } = usePortfolioData();

  if (loading || !data) return null;

  return (
    <section id="about" className="py-32 border-y border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <InteractiveImage
              src="/irfan .jpg"
              alt="Muhammad Irfan"
              className="aspect-square w-full"
            />
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-indigo-500/20 blur-[100px] rounded-full -z-10" />
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-purple-500/20 blur-[100px] rounded-full -z-10" />
          </div>

          <div>
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-indigo-400 font-bold tracking-[0.2em] uppercase text-xs mb-4 block"
            >
              The Story
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold text-white mb-8"
            >
              Building AI-Powered <br />
              <span className="text-gray-500">Scalable Platforms</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-gray-400 text-lg leading-relaxed mb-8"
            >
              {data.summary}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="mb-12 p-6 bg-white/5 border border-white/5 rounded-2xl"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-2 bg-indigo-500/10 rounded-lg text-indigo-400">
                  <GraduationCap size={20} />
                </div>
                <div>
                  <h4 className="text-white font-bold">{data.education[0].institution}</h4>
                  <p className="text-sm text-gray-500">{data.education[0].degree} • GPA: {data.education[0].gpa}</p>
                </div>
              </div>
              <ul className="space-y-2">
                {data.education[0].details.map((detail, i) => (
                  <li key={i} className="text-sm text-gray-400 flex items-start gap-2">
                    <span className="mt-1.5 w-1 h-1 rounded-full bg-gray-600" />
                    {detail}
                  </li>
                ))}
              </ul>
            </motion.div>

            <div className="grid grid-cols-2 gap-6">
              {data.stats.map((stat, index) => {
                const Icon = iconMap[stat.icon];
                return (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className="p-6 bg-white/5 border border-white/5 rounded-2xl"
                  >
                    <div className="flex items-center gap-4 mb-2">
                      <div className="p-2 bg-indigo-500/10 rounded-lg text-indigo-400">
                        {Icon && <Icon size={20} />}
                      </div>
                      <span className="text-2xl font-bold text-white">
                        {stat.value}{stat.suffix}
                      </span>
                    </div>
                    <p className="text-xs text-gray-500 uppercase tracking-wider">
                      {stat.label}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
