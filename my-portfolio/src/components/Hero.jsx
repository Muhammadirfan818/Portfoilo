import React, { useState, useEffect } from 'react';

const Hero = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const texts = ['Web Developer', 'App Developer', 'Software Engineer'];
  const currentText = texts[currentTextIndex];
  
  useEffect(() => {
    const typingSpeed = isDeleting ? 50 : 100;
    const deletingSpeed = 50;
    const pauseTime = 2000;
    
    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (currentCharIndex < currentText.length) {
          setCurrentCharIndex(currentCharIndex + 1);
        } else {
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      } else {
        if (currentCharIndex > 0) {
          setCurrentCharIndex(currentCharIndex - 1);
        } else {
          setIsDeleting(false);
          setCurrentTextIndex((currentTextIndex + 1) % texts.length);
        }
      }
    }, isDeleting ? deletingSpeed : typingSpeed);
    
    return () => clearTimeout(timer);
  }, [currentCharIndex, isDeleting, currentTextIndex, currentText, texts.length]);
  
  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%239C92AC%22 fill-opacity=%220.1%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%224%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="grid lg:grid-cols-2 gap-1 items-center">
          {/* Text Content - Left Side */}
          <div className="text-left animate-fade-in-left lg:ml-32">
            <h5 className="text-3xl md:text-5xl font-bold text-white mb-6 animate-text-shimmer">
              <span className="bg-gradient-to-r from-white via-blue-200 to-white bg-clip-text text-transparent bg-300% animate-shimmer">
                Hi, I'm <br /> Muhammad Irfan
              </span>
            </h5>
            
            <p className="text-2xl md:text-3xl text-blue-200 mb-4 animate-fade-in-up-delay-1">
              I am a{' '}
              <span className="text-white">
                {currentText.substring(0, currentCharIndex)}
                <span className="animate-pulse">|</span>
              </span>
            </p>
            
            <p className="text-gray-300 max-w-xl mb-8 text-base leading-relaxed animate-fade-in-up-delay-2">
            I am a full-stack developer building scalable web applications. Skilled in both front-end and
            back-end development, I specialize in the MERN stack and other modern technologies to create seamless user experiences and
            efficient solutions.
            </p>

            {/* CTA Button */}
            <button
              onClick={scrollToAbout}
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-full hover:from-indigo-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg animate-fade-in-up-delay-4"
            >
              Discover My Work
            </button>
          </div>

          {/* Profile Image - Right Side */}
          <div className="flex justify-center lg:justify-center animate-fade-in-right">
            <div className="relative group">
              <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl transform transition-all duration-500 group-hover:scale-105 group-hover:rotate-3">
                <img
                   src="/irfan .jpg" 
                  alt="Muhammad Irfan - Professional Portrait"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-xl"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-20 animate-float"></div>
      <div className="absolute top-40 right-20 w-16 h-16 bg-gradient-to-r from-pink-400 to-red-400 rounded-full opacity-20 animate-float-delay"></div>
      <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-gradient-to-r from-green-400 to-blue-400 rounded-full opacity-20 animate-float-delay-2"></div>
    </section>
  );
};

export default Hero;