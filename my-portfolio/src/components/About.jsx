import React, { useState, useEffect, useRef } from 'react';
import { Heart, Coffee, Palette, Code, X, Clock, Users, Star, CheckCircle } from 'lucide-react';

const About = () => {
  const [showResumeModal, setShowResumeModal] = useState(false);
  const [countedValues, setCountedValues] = useState({
    experience: 0,
    projects: 0,
    clients: 0,
    satisfaction: 0
  });
  const statsRef = useRef(null);

  const stats = [
    { icon: Clock, label: 'Year of Experience', value: 1, suffix: '+' },
    { icon: Code, label: 'Projects Completed', value: 10, suffix: '+' },
    { icon: Users, label: 'Happy Clients', value: 25, suffix: '+' },
    { icon: Star, label: 'Clients Satisfaction Rate', value: 99, suffix: '%' },
  ];

  // Counting animation effect
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Start counting animation
            stats.forEach((stat, index) => {
              const targetValue = stat.value;
              const duration = 2000; // 2 seconds
              const increment = targetValue / (duration / 16); // 60fps
              let currentValue = 0;

              const timer = setInterval(() => {
                currentValue += increment;
                if (currentValue >= targetValue) {
                  currentValue = targetValue;
                  clearInterval(timer);
                }

                setCountedValues(prev => ({
                  ...prev,
                  [Object.keys(prev)[index]]: Math.floor(currentValue)
                }));
              }, 16);
            });

            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleResumeClick = () => {
    setShowResumeModal(true);
  };

  const closeResumeModal = () => {
    setShowResumeModal(false);
  };

  return (
    <>
     <section 
  id="about" 
  className="py-20 bg-White-50"
>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 animate-fade-in-up">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto rounded-full mb-8"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image Side */}
            <div className="relative group animate-fade-in-left">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="About me"
                  className="w-full h-96 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
              <div className="absolute -top-6 -left-6 w-16 h-16 bg-gradient-to-r from-pink-500 to-red-500 rounded-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
            </div>

            {/* Content Side */}
            <div className="animate-fade-in-right">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                Passionate About Creating Digital Excellence
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                With over 5 years of experience in design and development, I specialize in creating 
                beautiful, functional, and user-centered digital experiences. My passion lies in 
                transforming complex problems into simple, elegant solutions.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                I believe that great design is not just about how something looks, but how it works. 
                Every project I take on is an opportunity to push boundaries and create something 
                truly remarkable.
              </p>

              {/* Skills */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                {['UI/UX Design', 'Frontend Development', 'Brand Identity', 'Motion Graphics'].map((skill, index) => (
                  <div
                    key={skill}
                    className="flex items-center space-x-2 p-3 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 animate-fade-in-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="w-2 h-2 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full"></div>
                    <span className="text-gray-700 font-medium">{skill}</span>
                  </div>
                ))}
              </div>

              <button 
                onClick={handleResumeClick}
                className="px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-full hover:from-indigo-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg"
              >
                Download Resume
              </button>
            </div>
          </div>

          {/* Stats */}
          <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in-up group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-indigo-100 to-purple-100 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="text-indigo-600" size={24} />
                </div>
                <div className="text-3xl font-bold text-gray-800 mb-2">
                  {countedValues[Object.keys(countedValues)[index]] || 0}{stat.suffix}
                </div>
                <div className="text-gray-600 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resume Modal */}
      {showResumeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-75 backdrop-blur-sm">
          <div className="relative max-w-4xl w-full max-h-full overflow-auto bg-white rounded-2xl shadow-2xl">
            {/* Modal Header */}
            <div className="sticky top-0 z-10 flex justify-between items-center p-6 bg-white border-b border-gray-200 rounded-t-2xl">
              <h3 className="text-2xl font-bold text-gray-800">Muhammad Irfan - Resume</h3>
              <button
                onClick={closeResumeModal}
                className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-full transition-colors duration-300"
              >
                <X size={24} />
              </button>
            </div>
            
            {/* Modal Content */}
            <div className="p-6">
              {/* Professional Portrait */}
              <div className="mb-6 text-center">
                <div className="inline-block relative">
                  <img
                    src="/irfan .jpg"
                    alt="Muhammad Irfan - Professional Portrait"
                    className="w-48 h-48 rounded-full object-cover border-4 border-blue-600 shadow-lg"
                  />
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-bold">CV</span>
                  </div>
                </div>
              </div>
              
              {/* Resume Content (Text Version) */}
              <div className="mt-6 p-6 bg-gray-50 rounded-lg">
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Left Column */}
                  <div>
                    <h4 className="text-xl font-bold text-blue-600 mb-4 border-b-2 border-blue-600 pb-2">Personal Details</h4>
                    <div className="space-y-2 text-gray-700">
                      <p><strong>Name:</strong> Muhammad Irfan</p>
                      <p><strong>Email:</strong> irfanshafiq818@gmail.com</p>
                      <p><strong>Phone:</strong> 03089193058</p>
                      <p><strong>Address:</strong> P-182 st # 4 b-block sir syed town Faisalabad 3800 Faisalabad</p>
                    </div>

                    <h4 className="text-xl font-bold text-blue-600 mb-4 border-b-2 border-blue-600 pb-2 mt-6">Skills</h4>
                    <div className="space-y-2 text-gray-700">
                      <p>• Microsoft Office</p>
                      <p>• HTML5, CSS3, JavaScript</p>
                      <p>• React.js, Next.js, Node.js, Bootstrap, Tailwind CSS</p>
                      <p>• Git & GitHub, VS Code</p>
                      <p>• Responsive Web Design</p>
                      <p>• Basic knowledge of MongoDB and Express.js</p>
                    </div>

                    <h4 className="text-xl font-bold text-blue-600 mb-4 border-b-2 border-blue-600 pb-2 mt-6">Languages</h4>
                    <div className="space-y-2 text-gray-700">
                      <p>• English</p>
                      <p>• Urdu</p>
                      <p>• Punjabi</p>
                    </div>
                  </div>

                  {/* Right Column */}
                  <div>
                    <h4 className="text-xl font-bold text-blue-600 mb-4 border-b-2 border-blue-600 pb-2">Education</h4>
                    <div className="space-y-4 text-gray-700">
                      <div>
                        <p><strong>Matric:</strong> M.C high School Allama iqbal road, Faisalabad</p>
                      </div>
                      <div>
                        <p><strong>Intermediate:</strong> M.C high School Allama iqbal road, Faisalabad</p>
                      </div>
                      <div>
                        <p><strong>Software Engineering:</strong> Virtual University, Faisalabad <span className="text-green-600 font-semibold">(Present)</span></p>
                      </div>
                    </div>

                    <h4 className="text-xl font-bold text-blue-600 mb-4 border-b-2 border-blue-600 pb-2 mt-6">Courses</h4>
                    <div className="space-y-4 text-gray-700">
                      <div>
                        <p><strong>Web and Mobile App development:</strong> Saylani Mass IT Training <span className="text-green-600 font-semibold">(Present)</span></p>
                      </div>
                      <div>
                        <p><strong>Basic Computer:</strong> Quaid-e-Azam Computer college</p>
                      </div>
                    </div>

                    <h4 className="text-xl font-bold text-blue-600 mb-4 border-b-2 border-blue-600 pb-2 mt-6">Experience</h4>
                    <p className="text-gray-700">Fresher</p>

                    <h4 className="text-xl font-bold text-blue-600 mb-4 border-b-2 border-blue-600 pb-2 mt-6">Strengths</h4>
                    <div className="space-y-2 text-gray-700">
                      <p>• Quick learner with a strong passion for web technologies</p>
                      <p>• Ability to work independently and in a team</p>
                      <p>• Committed to continuous learning and improvement</p>
                      <p>• Strong problem-solving skills</p>
                    </div>

                    <h4 className="text-xl font-bold text-blue-600 mb-4 border-b-2 border-blue-600 pb-2 mt-6">Availability</h4>
                    <p className="text-gray-700">Immediate | Remote or On-site | Internship or Full-time</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="flex justify-end p-6 bg-gray-50 border-t border-gray-200 rounded-b-2xl">
              <button
                onClick={() => window.open('mailto:irfanshafiq818@gmail.com?subject=Resume Request', '_blank')}
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 mr-3"
              >
                Request PDF
              </button>
              <button
                onClick={closeResumeModal}
                className="px-6 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors duration-300"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default About;