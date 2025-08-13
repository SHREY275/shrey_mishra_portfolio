import React from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink, Calendar, CheckCircle } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      title: "IBM Python for Data Science",
      issuer: "IBM",
      description: "Comprehensive Python programming course focused on data science applications, covering pandas, numpy, matplotlib, and data analysis techniques.",
      skills: ["Python Programming", "Data Analysis", "Pandas", "NumPy", "Matplotlib"],
      gradient: "from-blue-600 to-blue-800",
      verified: true
    },
    {
      title: "IBM Data Analysis with Python",
      issuer: "IBM",
      description: "Advanced data analysis techniques using Python, including statistical analysis, data visualization, and exploratory data analysis.",
      skills: ["Statistical Analysis", "Data Visualization", "EDA", "Python", "Scipy"],
      gradient: "from-green-600 to-green-800",
      verified: true
    },
    {
      title: "IBM Machine Learning with Python",
      issuer: "IBM",
      description: "Complete machine learning course covering supervised and unsupervised learning algorithms, model evaluation, and practical implementation.",
      skills: ["Machine Learning", "Scikit-learn", "Model Evaluation", "Classification", "Regression"],
      gradient: "from-purple-600 to-purple-800",
      verified: true
    },
    {
      title: "Itvedant Data Analytics Certification",
      issuer: "Itvedant",
      description: "Comprehensive certification program covering Excel, SQL, Power BI, and Tableau for business intelligence and data analytics.",
      skills: ["Excel", "SQL", "Power BI", "Tableau", "Business Intelligence"],
      gradient: "from-orange-600 to-orange-800",
      verified: true
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
              My <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Certifications</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional certifications that validate my expertise in data science, machine learning, and business intelligence tools.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100"
              >
                <div className={`h-2 bg-gradient-to-r ${cert.gradient}`}></div>
                
                <div className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center">
                      <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${cert.gradient} flex items-center justify-center mr-4`}>
                        <Award className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">{cert.title}</h3>
                        <p className="text-gray-600 font-medium">{cert.issuer}</p>
                      </div>
                    </div>
                    {cert.verified && (
                      <div className="flex items-center text-green-600">
                        <CheckCircle className="w-5 h-5 mr-1" />
                        <span className="text-sm font-medium">Verified</span>
                      </div>
                    )}
                  </div>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">{cert.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Skills Covered:</h4>
                    <div className="flex flex-wrap gap-2">
                      {cert.skills.map((skill, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-blue-100 hover:text-blue-700 transition-colors"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <button className="w-full flex items-center justify-center px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 font-medium">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Certificate
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Stats Section */}
          <motion.div variants={itemVariants} className="mt-16">
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Certification Overview</h3>
              <div className="grid md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">4</div>
                  <p className="text-gray-600">Total Certifications</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">3</div>
                  <p className="text-gray-600">IBM Certifications</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">15+</div>
                  <p className="text-gray-600">Skills Validated</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600 mb-2">100%</div>
                  <p className="text-gray-600">Verified Credentials</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Certifications;