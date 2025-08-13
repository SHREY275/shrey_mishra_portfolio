import React from 'react';
import { motion } from 'framer-motion';
import { Download, Eye, FileText, Award, Briefcase, GraduationCap, Code, Phone, Mail, Github, MapPin } from 'lucide-react';

const Resume = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1
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

  const handleDownload = () => {
    // In a real implementation, this would download the actual PDF
    const link = document.createElement('a');
    link.href = '#'; // Replace with actual PDF URL
    link.download = 'Shrey_Mishra_Resume.pdf';
    link.click();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 pt-20 pb-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              My <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Resume</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Download my complete resume or view it online to learn more about my experience, skills, and achievements.
            </p>
            
            <div className="flex justify-center space-x-4 mb-8">
              <button
                onClick={handleDownload}
                className="flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <Download className="w-5 h-5 mr-2" />
                Download PDF
              </button>
              <button className="flex items-center px-6 py-3 bg-white text-gray-700 rounded-lg border border-gray-300 hover:border-blue-500 hover:text-blue-600 transition-all duration-300 font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                <Eye className="w-5 h-5 mr-2" />
                View Online
              </button>
            </div>
          </motion.div>

          {/* Resume Preview */}
          <motion.div variants={itemVariants} className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100">
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8">
              <div className="text-center">
                <div className="w-24 h-24 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl font-bold">SM</span>
                </div>
                <h2 className="text-3xl font-bold mb-2">Shrey Mishra</h2>
                <p className="text-xl opacity-90 mb-4">Aspiring Data Scientist</p>
                
                <div className="flex flex-wrap justify-center gap-4 text-sm">
                  <div className="flex items-center">
                    <Phone className="w-4 h-4 mr-1" />
                    +91 7208374231
                  </div>
                  <div className="flex items-center">
                    <Mail className="w-4 h-4 mr-1" />
                    mishrashrey275@gmail.com
                  </div>
                  <div className="flex items-center">
                    <Github className="w-4 h-4 mr-1" />
                    SHREY275
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-1" />
                    India
                  </div>
                </div>
              </div>
            </div>

            <div className="p-8">
              {/* Professional Summary */}
              <motion.section variants={itemVariants} className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <FileText className="w-6 h-6 mr-2 text-blue-600" />
                  Professional Summary
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Passionate Data Scientist with strong expertise in Machine Learning, Python programming, and data visualization. 
                  Experienced in developing end-to-end ML solutions using FastAPI, Docker, and modern deployment techniques. 
                  Proven track record in healthcare analytics, fraud detection, and predictive modeling with a focus on solving 
                  real-world business problems through AI/ML innovations.
                </p>
              </motion.section>

              {/* Technical Skills */}
              <motion.section variants={itemVariants} className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <Code className="w-6 h-6 mr-2 text-blue-600" />
                  Technical Skills
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Data Science & Analytics</h4>
                    <p className="text-gray-700 text-sm">Python, NumPy, Pandas, Seaborn, Matplotlib, Machine Learning, Statistical Analysis</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">BI Tools & Database</h4>
                    <p className="text-gray-700 text-sm">SQL, Excel, Power BI, Tableau, MongoDB</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Development</h4>
                    <p className="text-gray-700 text-sm">FastAPI, Docker, Streamlit, HTML/CSS, TensorFlow, Linux</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Tools & Version Control</h4>
                    <p className="text-gray-700 text-sm">Git, VS Code, Jupyter, Postman</p>
                  </div>
                </div>
              </motion.section>

              {/* Key Projects */}
              <motion.section variants={itemVariants} className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <Briefcase className="w-6 h-6 mr-2 text-blue-600" />
                  Key Projects
                </h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h4 className="font-semibold text-gray-900">Brain Tumor Detection using MRI Scans</h4>
                    <p className="text-gray-600 text-sm">Deep Learning • TensorFlow • FastAPI • Docker • MongoDB</p>
                    <p className="text-gray-700 text-sm mt-1">Developed CNN-based system for automated brain tumor detection with 95% accuracy</p>
                  </div>
                  
                  <div className="border-l-4 border-green-500 pl-4">
                    <h4 className="font-semibold text-gray-900">Phishing URL Detection System</h4>
                    <p className="text-gray-600 text-sm">Machine Learning • FastAPI • Streamlit • Docker</p>
                    <p className="text-gray-700 text-sm mt-1">Full-stack ML application for malicious URL detection with real-time API</p>
                  </div>
                  
                  <div className="border-l-4 border-purple-500 pl-4">
                    <h4 className="font-semibold text-gray-900">Champions Trophy – Playing 11 Generator</h4>
                    <p className="text-gray-600 text-sm">Data Analysis • Python • Statistics</p>
                    <p className="text-gray-700 text-sm mt-1">AI-powered cricket team optimization based on player statistics and conditions</p>
                  </div>
                  
                  <div className="border-l-4 border-orange-500 pl-4">
                    <h4 className="font-semibold text-gray-900">Diabetes Prediction & Automobile Price Estimation</h4>
                    <p className="text-gray-600 text-sm">Machine Learning • Scikit-learn • Data Visualization</p>
                    <p className="text-gray-700 text-sm mt-1">Predictive modeling projects with comprehensive feature engineering and validation</p>
                  </div>
                </div>
              </motion.section>

              {/* Certifications */}
              <motion.section variants={itemVariants} className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <Award className="w-6 h-6 mr-2 text-blue-600" />
                  Certifications
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                    <h4 className="font-semibold text-gray-900">IBM Python for Data Science</h4>
                    <p className="text-blue-700 text-sm">IBM • Verified</p>
                  </div>
                  
                  <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                    <h4 className="font-semibold text-gray-900">IBM Data Analysis with Python</h4>
                    <p className="text-green-700 text-sm">IBM • Verified</p>
                  </div>
                  
                  <div className="bg-purple-50 rounded-lg p-4 border border-purple-200">
                    <h4 className="font-semibold text-gray-900">IBM Machine Learning with Python</h4>
                    <p className="text-purple-700 text-sm">IBM • Verified</p>
                  </div>
                  
                  <div className="bg-orange-50 rounded-lg p-4 border border-orange-200">
                    <h4 className="font-semibold text-gray-900">Data Analytics Certification</h4>
                    <p className="text-orange-700 text-sm">Itvedant • Excel/SQL/Power BI/Tableau</p>
                  </div>
                </div>
              </motion.section>

              {/* Education */}
              <motion.section variants={itemVariants}>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <GraduationCap className="w-6 h-6 mr-2 text-blue-600" />
                  Education & Interests
                </h3>
                <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                  <p className="text-gray-700">
                    <strong>Focus Areas:</strong> Machine Learning, Deep Learning, Data Science, AI/ML Applications in Healthcare, 
                    Business Intelligence, Statistical Analysis, Predictive Modeling, Computer Vision
                  </p>
                  <p className="text-gray-700 mt-2">
                    <strong>Interests:</strong> Open source contributions, AI research, healthcare analytics, 
                    sustainable AI development, and mentoring aspiring data scientists
                  </p>
                </div>
              </motion.section>
            </div>
          </motion.div>

          {/* Download CTA */}
          <motion.div variants={itemVariants} className="text-center mt-8">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Ready to Collaborate?</h3>
              <p className="mb-6 opacity-90">
                Download my complete resume for detailed information about my experience and achievements.
              </p>
              <button
                onClick={handleDownload}
                className="inline-flex items-center px-8 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <Download className="w-5 h-5 mr-2" />
                Download Full Resume (PDF)
              </button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Resume;