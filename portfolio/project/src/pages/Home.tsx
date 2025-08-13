import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Github, Mail, Phone, Download, Brain, BarChart3, Code2 } from 'lucide-react';

const Home = () => {
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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="pt-20 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center"
          >
            {/* Hero Section */}
            <motion.div variants={itemVariants} className="mb-12">
              <div className="relative inline-block">
                <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center shadow-xl">
                  <span className="text-4xl font-bold text-white">SM</span>
                </div>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                Hi, I'm{' '}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Shrey Mishra
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
                Aspiring Data Scientist passionate about solving business problems using 
                <span className="font-semibold text-blue-600"> AI/ML</span>, with expertise in 
                <span className="font-semibold text-purple-600"> Machine Learning</span>, 
                <span className="font-semibold text-green-600"> Python</span>, and 
                <span className="font-semibold text-orange-600"> Data Visualization</span>
              </p>
            </motion.div>

            {/* Key Highlights */}
            <motion.div variants={itemVariants} className="mb-12">
              <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                  <Brain className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Machine Learning</h3>
                  <p className="text-gray-600">Deep expertise in ML algorithms, TensorFlow, and predictive modeling</p>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                  <BarChart3 className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Data Analytics</h3>
                  <p className="text-gray-600">Advanced analytics with Python, SQL, Power BI, and Tableau</p>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                  <Code2 className="w-12 h-12 text-green-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Full-Stack Development</h3>
                  <p className="text-gray-600">FastAPI, Docker, Streamlit, and modern web technologies</p>
                </div>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4 mb-12">
              <Link
                to="/projects"
                className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                View My Projects
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/resume"
                className="inline-flex items-center px-8 py-3 bg-white text-gray-900 font-semibold rounded-full border-2 border-gray-300 hover:border-blue-500 hover:text-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <Download className="mr-2 w-5 h-5" />
                Download Resume
              </Link>
            </motion.div>

            {/* Contact Links */}
            <motion.div variants={itemVariants} className="flex justify-center space-x-6">
              <a
                href="https://github.com/SHREY275"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors duration-300"
              >
                <Github className="w-6 h-6" />
                <span className="font-medium">GitHub</span>
              </a>
              <a
                href="mailto:mishrashrey275@gmail.com"
                className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors duration-300"
              >
                <Mail className="w-6 h-6" />
                <span className="font-medium">Email</span>
              </a>
              <a
                href="tel:7208374231"
                className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors duration-300"
              >
                <Phone className="w-6 h-6" />
                <span className="font-medium">Call</span>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Home;