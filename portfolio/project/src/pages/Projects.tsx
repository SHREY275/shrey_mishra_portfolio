import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Brain, Activity, Car, Shield, Microscope } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Brain Tumor Detection using MRI Scans",
      description: "Deep learning system for automated brain tumor detection from MRI scans using TensorFlow and computer vision techniques.",
      technologies: ["Deep Learning", "TensorFlow", "FastAPI", "Docker", "Streamlit", "MongoDB"],
      icon: Brain,
      gradient: "from-purple-500 to-pink-500",
      features: ["CNN Model Architecture", "Medical Image Processing", "Real-time Prediction API", "MongoDB Integration"]
    },
    {
      title: "Phishing URL Detection System",
      description: "Full-stack machine learning application to detect malicious URLs using advanced feature extraction and classification algorithms.",
      technologies: ["Machine Learning", "FastAPI", "Streamlit", "Docker", "Python"],
      icon: Shield,
      gradient: "from-red-500 to-orange-500",
      features: ["URL Feature Extraction", "ML Classification", "Web Interface", "Docker Deployment"]
    },
    {
      title: "Champions Trophy – Playing 11 Generator",
      description: "AI-powered system to generate optimal cricket team combinations based on player statistics and match conditions.",
      technologies: ["Python", "Data Analysis", "Machine Learning", "Statistics"],
      icon: Activity,
      gradient: "from-green-500 to-teal-500",
      features: ["Player Statistics Analysis", "Team Optimization", "Performance Metrics", "Strategy Recommendations"]
    },
    {
      title: "Diabetes Prediction System",
      description: "Machine learning model to predict diabetes risk based on medical parameters with high accuracy and interpretability.",
      technologies: ["Python", "Scikit-learn", "Pandas", "Data Visualization"],
      icon: Microscope,
      gradient: "from-blue-500 to-cyan-500",
      features: ["Predictive Modeling", "Feature Engineering", "Model Validation", "Health Risk Assessment"]
    },
    {
      title: "Automobile Price Estimation Model",
      description: "Comprehensive price prediction system for automobiles using regression techniques and market analysis.",
      technologies: ["Python", "Regression Analysis", "Data Science", "Seaborn"],
      icon: Car,
      gradient: "from-yellow-500 to-red-500",
      features: ["Market Price Analysis", "Multiple Regression Models", "Feature Importance", "Price Forecasting"]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              My <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Projects</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A showcase of my data science and machine learning projects, demonstrating practical applications of AI in solving real-world problems.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => {
              const Icon = project.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100"
                >
                  <div className={`h-2 bg-gradient-to-r ${project.gradient}`}></div>
                  
                  <div className="p-8">
                    <div className="flex items-center mb-4">
                      <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${project.gradient} flex items-center justify-center mr-4`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900">{project.title}</h3>
                    </div>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">{project.description}</p>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                      <ul className="space-y-2">
                        {project.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-gray-600">
                            <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Technologies:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-blue-100 hover:text-blue-700 transition-colors"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex space-x-4">
                      <button className="flex-1 flex items-center justify-center px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 font-medium">
                        <Github className="w-4 h-4 mr-2" />
                        View Code
                      </button>
                      <button className="flex-1 flex items-center justify-center px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:border-blue-500 hover:text-blue-600 transition-all duration-300 font-medium">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;