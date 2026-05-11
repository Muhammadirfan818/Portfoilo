import React from 'react';
import { motion } from 'framer-motion';
import { HeroCanvas } from '../canvas/HeroCanvas';
import { BackgroundBlobs } from '../ui/BackgroundBlobs';
import { ArrowRight, Sparkles } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden pt-32 pb-20">
      <BackgroundBlobs />
      <HeroCanvas />
      
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#020617]/20 to-[#020617] z-[1]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="inline-flex items-center gap-3 px-6 py-2.5 mb-12 text-xs font-bold tracking-[0.25em] text-indigo-400 uppercase bg-white/5 border border-white/10 rounded-full backdrop-blur-2xl shadow-2xl"
          >
            <Sparkles size={14} className="text-indigo-500 animate-pulse" />
            Full Stack Agentic AI Engineer
          </motion.div>

          <div className="overflow-hidden mb-10">
            <motion.h1
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1.2, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="text-6xl md:text-8xl lg:text-[10rem] font-black text-white leading-[0.85] tracking-tighter"
            >
              CRAFTING <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
                FUTURE AI
              </span>
            </motion.h1>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-lg md:text-2xl text-gray-400 max-w-3xl mx-auto mb-16 leading-relaxed font-medium"
          >
            Hi, I'm <span className="text-white">Muhammad Irfan</span>. 
            I build autonomous AI agents and high-performance ecosystems that define the next generation of digital excellence.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full sm:w-auto"
          >
            <button className="group relative w-full sm:w-80 px-10 py-6 bg-white text-black font-bold rounded-full transition-all duration-500 hover:scale-105 active:scale-95 cursor-pointer overflow-hidden shadow-2xl shadow-white/10">
              <span className="relative z-10 flex items-center justify-center gap-2 text-lg">
                Launch My Vision <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-indigo-50 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
            </button>
            <button className="w-full sm:w-80 px-10 py-6 bg-white/5 text-white font-bold rounded-full hover:bg-white/10 transition-all duration-500 border border-white/10 cursor-pointer backdrop-blur-3xl hover:scale-105 active:scale-95 text-lg">
              Contact Engineer
            </button>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 1.2 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 hidden md:block"
      >
        <div className="flex flex-col items-center gap-4">
          <div className="relative w-7 h-12 border-2 border-white/10 rounded-full">
            <motion.div
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-2 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-white rounded-full"
            />
          </div>
          <span className="text-[10px] uppercase tracking-[0.4em] text-gray-500 font-bold">Initiate Scroll</span>
        </div>
      </motion.div>
    </section>
  );
};
