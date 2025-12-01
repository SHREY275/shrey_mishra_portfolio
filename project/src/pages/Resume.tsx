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
    <div className="min-h-screen bg-gradient-to-br from-[#1e1e1e] via-[#252525] to-[#2d2d2d] pt-20 pb-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-100 mb-6">
              My <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Resume</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
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
              <button className="flex items-center px-6 py-3 bg-[#252525] text-gray-300 rounded-lg border border-[#3a3a3a] hover:border-blue-500 hover:text-blue-400 transition-all duration-300 font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                <Eye className="w-5 h-5 mr-2" />
                View Online
              </button>
            </div>
          </motion.div>

          {/* Resume Preview */}
          <motion.div variants={itemVariants} className="bg-[#252525] rounded-2xl shadow-2xl overflow-hidden border border-[#3a3a3a]">
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
                <h3 className="text-2xl font-bold text-gray-100 mb-4 flex items-center">
                  <FileText className="w-6 h-6 mr-2 text-blue-500" />
                  Professional Summary
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Passionate Data Scientist with strong expertise in Machine Learning, Python programming, and data visualization. 
                  Experienced in developing end-to-end ML solutions using FastAPI, Docker, and modern deployment techniques. 
                  Proven track record in healthcare analytics, fraud detection, and predictive modeling with a focus on solving 
                  real-world business problems through AI/ML innovations.
                </p>
              </motion.section>

              {/* Experience */}
              <motion.section variants={itemVariants} className="mb-8">
                <h3 className="text-2xl font-bold text-gray-100 mb-4 flex items-center">
                  <Briefcase className="w-6 h-6 mr-2 text-blue-500" />
                  Experience
                </h3>
                <div className="space-y-6">
                  <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 rounded-lg p-6 border border-blue-700/50 card-hover">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h4 className="text-xl font-bold text-gray-100">Full Stack Developer</h4>
                        <p className="text-blue-400 font-semibold">Karpuragaurai Technology</p>
                      </div>
                      <span className="text-gray-400 text-sm font-medium">October 2025 – Present</span>
                    </div>
                    <p className="text-gray-300 mt-2 mb-3">
                      Full Stack Developer specializing in end-to-end web application development with a focus on integrating advanced AI/ML capabilities.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2 text-gray-300 text-sm">
                        <span className="text-cyan-400 mt-1.5 flex-shrink-0">▸</span>
                        <span>Developing robust back-end APIs using frameworks like Flask/FastAPI to support Computer Vision (Face Recognition, Object Detection) and Audio Processing (Speaker Diarization, Transcription).</span>
                      </li>
                      <li className="flex items-start gap-2 text-gray-300 text-sm">
                        <span className="text-cyan-400 mt-1.5 flex-shrink-0">▸</span>
                        <span>Utilizing models such as InsightFace and 3divi for facial analysis and OpenAI Whisper with pyannote.audio for audio processing.</span>
                      </li>
                      <li className="flex items-start gap-2 text-gray-300 text-sm">
                        <span className="text-cyan-400 mt-1.5 flex-shrink-0">▸</span>
                        <span>Gaining proficiency in and integrating modern database systems, including MongoDB and PostgreSQL, to manage complex, non-relational, and relational data structures.</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-[#2d2d2d] rounded-lg p-6 border border-[#3a3a3a] card-hover">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h4 className="text-xl font-bold text-gray-100">Python Backend Development Intern</h4>
                        <p className="text-purple-400 font-semibold">Pelorus Technologies Pvt. Ltd.</p>
                      </div>
                      <span className="text-gray-400 text-sm font-medium">Oct 2024 – Jan 2025</span>
                    </div>
                    <p className="text-gray-300 mt-2">
                      Worked on AI-based projects including video summarization, speaker diarization, and audio refinement.
                    </p>
                  </div>

                  <div className="bg-[#2d2d2d] rounded-lg p-6 border border-[#3a3a3a] card-hover">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h4 className="text-xl font-bold text-gray-100">Data Science Intern</h4>
                        <p className="text-green-400 font-semibold">Code B</p>
                      </div>
                      <span className="text-gray-400 text-sm font-medium">Apr 2025 – Jun 2025</span>
                    </div>
                    <p className="text-gray-300 mt-2">
                      Developed a phishing URL detection system with FastAPI backend, Streamlit frontend, and Docker deployment.
                    </p>
                  </div>
                </div>
              </motion.section>

              {/* Technical Skills */}
              <motion.section variants={itemVariants} className="mb-8">
                <h3 className="text-2xl font-bold text-gray-100 mb-4 flex items-center">
                  <Code className="w-6 h-6 mr-2 text-cyan-400" />
                  Technical Skills
                </h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-gray-100 mb-3">Data Science & Analytics</h4>
                    <div className="flex flex-wrap gap-2">
                      {['Python', 'NumPy', 'Pandas', 'Seaborn', 'Matplotlib', 'Machine Learning', 'Statistical Analysis'].map((skill) => (
                        <span key={skill} className="skill-badge">{skill}</span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-100 mb-3">BI Tools & Database</h4>
                    <div className="flex flex-wrap gap-2">
                      {['SQL', 'Excel', 'Power BI', 'Tableau', 'MongoDB'].map((skill) => (
                        <span key={skill} className="skill-badge">{skill}</span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-100 mb-3">Development & Frameworks</h4>
                    <div className="flex flex-wrap gap-2">
                      {['FastAPI', 'Docker', 'Streamlit', 'HTML/CSS', 'TensorFlow', 'Linux', 'React', 'Node.js'].map((skill) => (
                        <span key={skill} className="skill-badge">{skill}</span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-100 mb-3">Tools & Version Control</h4>
                    <div className="flex flex-wrap gap-2">
                      {['Git', 'VS Code', 'Jupyter', 'Postman', 'Kiro IDE'].map((skill) => (
                        <span key={skill} className="skill-badge">{skill}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.section>

              {/* Key Projects */}
              <motion.section variants={itemVariants} className="mb-8">
                <h3 className="text-2xl font-bold text-gray-100 mb-4 flex items-center">
                  <Briefcase className="w-6 h-6 mr-2 text-blue-500" />
                  Key Projects
                </h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-blue-500 pl-4 bg-[#2d2d2d] p-4 rounded-r-lg card-hover">
                    <h4 className="font-semibold text-gray-100">Brain Tumor Detection using MRI Scans</h4>
                    <p className="text-gray-400 text-sm">Deep Learning • TensorFlow • FastAPI • Docker • MongoDB</p>
                    <p className="text-gray-300 text-sm mt-1">Developed CNN-based system for automated brain tumor detection with 95% accuracy</p>
                  </div>
                  
                  <div className="border-l-4 border-green-500 pl-4 bg-[#2d2d2d] p-4 rounded-r-lg card-hover">
                    <h4 className="font-semibold text-gray-100">Phishing URL Detection System</h4>
                    <p className="text-gray-400 text-sm">Machine Learning • FastAPI • Streamlit • Docker</p>
                    <p className="text-gray-300 text-sm mt-1">Full-stack ML application for malicious URL detection with real-time API</p>
                  </div>
                  
                  <div className="border-l-4 border-purple-500 pl-4 bg-[#2d2d2d] p-4 rounded-r-lg card-hover">
                    <h4 className="font-semibold text-gray-100">Champions Trophy – Playing 11 Generator</h4>
                    <p className="text-gray-400 text-sm">Data Analysis • Python • Statistics</p>
                    <p className="text-gray-300 text-sm mt-1">AI-powered cricket team optimization based on player statistics and conditions</p>
                  </div>
                  
                  <div className="border-l-4 border-orange-500 pl-4 bg-[#2d2d2d] p-4 rounded-r-lg card-hover">
                    <h4 className="font-semibold text-gray-100">Diabetes Prediction & Automobile Price Estimation</h4>
                    <p className="text-gray-400 text-sm">Machine Learning • Scikit-learn • Data Visualization</p>
                    <p className="text-gray-300 text-sm mt-1">Predictive modeling projects with comprehensive feature engineering and validation</p>
                  </div>
                </div>
              </motion.section>

              {/* Certifications */}
              <motion.section variants={itemVariants} className="mb-8">
                <h3 className="text-2xl font-bold text-gray-100 mb-4 flex items-center">
                  <Award className="w-6 h-6 mr-2 text-blue-500" />
                  Certifications
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-blue-900/30 rounded-lg p-4 border border-blue-700/50 card-hover">
                    <h4 className="font-semibold text-gray-100">IBM Python for Data Science</h4>
                    <p className="text-blue-400 text-sm">IBM • Verified</p>
                  </div>
                  
                  <div className="bg-green-900/30 rounded-lg p-4 border border-green-700/50 card-hover">
                    <h4 className="font-semibold text-gray-100">IBM Data Analysis with Python</h4>
                    <p className="text-green-400 text-sm">IBM • Verified</p>
                  </div>
                  
                  <div className="bg-purple-900/30 rounded-lg p-4 border border-purple-700/50 card-hover">
                    <h4 className="font-semibold text-gray-100">IBM Machine Learning with Python</h4>
                    <p className="text-purple-400 text-sm">IBM • Verified</p>
                  </div>
                  
                  <div className="bg-orange-900/30 rounded-lg p-4 border border-orange-700/50 card-hover">
                    <h4 className="font-semibold text-gray-100">Data Analytics Certification</h4>
                    <p className="text-orange-400 text-sm">Itvedant • Excel/SQL/Power BI/Tableau</p>
                  </div>
                </div>
              </motion.section>

              {/* Education */}
              <motion.section variants={itemVariants}>
                <h3 className="text-2xl font-bold text-gray-100 mb-4 flex items-center">
                  <GraduationCap className="w-6 h-6 mr-2 text-blue-500" />
                  Education & Interests
                </h3>
                <div className="bg-[#2d2d2d] rounded-lg p-4 border border-[#3a3a3a] mb-4">
                  <p className="text-gray-300">
                    <strong className="text-gray-100">CGPA:</strong> 7.13/10
                  </p>
                  <p className="text-gray-300 mt-2">
                    <strong className="text-gray-100">Focus Areas:</strong> Machine Learning, Deep Learning, Data Science, AI/ML Applications in Healthcare, 
                    Business Intelligence, Statistical Analysis, Predictive Modeling, Computer Vision
                  </p>
                  <p className="text-gray-300 mt-2">
                    <strong className="text-gray-100">Interests:</strong> Open source contributions, AI research, healthcare analytics, 
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