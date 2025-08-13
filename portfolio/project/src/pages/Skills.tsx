import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, BarChart3, Wrench, GitBranch, Brain } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Data Science & Analytics",
      icon: Brain,
      gradient: "from-blue-500 to-cyan-500",
      skills: [
        { name: "Python", level: 95 },
        { name: "NumPy", level: 90 },
        { name: "Pandas", level: 92 },
        { name: "Seaborn", level: 85 },
        { name: "Matplotlib", level: 88 },
        { name: "Machine Learning", level: 90 }
      ]
    },
    {
      title: "BI Tools & Database",
      icon: Database,
      gradient: "from-purple-500 to-pink-500",
      skills: [
        { name: "SQL", level: 88 },
        { name: "Excel", level: 85 },
        { name: "Power BI", level: 82 },
        { name: "Tableau", level: 80 },
        { name: "MongoDB", level: 75 }
      ]
    },
    {
      title: "Development & Deployment",
      icon: Code,
      gradient: "from-green-500 to-teal-500",
      skills: [
        { name: "FastAPI", level: 85 },
        { name: "Docker", level: 80 },
        { name: "Streamlit", level: 88 },
        { name: "HTML/CSS", level: 85 },
        { name: "Linux", level: 78 },
        { name: "TensorFlow", level: 82 }
      ]
    },
    {
      title: "Tools & Version Control",
      icon: GitBranch,
      gradient: "from-orange-500 to-red-500",
      skills: [
        { name: "Git", level: 85 },
        { name: "VS Code", level: 90 },
        { name: "Jupyter", level: 92 },
        { name: "Postman", level: 80 }
      ]
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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-purple-50 pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Technical <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Skills</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A comprehensive overview of my technical expertise across data science, machine learning, and software development.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, categoryIndex) => {
              const Icon = category.icon;
              return (
                <motion.div
                  key={categoryIndex}
                  variants={itemVariants}
                  className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100"
                >
                  <div className={`h-2 bg-gradient-to-r ${category.gradient}`}></div>
                  
                  <div className="p-8">
                    <div className="flex items-center mb-6">
                      <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${category.gradient} flex items-center justify-center mr-4`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900">{category.title}</h3>
                    </div>
                    
                    <div className="space-y-4">
                      {category.skills.map((skill, skillIndex) => (
                        <div key={skillIndex} className="relative">
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-gray-700 font-medium">{skill.name}</span>
                            <span className="text-gray-500 text-sm">{skill.level}%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2.5">
                            <motion.div
                              className={`bg-gradient-to-r ${category.gradient} h-2.5 rounded-full`}
                              initial={{ width: 0 }}
                              animate={{ width: `${skill.level}%` }}
                              transition={{ duration: 1, delay: categoryIndex * 0.2 + skillIndex * 0.1 }}
                            ></motion.div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Additional Skills Summary */}
          <motion.div variants={itemVariants} className="mt-16">
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Core Competencies</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <BarChart3 className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                  <h4 className="font-semibold text-gray-900 mb-2">Data Analysis</h4>
                  <p className="text-gray-600 text-sm">Statistical analysis, data preprocessing, and visualization</p>
                </div>
                <div className="text-center">
                  <Brain className="w-8 h-8 text-purple-600 mx-auto mb-3" />
                  <h4 className="font-semibold text-gray-900 mb-2">Machine Learning</h4>
                  <p className="text-gray-600 text-sm">Supervised/unsupervised learning, deep learning, model deployment</p>
                </div>
                <div className="text-center">
                  <Wrench className="w-8 h-8 text-green-600 mx-auto mb-3" />
                  <h4 className="font-semibold text-gray-900 mb-2">Full-Stack Development</h4>
                  <p className="text-gray-600 text-sm">API development, containerization, and web applications</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;