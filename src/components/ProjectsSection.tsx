import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, FileText, Award, Github, Play, Star, Users, Calendar, Target, TrendingUp } from 'lucide-react';

const ProjectsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const projects = [
    {
      title: "Fake News Detection Using AI",
      duration: "February 2025 – April 2025",
      institution: "VIT-AP University",
      category: "Research",
      description: "Comprehensive research project comparing 7 state-of-the-art ML/DL models for fake news detection using a dataset of 44,000+ articles. The study evaluated Linear Regression, Decision Tree, Random Forest, XGBoost, Logistic Regression, LSTM, and LSTM+CNN models. XGBoost emerged as the top performer with 99.7% accuracy and AUROC of 0.9971.",
      detailedDescription: "This groundbreaking research addresses the critical challenge of misinformation in digital media. The project involved extensive data preprocessing, feature engineering using TF-IDF vectorization, and comprehensive model evaluation. Advanced techniques like cross-validation, hyperparameter tuning, and ensemble methods were employed to achieve optimal performance.",
      technologies: ["Python", "Scikit-learn", "TensorFlow", "Keras", "LSTM", "CNN", "XGBoost", "NLP", "TF-IDF", "Pandas", "NumPy", "Matplotlib"],
      highlights: ["Published in IJRTI Journal", "99.7% Accuracy Achieved", "7 Models Compared", "44K+ Articles Analyzed", "AUROC: 0.9971"],
      challenges: ["Data preprocessing and cleaning", "Feature engineering optimization", "Model comparison methodology", "Publication-quality research"],
      outcomes: ["Research publication accepted", "Highest accuracy achieved in comparative study", "Methodology framework established"],
      type: "Research",
      icon: "🚨",
      color: "from-red-500 to-pink-500",
      borderStyle: "border-t-4 border-t-red-500 border-r-4 border-r-pink-500 border-b-4 border-b-purple-500 border-l-4 border-l-orange-500",
      featured: true,
      teamSize: 1,
      status: "Published",
      githubUrl: "https://github.com/Vasifgithub/FAKE-NEWS-DETECTION-SYSTEM-USING-AI",
      demoUrl: "#",
      documentationUrl: "https://drive.google.com/file/d/1TRyBCDzocTuHUdu3-X1FpQqhBTmlPu-j/view?usp=sharing",
      imageUrl: "/images/Fake-news-detection.png",
    },
    {
      title: "Assessment of Blast-Induced Effects",
      duration: "August 2024 – November 2024",
      institution: "VIT-AP University",
      category: "Machine Learning",
      description: "Advanced machine learning project for predicting Peak Particle Velocity (PPV) in mining operations to ensure structural safety and environmental compliance. Developed a hybrid ensemble model achieving R² = 0.974 with comprehensive web deployment using Flask.",
      detailedDescription: "This project addresses critical safety concerns in mining operations by predicting blast-induced ground vibrations. The solution combines multiple ML algorithms including Random Forest, XGBoost, and ElasticNet in an ensemble approach. The web application provides real-time PPV predictions with intuitive visualizations for mining engineers.",
      technologies: ["Python", "Scikit-learn", "Flask", "Random Forest", "XGBoost", "ElasticNet", "HTML/CSS", "JavaScript", "Bootstrap"],
      highlights: ["R² = 0.974 Accuracy", "Flask Web Application", "Mining Safety Application", "Hybrid Ensemble Model", "Real-time Predictions"],
      challenges: ["Complex geological data handling", "Ensemble model optimization", "Web application deployment", "Real-time prediction system"],
      outcomes: ["High-accuracy prediction model", "User-friendly web interface", "Practical mining application"],
      type: "ML",
      icon: "🌋",
      color: "from-orange-500 to-red-500",
      borderStyle: "border-t-4 border-t-orange-500 border-r-4 border-r-red-500 border-b-4 border-b-yellow-500 border-l-4 border-l-amber-500",
      featured: true,
      teamSize: 2,
      status: "Completed",
      githubUrl: "https://github.com/Vasifgithub/Assessment-of-Blast-Induced-Effects-Using-Machine-Learning-Methods",
      demoUrl: "#",
      documentationUrl: "https://drive.google.com/file/d/1zP0szwv62tiXFbymsXHkYnClSio34Ojo/view?usp=sharing",
      imageUrl: "/images/blast_methods.png",
    },
    {
      title: "Online Bike Showroom – BIKEZZ",
      duration: "Sept 2023 – Nov 2023",
      institution: "ETHNUS Internship",
      category: "Full Stack",
      description: "Comprehensive full-stack MERN application for bike rental management featuring JWT authentication, User and admin login, real-time booking system. Successfully reduced manual operations by 70% and improved customer experience significantly.",
      detailedDescription: "BIKEZZ is a complete bike rental platform built with modern web technologies. The application features user authentication, bike inventory management, booking system, and comprehensive admin controls by CRUD Operations.",
      technologies: ["MongoDB", "Express.js", "React.js", "Node.js", "JWT", "CSS3", "Bootstrap", "HTML5", "sJavaScript", "GitHub", "Vercel"],
      highlights: ["70% Efficiency Improvement", "Real-time Booking System", "User-Admin Login", "JWT Authentication", "Responsive Design"],
      challenges: ["Real-time data synchronization", "Payment gateway integration", "Scalable architecture design", "User experience optimization"],
      outcomes: ["Successful internship completion", "Live production deployment", "Positive user feedback", "Business process automation"],
      type: "MERN",
      icon: "🏍️",
      color: "from-blue-500 to-purple-500",
      borderStyle: "border-t-4 border-t-blue-500 border-r-4 border-r-purple-500 border-b-4 border-b-indigo-500 border-l-4 border-l-violet-500",
      featured: true,
      teamSize: 4,
      status: "Deployed",
      githubUrl: "#",
      demoUrl: "#",
      documentationUrl: "https://drive.google.com/file/d/1Uw7vpZOxJKl21BN0RNzs2eHyJdljJIe6/view?usp=sharing",
      imageUrl: "/images/Online-Bike-Showroom.jpg",
      frontendUrl: "https://github.com/Vasifgithub/Bikezzz_Frontend",
      backendUrl: "https://github.com/Vasifgithub/server-Bikezzz"
    },
    {
      title: "Health Monitoring System",
      duration: "June 2023 – August 2023",
      institution: "VIT-AP University",
      category: "IoT",
      description: "Innovative IoT-based health monitoring system using Arduino and ESP8266 for continuous tracking of vital signs including temperature, heart rate, SpO2, and ECG. Features cloud data transmission, real-time alerts, and comprehensive health analytics dashboard.",
      detailedDescription: "This comprehensive health monitoring solution combines hardware sensors with cloud computing to provide continuous health tracking. The system features multiple sensors for vital sign monitoring, wireless data transmission, cloud storage, real-time alerts via mobile notifications, and a web-based dashboard for health analytics and trend analysis.",
      technologies: ["Arduino", "ESP8266", "IoT Sensors",, "C", "ThingSpeak", "Telegram Bot"],
      highlights: ["Real-time Health Monitoring", "IoT Integration", "Cloud Dashboard", "Mobile Notifications", "Multiple Vital Signs", "24/7 Monitoring"],
      challenges: ["Sensor calibration and accuracy", "Wireless connectivity stability", "Power management optimization", "Data security implementation"],
      outcomes: ["Functional prototype developed", "Successful IoT integration", "Health data analytics platform", "Mobile alert system"],
      type: "IoT",
      icon: "❤️",
      color: "from-green-500 to-teal-500",
      borderStyle: "border-t-4 border-t-green-500 border-r-4 border-r-teal-500 border-b-4 border-b-emerald-500 border-l-4 border-l-cyan-500",
      teamSize: 3,
      status: "Prototype",
      githubUrl: "https://github.com/Vasifgithub/HEALTH_MONITORING_SYSTEM_USING_ARDUINO",
      demoUrl: "#",
      documentationUrl: "https://drive.google.com/file/d/1bbApSvOLURU8rheXaeUUkPXS28aTIYhG/view?usp=sharing",
      imageUrl: "/images/Health-Monitoring-system.jpg",
    },
    {
      title: "Infant Cry Classification System",
      duration: "January 2023 – April 2023",
      institution: "VIT-AP University",
      category: "AI/IoT",
      description: "Advanced AI-powered system using Raspberry Pi and Convolutional Neural Networks to classify infant cries and determine specific needs. Achieved 95% accuracy with integrated sensors, real-time processing, and intelligent parent notification system via Telegram.",
      detailedDescription: "This intelligent system addresses the challenge of understanding infant needs through cry analysis. Using advanced signal processing and deep learning, the system can differentiate between various types of infant cries (hunger, discomfort, sleepiness, etc.) and provide actionable insights to parents through automated notifications and recommendations.",
      technologies: ["Raspberry Pi", "Python", "CNN", "TensorFlow", "MFCC", "Telegram API", "Audio Processing", "Signal Processing"],
      highlights: ["95% Classification Accuracy", "Real-time Audio Processing", "Smart Parent Alerts", "CNN Deep Learning", "Telegram Integration"],
      challenges: ["Audio signal processing", "Real-time classification", "Edge computing optimization", "Parent notification system"],
      outcomes: ["High-accuracy classification model", "Real-time processing capability", "Practical parenting solution", "IoT-AI integration"],
      type: "AI/IoT",
      icon: "👶",
      color: "from-pink-500 to-rose-500",
      borderStyle: "border-t-4 border-t-pink-500 border-r-4 border-r-rose-500 border-b-4 border-b-fuchsia-500 border-l-4 border-l-purple-500",
      teamSize: 3,
      status: "Completed",
      githubUrl: "https://github.com/Aniruth2003/Infant-cry-classification",
      demoUrl: "#",
      documentationUrl: "https://drive.google.com/file/d/17ntqQkVMHLfJT2MvoVI4-HCxyMkxrPcJ/view?usp=sharing",
      imageUrl: "/images/infant-cry-system.jpg",
    },
    {
      title: "Portfolio Website",
      duration: "May 2025 – Present",
      institution: "Personal Project",
      category: "Web Development",
      description: "Modern, responsive portfolio website built with Next.js and Tailwind CSS, showcasing professional projects, skills, and achievements. Features smooth animations, dark mode, and optimized performance with a perfect Lighthouse score.",
      detailedDescription: "This portfolio website represents my professional identity as a developer, featuring a clean, modern design with interactive elements. Built with performance in mind, it achieves perfect scores in Lighthouse audits. The site includes sections for projects, skills, experience, and contact information, with responsive design that works flawlessly across all devices.",
      technologies: ["React", "Tailwind CSS","vite", "shadcn-ui", "Framer Motion", "TypeScript", "Vercel", "Responsive Design", "Dark Mode", "Lighthouse Optimization"],
      highlights: ["100% Lighthouse Score", "Responsive Design", "Dark Mode Support", "Smooth Animations", "SEO Optimized", "Vercel Deployment"],
      challenges: ["Performance optimization", "Responsive design implementation", "Animation smoothness", "SEO best practices"],
      outcomes: ["Professional online presence", "Showcase for projects and skills", "High-performance website", "Modern UI/UX implementation"],
      type: "Web Development",
      icon: "🌐",
      color: "from-indigo-500 to-blue-500",
      borderStyle: "border-t-4 border-t-indigo-500 border-r-4 border-r-blue-500 border-b-4 border-b-cyan-500 border-l-4 border-l-sky-500",
      teamSize: 1,
      status: "Live",
      githubUrl: "https://github.com/Vasifgithub/portfolio-website",
      demoUrl: "#",
      documentationUrl: "#",
      imageUrl: "/images/portfolio-website.jpg",
    }
  ];

  const categories = ['All', 'Research', 'Machine Learning', 'Full Stack', 'IoT', 'AI/IoT', 'Web Development'];
  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(p => 
        selectedCategory === 'Machine Learning' 
          ? p.category === 'Machine Learning' || p.type === 'ML'
          : p.category === selectedCategory
      );

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mb-6 shadow-lg transform transition-all hover:scale-105 hover:shadow-xl hover:rotate-3">
            <Target className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-4xl font-bold font-space text-white mb-4">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Innovative solutions spanning AI/ML research, full-stack development, and IoT applications with real-world impact
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              onClick={() => setSelectedCategory(category)}
              variant={selectedCategory === category ? "default" : "outline"}
              className={`px-6 py-2 rounded-full transition-all duration-300 font-medium ${
                selectedCategory === category 
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg hover:shadow-xl hover:brightness-110 hover:scale-105' 
                  : 'text-gray-300 border-gray-700 bg-gray-800 hover:bg-gray-700 hover:text-white hover:border-gray-600 hover:scale-105'
              }`}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <Card 
              key={index} 
              className={`
                relative h-full overflow-hidden 
                bg-gray-800 
                transition-all duration-500 
                hover:shadow-2xl hover:-translate-y-1
                ${project.featured ? 'ring-1 ring-blue-900/50' : ''}
                group
                ${project.borderStyle}
                hover:border-opacity-100
              `}
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-gray-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

              <CardHeader className="pb-4 pt-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className={`
                      p-3 rounded-xl bg-gradient-to-r ${project.color} 
                      text-white shadow-lg text-2xl 
                      transition-transform duration-500
                      group-hover:scale-110 group-hover:shadow-md
                    `}>
                      {project.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <CardTitle className="text-xl text-white leading-tight truncate">
                        {project.title}
                      </CardTitle>
                      <div className="flex flex-wrap items-center gap-2 mt-2">
                        <Badge className={`bg-gradient-to-r ${project.color} text-white border-0`}>
                          {project.type}
                        </Badge>
                        <Badge variant="outline" className="text-xs bg-gray-700 text-gray-300 border-gray-600">
                          {project.status}
                        </Badge>
                        <span className="text-sm text-gray-400 whitespace-nowrap">
                          {project.duration}
                        </span>
                      </div>
                    </div>
                  </div>
                  {project.featured && (
                    <Badge className="bg-yellow-900/30 text-yellow-400 border-yellow-800 shadow-sm group-hover:bg-yellow-900/40 transition-colors">
                      <Star className="w-3 h-3 mr-1" />
                      Featured
                    </Badge>
                  )}
                </div>
              </CardHeader>
              
              <CardContent className="space-y-6 pb-6">
                {/* Project description */}
                <div className="transition-all duration-500 group-hover:translate-x-1">
                  <p className="text-gray-300 leading-relaxed">
                    {project.description}
                  </p>
                </div>
                
                {/* Detailed description */}
                <div className="bg-gray-700/30 p-4 rounded-lg border border-gray-700 backdrop-blur-sm transition-all duration-500 group-hover:bg-gray-700/40 group-hover:shadow-md">
                  <h4 className="font-semibold text-white mb-2 flex items-center">
                    <FileText className="w-4 h-4 mr-2 text-blue-400" />
                    Project Details
                  </h4>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    {project.detailedDescription}
                  </p>
                </div>
                
                {/* Project image - Consistent size container */}
                <div className="overflow-hidden rounded-lg border border-gray-700 aspect-video bg-gray-900/50 flex items-center justify-center relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent z-10"></div>
                  <div className="absolute inset-0 flex items-center justify-center bg-gray-800">
                    <img
                      src={project.imageUrl}
                      alt={`${project.title} screenshot`}
                      className="w-full h-full object-contain p-1 transition-transform duration-500 group-hover:scale-105"
                      style={{
                        maxWidth: '100%',
                        maxHeight: '100%',
                        objectFit: 'contain',
                        backgroundColor: '#1f2937'
                      }}
                      onError={(e) => {
                        e.currentTarget.src = '/images/default-project.png';
                        e.currentTarget.className = 'w-full h-full object-cover';
                      }}
                    />
                  </div>
                </div>
                
                {/* Key Achievements */}
                <div className="transition-all duration-500 group-hover:translate-x-1">
                  <h4 className="font-semibold text-white mb-3 flex items-center">
                    <Award className="w-4 h-4 mr-2 text-blue-400" />
                    Key Achievements
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.highlights.map((highlight, idx) => (
                      <Badge 
                        key={idx} 
                        className="bg-green-900/30 text-green-400 hover:bg-green-900/40 px-3 py-1 border-green-800 transition-colors hover:scale-105"
                      >
                        {highlight}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                {/* Technologies */}
                <div className="transition-all duration-500 group-hover:translate-x-1">
                  <h4 className="font-semibold text-white mb-3 flex items-center">
                    <TrendingUp className="w-4 h-4 mr-2 text-purple-400" />
                    Technologies & Tools
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <Badge 
                        key={idx} 
                        variant="secondary" 
                        className="bg-blue-900/30 text-blue-400 px-3 py-1 border-blue-800 hover:bg-blue-900/40 transition-colors hover:scale-105"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Institution info */}
                <div className="flex items-center justify-between text-sm text-gray-400 bg-gray-700/30 p-3 rounded-lg border border-gray-700 backdrop-blur-sm transition-all duration-500 group-hover:bg-gray-700/40 group-hover:shadow-md">
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4 text-gray-500" />
                    <span>{project.institution}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="w-4 h-4 text-gray-500" />
                    <span>Team: {project.teamSize}</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 pt-4">
                  {project.title === "Online Bike Showroom – BIKEZZ" ? (
                    <>
                      <Button 
                        className="flex-1 bg-gradient-to-r from-blue-500 to-indigo-500 text-white shadow-md hover:shadow-lg hover:brightness-110 transition-all duration-300 transform hover:-translate-y-0.5 hover:scale-[1.02]"
                        onClick={() => window.open(project.frontendUrl, '_blank')}
                      >
                        <Github className="w-4 h-4 mr-2" />
                        Frontend Code
                      </Button>
                      
                      <Button 
                        className="flex-1 bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-md hover:shadow-lg hover:brightness-110 transition-all duration-300 transform hover:-translate-y-0.5 hover:scale-[1.02]"
                        onClick={() => window.open(project.backendUrl, '_blank')}
                      >
                        <Github className="w-4 h-4 mr-2" />
                        Backend Code
                      </Button>
                    </>
                  ) : (
                    <Button 
                      className={`flex-1 bg-gradient-to-r ${project.color} text-white shadow-md hover:shadow-lg hover:brightness-110 transition-all duration-300 transform hover:-translate-y-0.5 hover:scale-[1.02]`}
                      onClick={() => window.open(project.githubUrl, '_blank')}
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Source Code
                    </Button>
                  )}
                  
                  {/* Only show Documentation button if it's not the Portfolio Website */}
                  {project.title !== "Portfolio Website" && (
                    <Button 
                      variant="outline" 
                      className="flex-1 text-gray-300 border-gray-600 bg-gray-800 hover:bg-gray-700 hover:text-white hover:border-gray-500 transition-all duration-300 transform hover:-translate-y-0.5 hover:scale-[1.02]"
                      onClick={() => window.open(project.documentationUrl, '_blank')}
                    >
                      <FileText className="w-4 h-4 mr-2" />
                      Documentation
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View More Button */}
        <div className="mt-16 text-center">
          <Button 
            className="px-8 py-4 text-white font-medium bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 hover:scale-105 relative overflow-hidden group"
            onClick={() => window.open('https://github.com/Vasifgithub?tab=repositories', '_blank')}
          >
            <span className="relative z-10 flex items-center">
              View All Projects
              <ExternalLink className="w-4 h-4 ml-2" />
            </span>
            <span className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;