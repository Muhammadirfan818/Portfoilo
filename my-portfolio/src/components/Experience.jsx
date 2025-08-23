"use client";
import React, { useEffect, useRef } from "react";
import { Calendar, MapPin, Award } from "lucide-react";

const experiences = [
  {
    role: "Frontend Developer",
    period: "2024 - Present",
    location: "Faisalabad, Pakistan",
    achievements: [
      "Developed and maintained user-facing features for the Hostinger website.",
      "Collaborated closely with UI/UX designers to ensure seamless user experiences.",
      "Optimized web applications for maximum speed and scalability.",
    ],
  },
  {
    role: " Full Stack Developer",
    period: "2024 - Present",
    location: "Faisalabad, Pakistan",
    achievements: [
      "Led the development of Docker's web applications, focusing on scalability.",
      "Worked to integrate APIs seamlessly with the frontend.",
      "Contributed to open-source projects that were used with the Docker ecosystem.",
    ],
  },
  {
    role: "React Native Developer",
    period: "2024 - Present",
    location: "Faisalabad, Pakistan",
    achievements: [
    "Built and deployed cross-platform mobile applications using React Native.",
      "Improved performance and user experience through code optimization and rigorous testing.",
      "Collaborated with product teams to deliver new features based on user feedback.",
    ],
  },
];

const Experience = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in-view');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const animatedElements = sectionRef.current?.querySelectorAll('.animate-fade-in-up, .animate-fade-in-left, .animate-fade-in-right');
    animatedElements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="py-20 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-6">
            Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto rounded-full mb-8"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A collection of my work experience and the roles I have taken in
            various organizations
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-0.5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-600 via-purple-600 to-pink-600"></div>

          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex items-center animate-fade-in-up ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Timeline Dot with Pulse */}
                <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 w-6 h-6 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full border-4 border-white shadow-lg z-10 animate-pulse"></div>

                {/* Card */}
                <div
                  className={`ml-12 md:ml-0 md:w-1/2 ${
                    index % 2 === 0 ? "md:pr-12" : "md:pl-12"
                  }`}
                >
                  <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 p-6 border border-gray-100 transform hover:scale-105">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-gray-800 mb-1">
                          {exp.role}
                        </h3>
                        <h4 className="text-indigo-600 font-semibold mb-2">
                          {exp.company}
                        </h4>
                      </div>
                      <Award
                        className="text-yellow-500 opacity-70"
                        size={22}
                      />
                    </div>

                    <div className="flex flex-wrap items-center gap-4 mb-4 text-sm text-gray-500">
                      <div className="flex items-center space-x-1">
                        <Calendar size={16} />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MapPin size={16} />
                        <span>{exp.location}</span>
                      </div>
                    </div>

                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {exp.description}
                    </p>

                    <div>
                      <h5 className="font-semibold text-gray-800 mb-2">
                        Key Achievements:
                      </h5>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, i) => (
                          <li
                            key={i}
                            className="flex items-center space-x-2 text-gray-600 animate-fade-in-up"
                            style={{ animationDelay: `${(index * 0.2) + (i * 0.1)}s` }}
                          >
                            <div className="w-1.5 h-1.5 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full"></div>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
