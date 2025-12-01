import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Github, Mail, Phone, Download, Brain, BarChart3, Code2 } from 'lucide-react';
import profileImage from '../web_pic.jpg';

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
    <div className="min-h-screen bg-gradient-to-br from-[#111827] via-[#1e293b] to-[#1f2937]">
      <div className="pt-20 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center"
          >
            {/* Hero Section - Enhanced */}
            <motion.div variants={itemVariants} className="mb-16">
              <div className="relative inline-block mb-8">
                <div className="w-40 h-40 mx-auto bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center shadow-2xl profile-image-enhanced overflow-hidden p-1">
                  <img
                    src={profileImage}
                    alt="Shrey Mishra - Full Stack Developer"
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
              </div>
              <h1 className="text-6xl md:text-7xl font-black text-gray-50 mb-4 tracking-tight">
                Hi, I'm{' '}
                <span className="gradient-text">
                  Shrey Mishra
                </span>
              </h1>
              <div className="section-divider mb-6"></div>
              <p className="text-2xl md:text-3xl font-semibold text-cyan-400 mb-4">
                Full Stack Developer & Data Scientist
              </p>
              <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                Aspiring Data Scientist passionate about solving business problems using 
                <span className="font-semibold text-blue-600"> AI/ML</span>, with expertise in 
                <span className="font-semibold text-purple-600"> Machine Learning</span>, 
                <span className="font-semibold text-green-600"> Python</span>, and 
                <span className="font-semibold text-orange-600"> Data Visualization</span>
              </p>
            </motion.div>

            {/* Key Highlights */}
            <motion.div variants={itemVariants} className="mb-12">
              <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                <div className="bg-[#1e293b] rounded-xl p-8 border border-cyan-500/20 card-hover group">
                  <Brain className="w-14 h-14 text-cyan-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-xl font-bold text-gray-50 mb-3">Machine Learning</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">Deep expertise in ML algorithms, TensorFlow, and predictive modeling</p>
                </div>
                <div className="bg-[#1e293b] rounded-xl p-8 border border-blue-500/20 card-hover group">
                  <BarChart3 className="w-14 h-14 text-blue-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-xl font-bold text-gray-50 mb-3">Data Analytics</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">Advanced analytics with Python, SQL, Power BI, and Tableau</p>
                </div>
                <div className="bg-[#1e293b] rounded-xl p-8 border border-cyan-500/20 card-hover group">
                  <Code2 className="w-14 h-14 text-cyan-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-xl font-bold text-gray-50 mb-3">Full-Stack Development</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">FastAPI, Docker, Streamlit, and modern web technologies</p>
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
                className="flex items-center space-x-2 text-gray-400 hover:text-blue-500 transition-colors duration-300"
              >
                <Github className="w-6 h-6" />
                <span className="font-medium">GitHub</span>
              </a>
              <a
                href="mailto:mishrashrey275@gmail.com"
                className="flex items-center space-x-2 text-gray-400 hover:text-blue-500 transition-colors duration-300"
              >
                <Mail className="w-6 h-6" />
                <span className="font-medium">Email</span>
              </a>
              <a
                href="tel:7208374231"
                className="flex items-center space-x-2 text-gray-400 hover:text-blue-500 transition-colors duration-300"
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