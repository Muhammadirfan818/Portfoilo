import React, { useState, useEffect } from "react";

const Hero = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const texts = ["Web Developer", "App Developer", "Software Engineer"];
  const currentText = texts[currentTextIndex];

  useEffect(() => {
    const typingSpeed = isDeleting ? 50 : 100;
    const deletingSpeed = 50;
    const pauseTime = 2000;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (currentCharIndex < currentText.length) {
          setCurrentCharIndex((prev) => prev + 1);
        } else {
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      } else {
        if (currentCharIndex > 0) {
          setCurrentCharIndex((prev) => prev - 1);
        } else {
          setIsDeleting(false);
          setCurrentTextIndex((prev) => (prev + 1) % texts.length);
        }
      }
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timer);
  }, [currentCharIndex, isDeleting, currentText]);

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col lg:flex-row items-center justify-center gap-12 px-6 pt-24 md:pt-28 lg:pt-32 relative overflow-hidden"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800" />



      {/* Text Content */}
      <div className="relative z-10 max-w-xl text-center lg:text-left">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
          Hi, I'm <br /> Muhammad Irfan
        </h1>
        <p className="text-xl sm:text-2xl md:text-3xl text-blue-200 mb-4">
          I am a{" "}
          <span className="text-white">
            {currentText.substring(0, currentCharIndex)}
            <span className="animate-pulse">|</span>
          </span>
        </p>
        <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-6">
          I am a full-stack developer building scalable web applications.
          Skilled in both front-end and back-end development, I specialize in
          the MERN stack and other modern technologies to create seamless user
          experiences and efficient solutions.
        </p>
        <button
          onClick={() =>
            document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" })
          }
          className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-full hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 shadow-lg"
        >
          Discover My Work
        </button>
      </div>

      {/* Profile Image */}
      <div className="relative z-10 w-56 h-56 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl">
        <img
          src="/irfan .jpg"
          alt="Muhammad Irfan"
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
};

export default Hero;
