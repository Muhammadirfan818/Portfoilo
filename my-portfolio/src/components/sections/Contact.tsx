import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="py-32">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20">
          <div>
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-indigo-400 font-bold tracking-[0.2em] uppercase text-xs mb-4 block"
            >
              Contact
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold text-white mb-8"
            >
              Let's Create <br />
              <span className="text-gray-500">Something Great</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-gray-400 text-lg mb-12"
            >
              Ready to start your next project? Get in touch and let's talk
              about how I can help you achieve your goals.
            </motion.p>

            <div className="space-y-8">
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-indigo-400">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">
                    Email
                  </p>
                  <p className="text-white font-semibold">
                    irfanshafiq818@gmail.com
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-indigo-400">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">
                    Phone
                  </p>
                  <p className="text-white font-semibold">+92 3089193058</p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-indigo-400">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">
                    Location
                  </p>
                  <p className="text-white font-semibold">
                    Faisalabad, Pakistan
                  </p>
                </div>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="p-10 bg-white/5 border border-white/10 rounded-[40px] backdrop-blur-xl"
          >
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-400">
                    Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl text-white focus:border-indigo-500 transition-colors outline-none"
                    placeholder="Muhammad irfan"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-400">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl text-white focus:border-indigo-500 transition-colors outline-none"
                    placeholder="irfan@example.com"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-400">
                  Message
                </label>
                <textarea
                  rows={6}
                  className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl text-white focus:border-indigo-500 transition-colors outline-none resize-none"
                  placeholder="Your message..."
                />
              </div>
              <button className="w-full py-5 bg-white text-black font-bold rounded-2xl hover:bg-indigo-50 transition-colors flex items-center justify-center gap-3 cursor-pointer">
                Send Message <Send size={18} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export const Footer = () => {
  return (
    <footer className="py-20 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          <div>
            <div className="text-3xl font-bold text-white tracking-tighter mb-4">
              IRFAN<span className="text-indigo-500">.</span>
            </div>
            <p className="text-gray-500 max-w-sm">
              Designing and developing premium digital experiences for the
              modern web.
            </p>
          </div>

          <div className="flex items-center gap-8">
            <a
              href="https://www.facebook.com/irfan.shafiq.3990"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors cursor-pointer font-medium tracking-wide"
            >
              Facebook
            </a>
            <a
              href="https://github.com/Muhammadirfan818"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors cursor-pointer font-medium tracking-wide"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/muhammad-irfan-37728939a/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors cursor-pointer font-medium tracking-wide"
            >
              LinkedIn
            </a>
          </div>
        </div>

        <div className="mt-20 pt-10 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-sm text-gray-600">
            © {new Date().getFullYear()} Muhammad Irfan. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
