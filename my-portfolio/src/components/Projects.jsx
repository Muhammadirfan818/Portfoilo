import React, { useState } from 'react';
import { ExternalLink, Github, Eye, Filter } from 'lucide-react';

const Projects = () => {
  const [filter, setFilter] = useState('All');

  const projects = [
    {
      title: 'E-Commerce Platform',
      category: 'Web Development',
      image: 'https://images.pexels.com/photos/34577/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600',
      description: 'A full-stack e-commerce platform built with React, Node.js, and MongoDB.',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      githubUrl: 'https://github.com/yourusername/ecommerce-platform',
      liveUrl: 'https://ecommerce-platform-demo.vercel.app'
    },
    {
      title: 'Mobile Banking App',
      category: 'Mobile App',
      image: 'https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'A secure mobile banking application with modern UI/UX design.',
      tags: ['React Native', 'TypeScript', 'Firebase'],
      githubUrl: 'https://github.com/yourusername/mobile-banking-app',
      liveUrl: 'https://mobile-banking-app-demo.vercel.app'
    },
    {
      title: 'Brand Identity Design',
      category: 'Design',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Complete brand identity package for a tech startup.',
      tags: ['Figma', 'Illustrator', 'Branding'],
      githubUrl: 'https://github.com/yourusername/brand-design',
      liveUrl: 'https://brand-design-portfolio.vercel.app'
    },
    {
      title: 'Task Management Dashboard',
      category: 'Web Development',
      image: 'https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'A comprehensive project management dashboard with real-time updates.',
      tags: ['Vue.js', 'Python', 'PostgreSQL'],
      githubUrl: 'https://github.com/yourusername/task-dashboard',
      liveUrl: 'https://task-dashboard-demo.vercel.app'
    },
    {
      title: 'Restaurant Website',
      category: 'Design',
      image: 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Modern restaurant website with online reservation system.',
      tags: ['HTML5', 'CSS3', 'JavaScript'],
      githubUrl: 'https://github.com/yourusername/restaurant-website',
      liveUrl: 'https://restaurant-website-demo.vercel.app'
    },
    {
      title: 'Fitness Tracking App',
      category: 'Mobile App',
      image: 'https://images.pexels.com/photos/4397840/pexels-photo-4397840.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Cross-platform fitness app with workout tracking and social features.',
      tags: ['Flutter', 'Dart', 'Firebase'],
      githubUrl: 'https://github.com/yourusername/fitness-app',
      liveUrl: 'https://fitness-app-demo.vercel.app'
    }
  ];

  const categories = ['All', 'Web Development', 'Mobile App', 'Design'];
  const filteredProjects = filter === 'All' ? projects : projects.filter(project => project.category === filter);

  const handleViewProject = (project) => {
    window.open(project.liveUrl, '_blank');
  };

  const handleGithubClick = (project) => {
    window.open(project.githubUrl, '_blank');
  };

  const handleViewAllProjects = () => {
    window.open('https://github.com/yourusername', '_blank');
  };

  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in-up">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-400 to-purple-400 mx-auto rounded-full mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto animate-fade-in-up-delay-1">
            A showcase of my best work and creative solutions
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 flex items-center space-x-2 ${
                filter === category
                  ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              <Filter size={16} />
              <span>{category}</span>
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.title}
              className="group bg-gray-800 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 animate-fade-in-up border border-gray-700 hover:border-indigo-500"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute bottom-4 left-4 right-4 flex justify-between">
                    <button 
                      onClick={() => handleViewProject(project)}
                      className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors duration-300"
                      title="View Live Demo"
                    >
                      <Eye size={18} />
                    </button>
                    <div className="flex space-x-2">
                      <button 
                        onClick={() => handleGithubClick(project)}
                        className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors duration-300"
                        title="View Source Code"
                      >
                        <Github size={18} />
                      </button>
                      <button 
                        onClick={() => handleViewProject(project)}
                        className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors duration-300"
                        title="Open Live Demo"
                      >
                        <ExternalLink size={18} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="px-3 py-1 text-xs font-semibold bg-indigo-600 text-white rounded-full">
                    {project.category}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-indigo-400 transition-colors duration-300">
                  {project.title}
                </h3>

                <p className="text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs bg-gray-700 text-gray-300 rounded-md hover:bg-gray-600 transition-colors duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-4">
                  <button 
                    onClick={() => handleViewProject(project)}
                    className="flex-1 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg font-medium hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                  >
                    View Project
                  </button>
                  <button 
                    onClick={() => handleGithubClick(project)}
                    className="px-4 py-2 border border-gray-600 text-gray-300 rounded-lg hover:border-indigo-500 hover:text-indigo-400 transition-all duration-300"
                    title="View Source Code"
                  >
                    <Github size={18} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <button 
            onClick={handleViewAllProjects}
            className="px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-full hover:from-indigo-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg"
          >
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;