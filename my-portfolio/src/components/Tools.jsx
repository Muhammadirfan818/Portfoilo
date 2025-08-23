import React from 'react';
import { Code, Server, Globe } from 'lucide-react';

const Tools = () => {
  const toolCategories = [
    {
      icon: Code,
      title: 'Frontend',
      tools: ['HTML5', 'CSS', 'JavaScript', 'React.js', 'Next.js', 'Tailwind CSS'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Server,
      title: 'Backend',
      tools: ['Node.js', 'Express.js', 'MongoDB','Next.js', 'Firebase', ],
      color: 'from-green-500 to-teal-500'
    },
    {
      icon: Globe,
      title: 'Tools',
      tools: ['Git', 'GitHub', 'VS Code', 'Figma', 'Postman', 'Compass'],
      color: 'from-orange-500 to-red-500'
    }
  ];

  const skills = [
    { skill: 'Frontend Development', level: 90, color: 'from-blue-500 to-cyan-500' },
    { skill: 'Backend Development', level: 80, color: 'from-green-500 to-teal-500' },
    { skill: 'Tools & DevOps', level: 85, color: 'from-orange-500 to-red-500' }
  ];

  return (
    <section id="tools" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 animate-fade-in-up">
            Tools & Technologies
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto rounded-full mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in-up-delay-1">
            A collection of my technical skills and expertise honed through various projects and experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {toolCategories.map((category, index) => (
            <div
              key={category.title}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden animate-fade-in-up border border-gray-100 hover:border-transparent"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`h-2 bg-gradient-to-r ${category.color}`}></div>
              <div className="p-6">
                <div className={`w-16 h-16 mx-auto mb-6 bg-gradient-to-r ${category.color} rounded-2xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                  <category.icon className="text-white" size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">
                  {category.title}
                </h3>
                <ul className="space-y-2">
                  {category.tools.map((tool, toolIndex) => (
                    <li
                      key={tool}
                      className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50 transition-colors duration-300 animate-fade-in-up"
                      style={{ animationDelay: `${(index * 0.1) + (toolIndex * 0.05)}s` }}
                    >
                      <div className={`w-2 h-2 bg-gradient-to-r ${category.color} rounded-full`}></div>
                      <span className="text-gray-700">{tool}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Skills Progress - New Style */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-gray-800 mb-12 text-center animate-fade-in-up">
            Skills & Proficiency
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {skills.map((item, index) => (
              <div
                key={item.skill}
                className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 p-8 text-center animate-fade-in-up border border-gray-100 hover:border-transparent"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Circular Progress */}
                <div className="relative w-32 h-32 mx-auto mb-6">
                  <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 120 120">
                    {/* Background circle */}
                    <circle
                      cx="60"
                      cy="60"
                      r="50"
                      stroke="currentColor"
                      strokeWidth="8"
                      fill="transparent"
                      className="text-gray-200"
                    />
                    {/* Progress circle */}
                    <circle
                      cx="60"
                      cy="60"
                      r="50"
                      stroke="currentColor"
                      strokeWidth="8"
                      fill="transparent"
                      strokeLinecap="round"
                      className={`bg-gradient-to-r ${item.color} bg-clip-text`}
                      style={{
                        strokeDasharray: `${2 * Math.PI * 50}`,
                        strokeDashoffset: `${2 * Math.PI * 50 * (1 - item.level / 100)}`,
                        transition: 'stroke-dashoffset 1s ease-in-out'
                      }}
                    />
                  </svg>
                  {/* Percentage in center */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-2xl font-bold text-gray-800">{item.level}%</span>
                  </div>
                </div>
                
                {/* Skill name */}
                <h4 className="text-xl font-semibold text-gray-800 mb-3 group-hover:text-indigo-600 transition-colors duration-300">
                  {item.skill}
                </h4>
                
                {/* Skill level indicator */}
                <div className="flex justify-center space-x-1">
                  {[...Array(10)].map((_, i) => (
                    <div
                      key={i}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        i < Math.floor(item.level / 10) 
                          ? `bg-gradient-to-r ${item.color}` 
                          : 'bg-gray-200'
                      }`}
                    />
                  ))}
                </div>
                
                {/* Description */}
                <p className="text-gray-600 mt-4 text-sm">
                  {item.level >= 90 ? 'Expert Level' : 
                   item.level >= 80 ? 'Advanced Level' : 
                   item.level >= 70 ? 'Intermediate Level' : 'Beginner Level'}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tools;