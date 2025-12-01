import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Brain, Activity, Car, Shield, Microscope } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Sanchalan AI",
      description: "Developed an AI-driven Operational Control System focused on real-time anomaly detection and intelligent path guidance. The project involved data ingestion, feature engineering, and training a complex Deep Learning/ML Model to enable autonomous decision-making and efficient system management.",
      technologies: ["Deep Learning", "Python", "TensorFlow", "Feature Engineering", "Anomaly Detection"],
      icon: Brain,
      gradient: "from-cyan-400 to-blue-500",
      features: ["Data Ingestion Pipeline", "Feature Engineering", "Deep Learning Model", "Autonomous Decision-Making"],
      github: "https://github.com/SHREY275/sanchalan_ai"
    },
    {
      title: "Sales Forecasting Model",
      description: "Engineered a robust Sales Forecasting Model to accurately predict future sales based on historical data. Utilized advanced regression algorithms (XGBoost, Random Forest) and Hyperparameter Tuning to maximize prediction accuracy.",
      technologies: ["Machine Learning", "XGBoost", "Random Forest", "Python", "EDA", "Feature Engineering"],
      icon: Activity,
      gradient: "from-green-500 to-emerald-500",
      features: ["Advanced Regression Algorithms", "Hyperparameter Tuning", "Seasonality Analysis", "Business Insights"],
      github: "https://github.com/SHREY275/Sales_ml_prj"
    },
    {
      title: "Brain Tumor Detection using MRI Scans",
      description: "Deep learning system for automated brain tumor detection from MRI scans using TensorFlow and computer vision techniques.",
      technologies: ["Deep Learning", "TensorFlow", "FastAPI", "Docker", "Streamlit", "MongoDB"],
      icon: Brain,
      gradient: "from-purple-500 to-pink-500",
      features: ["CNN Model Architecture", "Medical Image Processing", "Real-time Prediction API", "MongoDB Integration"],
      github: "https://github.com/SHREY275/brain_tumor_project"
    },
    {
      title: "Phishing URL Detection System",
      description: "Full-stack machine learning application to detect malicious URLs using advanced feature extraction and classification algorithms.",
      technologies: ["Machine Learning", "FastAPI", "Streamlit", "Docker", "Python"],
      icon: Shield,
      gradient: "from-red-500 to-orange-500",
      features: ["URL Feature Extraction", "ML Classification", "Web Interface", "Docker Deployment"],
      github: "https://github.com/SHREY275/codeb"
    },
    {
      title: "Champions Trophy – Playing 11 Generator",
      description: "AI-powered system to generate optimal cricket team combinations based on player statistics and match conditions.",
      technologies: ["Python", "Data Analysis", "Machine Learning", "Statistics"],
      icon: Activity,
      gradient: "from-green-500 to-teal-500",
      features: ["Player Statistics Analysis", "Team Optimization", "Performance Metrics", "Strategy Recommendations"],
      github: "https://github.com/SHREY275/Gameathon"
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
      features: ["Market Price Analysis", "Multiple Regression Models", "Feature Importance", "Price Forecasting"],
      github: "https://github.com/SHREY275/car_prediction"
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
    <div className="min-h-screen bg-gradient-to-br from-[#111827] via-[#1e293b] to-[#1f2937] pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-black text-gray-50 mb-4 tracking-tight">
              My <span className="gradient-text">Projects</span>
            </h1>
            <div className="section-divider mb-6"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
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
                  className="bg-[#1e293b] rounded-xl shadow-xl border border-cyan-500/20 card-hover group"
                >
                  <div className={`h-3 bg-gradient-to-r ${project.gradient}`}></div>
                  
                  <div className="p-8">
                    <div className="flex items-center mb-4">
                      <div className={`w-14 h-14 rounded-lg bg-gradient-to-r ${project.gradient} flex items-center justify-center mr-4 group-hover:scale-110 transition-transform`}>
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-50">{project.title}</h3>
                    </div>
                    
                    <p className="text-gray-300 mb-6 leading-relaxed text-sm">{project.description}</p>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-100 mb-3 text-sm">Key Features:</h4>
                      <ul className="space-y-2">
                        {project.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start text-gray-300 text-sm">
                            <span className="text-cyan-400 mr-2 mt-1">▸</span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-100 mb-3 text-sm">Technologies:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, idx) => (
                          <span
                            key={idx}
                            className="skill-badge text-xs"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex space-x-4">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 flex items-center justify-center px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 font-medium text-sm"
                        >
                          <Github className="w-4 h-4 mr-2" />
                          View Code
                        </a>
                      )}
                      {!project.github && (
                        <button className="flex-1 flex items-center justify-center px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 font-medium text-sm opacity-50 cursor-not-allowed">
                          <Github className="w-4 h-4 mr-2" />
                          View Code
                        </button>
                      )}
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