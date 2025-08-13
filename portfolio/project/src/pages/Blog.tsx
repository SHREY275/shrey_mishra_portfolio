import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight, BookOpen, TrendingUp, Users } from 'lucide-react';

const Blog = () => {
  const blogPosts = [
    {
      title: "Getting Started with Machine Learning in 2025",
      excerpt: "A comprehensive guide for aspiring data scientists on the fundamentals of machine learning, essential tools, and practical project ideas.",
      date: "2025-01-15",
      readTime: "8 min read",
      category: "Machine Learning",
      gradient: "from-blue-500 to-purple-500",
      featured: true
    },
    {
      title: "Building Your First Deep Learning Model",
      excerpt: "Step-by-step tutorial on creating a neural network using TensorFlow for image classification tasks.",
      date: "2025-01-10",
      readTime: "12 min read",
      category: "Deep Learning",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "Data Visualization Best Practices with Python",
      excerpt: "Explore advanced techniques for creating compelling data visualizations using matplotlib, seaborn, and plotly.",
      date: "2025-01-05",
      readTime: "6 min read",
      category: "Data Visualization",
      gradient: "from-green-500 to-teal-500"
    },
    {
      title: "Docker for Data Scientists: A Complete Guide",
      excerpt: "Learn how to containerize your machine learning applications and ensure reproducible data science workflows.",
      date: "2024-12-28",
      readTime: "10 min read",
      category: "DevOps",
      gradient: "from-orange-500 to-red-500"
    },
    {
      title: "FastAPI for ML Model Deployment",
      excerpt: "Deploy your machine learning models as REST APIs using FastAPI for production-ready applications.",
      date: "2024-12-20",
      readTime: "15 min read",
      category: "API Development",
      gradient: "from-cyan-500 to-blue-500"
    },
    {
      title: "Exploring Healthcare Data with Python",
      excerpt: "Analyze healthcare datasets to extract meaningful insights and build predictive models for patient outcomes.",
      date: "2024-12-15",
      readTime: "11 min read",
      category: "Healthcare Analytics",
      gradient: "from-rose-500 to-pink-500"
    }
  ];

  const categories = [
    { name: "All Posts", count: 6, active: true },
    { name: "Machine Learning", count: 2 },
    { name: "Data Visualization", count: 1 },
    { name: "Deep Learning", count: 1 },
    { name: "DevOps", count: 1 },
    { name: "API Development", count: 1 }
  ];

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
              My <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Blog</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Insights, tutorials, and thoughts on data science, machine learning, and emerging technologies in AI.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div variants={itemVariants} className="mb-12">
            <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div className="flex items-center justify-center space-x-3">
                  <BookOpen className="w-8 h-8 text-blue-600" />
                  <div>
                    <div className="text-2xl font-bold text-gray-900">6</div>
                    <div className="text-gray-600">Articles Published</div>
                  </div>
                </div>
                <div className="flex items-center justify-center space-x-3">
                  <TrendingUp className="w-8 h-8 text-green-600" />
                  <div>
                    <div className="text-2xl font-bold text-gray-900">2.5K</div>
                    <div className="text-gray-600">Total Views</div>
                  </div>
                </div>
                <div className="flex items-center justify-center space-x-3">
                  <Users className="w-8 h-8 text-purple-600" />
                  <div>
                    <div className="text-2xl font-bold text-gray-900">150+</div>
                    <div className="text-gray-600">Followers</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Category Filter */}
          <motion.div variants={itemVariants} className="mb-12">
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category, index) => (
                <button
                  key={index}
                  className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                    category.active
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                      : 'bg-white text-gray-600 hover:text-blue-600 hover:bg-blue-50 border border-gray-200'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </motion.div>

          {/* Featured Post */}
          {blogPosts.filter(post => post.featured).map((post, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="mb-12 bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100"
            >
              <div className={`h-2 bg-gradient-to-r ${post.gradient}`}></div>
              <div className="p-8 md:p-12">
                <div className="flex items-center mb-4">
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mr-4">Featured</span>
                  <span className="text-gray-500 text-sm">{post.category}</span>
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">{post.title}</h2>
                <p className="text-gray-600 text-lg mb-6 leading-relaxed">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-gray-500 text-sm">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {new Date(post.date).toLocaleDateString()}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                  <button className="flex items-center px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 font-medium">
                    Read More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}

          {/* Regular Posts */}
          <div className="grid md:grid-cols-2 gap-8">
            {blogPosts.filter(post => !post.featured).map((post, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100"
              >
                <div className={`h-2 bg-gradient-to-r ${post.gradient}`}></div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-gray-500 text-sm">{post.category}</span>
                    <div className="flex items-center text-gray-500 text-sm">
                      <Clock className="w-4 h-4 mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{post.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-gray-500 text-sm">
                      <Calendar className="w-4 h-4 mr-1" />
                      {new Date(post.date).toLocaleDateString()}
                    </div>
                    <button className="flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors">
                      Read More
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Newsletter Signup */}
          <motion.div variants={itemVariants} className="mt-16">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-center text-white">
              <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
              <p className="mb-6 opacity-90">Subscribe to get notified about new articles on data science and machine learning.</p>
              <div className="max-w-md mx-auto flex gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
                />
                <button className="px-6 py-2 bg-white text-blue-600 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Blog;