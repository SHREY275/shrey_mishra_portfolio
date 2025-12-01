import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, ExternalLink } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      role: 'Full Stack Developer',
      company: 'Karpuragaurai Technology',
      location: 'Remote',
      duration: 'October 2025 – Present',
      current: true,
      description: 'Full Stack Developer specializing in end-to-end web application development with a focus on integrating advanced AI/ML capabilities.',
      highlights: [
        'Developing robust back-end APIs using frameworks like Flask/FastAPI to support Computer Vision (Face Recognition, Object Detection) and Audio Processing (Speaker Diarization, Transcription).',
        'Utilizing models such as InsightFace and 3divi for facial analysis and OpenAI Whisper with pyannote.audio for audio processing.',
        'Gaining proficiency in and integrating modern database systems, including MongoDB and PostgreSQL, to manage complex, non-relational, and relational data structures.'
      ],
      color: 'cyan'
    },
    {
      id: 2,
      role: 'Data Science Intern',
      company: 'Code B',
      location: 'Remote',
      duration: 'April 2025 – June 2025',
      current: false,
      description: '',
      highlights: [
        'Built a full-stack phishing URL detection system using machine learning, integrating a FastAPI backend and Streamlit frontend.',
        'Containerized and deployed the application using Docker, enabling consistent development and smooth deployment.',
        'Independently handled end-to-end development, including model training, UI/UX design, API creation, and documentation.'
      ],
      color: 'blue',
      link: 'https://code-b.dev/'
    },
    {
      id: 3,
      role: 'Python Backend Development Intern',
      company: 'Pelorus Technologies Pvt. Ltd.',
      location: 'Remote',
      duration: 'Oct 2024 – Jan 2025',
      current: false,
      description: '',
      highlights: [
        'Engineered a live AI-based project focused on video summarization, speaker diarization, and audio refinement.',
        'Optimized audio samples using Demucs and SciPy-based signal processing to minimize background noise and enhance sound clarity.',
        'Collaborated on the integration of machine learning models into scalable systems.'
      ],
      color: 'purple',
      link: 'https://www.pelorus.in/'
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

  const getColorClasses = (color: string) => {
    const colors: { [key: string]: { border: string; bg: string; text: string; badge: string } } = {
      cyan: {
        border: 'border-cyan-500/30',
        bg: 'bg-cyan-500/10',
        text: 'text-cyan-400',
        badge: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/50'
      },
      blue: {
        border: 'border-blue-500/30',
        bg: 'bg-blue-500/10',
        text: 'text-blue-400',
        badge: 'bg-blue-500/20 text-blue-300 border-blue-500/50'
      },
      purple: {
        border: 'border-purple-500/30',
        bg: 'bg-purple-500/10',
        text: 'text-purple-400',
        badge: 'bg-purple-500/20 text-purple-300 border-purple-500/50'
      }
    };
    return colors[color] || colors.cyan;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#111827] via-[#1e293b] to-[#1f2937] pt-20 pb-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-black text-gray-50 mb-4 tracking-tight">
              Professional <span className="gradient-text">Experience</span>
            </h1>
            <div className="section-divider mb-6"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A journey through my professional roles in full-stack development, data science, and AI/ML engineering.
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-cyan-500 via-blue-500 to-purple-500 opacity-30"></div>

            {/* Experience Cards */}
            <div className="space-y-12">
              {experiences.map((exp, index) => {
                const colors = getColorClasses(exp.color);
                const isEven = index % 2 === 0;

                return (
                  <motion.div
                    key={exp.id}
                    variants={itemVariants}
                    className={`relative ${isEven ? 'md:pr-1/2' : 'md:pl-1/2 md:ml-auto'} md:w-[calc(50%-2rem)]`}
                  >
                    {/* Timeline dot */}
                    <div className={`hidden md:block absolute top-8 ${isEven ? 'right-0' : 'left-0'} transform ${isEven ? 'translate-x-1/2' : '-translate-x-1/2'} w-4 h-4 rounded-full ${colors.bg} border-2 ${colors.border} z-10`}></div>

                    {/* Card */}
                    <div className={`bg-[#1e293b] rounded-xl p-6 border ${colors.border} card-hover group`}>
                      {/* Current badge */}
                      {exp.current && (
                        <div className="mb-4">
                          <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold border ${colors.badge}`}>
                            Current Position
                          </span>
                        </div>
                      )}

                      {/* Header */}
                      <div className="mb-4">
                        <h3 className={`text-2xl font-bold ${colors.text} mb-2 group-hover:scale-105 transition-transform inline-block`}>
                          {exp.role}
                        </h3>
                        <div className="flex items-center gap-2 text-gray-300 font-semibold text-lg mb-2">
                          <Briefcase className="w-5 h-5" />
                          <span>{exp.company}</span>
                          {exp.link && (
                            <a
                              href={exp.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className={`${colors.text} hover:scale-110 transition-transform`}
                            >
                              <ExternalLink className="w-4 h-4" />
                            </a>
                          )}
                        </div>
                        <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            <span>{exp.duration}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            <span>{exp.location}</span>
                          </div>
                        </div>
                      </div>

                      {/* Description */}
                      {exp.description && (
                        <p className="text-gray-300 mb-4 leading-relaxed">
                          {exp.description}
                        </p>
                      )}

                      {/* Highlights */}
                      {exp.highlights.length > 0 && (
                        <ul className="space-y-2">
                          {exp.highlights.map((highlight, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-gray-300 text-sm">
                              <span className={`${colors.text} mt-1.5 flex-shrink-0`}>▸</span>
                              <span className="leading-relaxed">{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Stats Section */}
          <motion.div variants={itemVariants} className="mt-16">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-[#1e293b] rounded-xl p-6 border border-cyan-500/20 text-center">
                <div className="text-4xl font-bold text-cyan-400 mb-2">3</div>
                <div className="text-gray-300 font-medium">Professional Roles</div>
              </div>
              <div className="bg-[#1e293b] rounded-xl p-6 border border-blue-500/20 text-center">
                <div className="text-4xl font-bold text-blue-400 mb-2">1+</div>
                <div className="text-gray-300 font-medium">Years Experience</div>
              </div>
              <div className="bg-[#1e293b] rounded-xl p-6 border border-purple-500/20 text-center">
                <div className="text-4xl font-bold text-purple-400 mb-2">10+</div>
                <div className="text-gray-300 font-medium">Projects Delivered</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Experience;
