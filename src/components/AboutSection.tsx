import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap, Briefcase, Award, Code, Target, Heart, BookOpen, School, Trophy, Star } from 'lucide-react';

const AboutSection = () => {
  const passions = [
    { icon: "🤖", title: "AI & ML", desc: "Deep Learning, NLP" },
    { icon: "☁️", title: "Cloud", desc: "AWS, Serverless" },
    { icon: "🌐", title: "Web Dev", desc: "MERN, React, Node" },
    { icon: "🔬", title: "Research", desc: "AI-based Papers" }
  ];

  const educationTimeline = [
    {
      icon: <GraduationCap className="w-5 h-5 text-blue-400" />,
      period: "2021-2025",
      title: "B.Tech in CSE - AIML",
      institution: "VIT-AP University, Amaravati",
      performance: "CGPA: 8.18",
      color: "from-blue-500 to-cyan-500",
      highlight: true
    },
    {
      icon: <School className="w-5 h-5 text-purple-400" />,
      period: "2019-2021",
      title: "Intermediate (MPC)",
      institution: "Narayana Junior College",
      performance: "Percentage: 94.7%",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <BookOpen className="w-5 h-5 text-green-400" />,
      period: "2018-2019",
      title: "10th Standard",
      institution: "Sree Sarada Vidya Mandir",
      performance: "CGPA: 9.7",
      color: "from-green-500 to-teal-500"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold font-space text-white mb-4">
            About <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Passionate about solving real-world problems through innovative technology solutions
          </p>
        </div>

        {/* Balanced height cards */}
        <div className="grid lg:grid-cols-2 gap-16 items-stretch mb-16">
          {/* My Journey - condensed content */}
          <div className="h-full">
            <div className="bg-gradient-to-br from-blue-900 to-purple-900 rounded-2xl p-6 shadow-xl border border-blue-800 h-full flex flex-col">
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-3 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">My Journey</h3>
              </div>
              <div className="space-y-4 text-base text-gray-300 leading-normal text-justify flex-grow">
                <p>
                  I'm a passionate Software Engineer with a strong foundation in Java, Mysql and hands-on experience in MERN Full Stack Development. At VIT-AP University, I’ve worked on projects like Fake News Detection using AI, Infant Cry Classification with Raspberry Pi, Blast Impact Assessment using ML, and an Online Bike Showroom using MERN. I'm AWS Cloud Practitioner certified and completed a MERN Stack internship at ETHNUS. I enjoy collaborating in teams, solving real-world problems, and building user-focused web and AI solutions. I'm eager to contribute to dynamic tech teams and grow through impactful projects.
                </p>
              </div>
            </div>
          </div>

          {/* Education Card */}
          <div className="h-full">
            <Card className="group hover:shadow-2xl transition-all duration-500 border-0 overflow-hidden h-full">
              <CardContent className="p-0 bg-gradient-to-br from-blue-900 to-purple-900 h-full">
                <div className="p-6 relative h-full flex flex-col">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <GraduationCap className="w-6 h-6" />
                    </div>
                    <div className="flex-1 flex flex-col h-full">
                      <h3 className="text-xl font-bold text-white mb-4">Education Journey</h3>
                      
                      <div className="relative pl-6 flex-grow">
                        {/* Timeline connector - spans full height */}
                        <div className="absolute left-5 top-0.5 bottom-0.5 w-0.5 bg-gradient-to-b from-blue-500 to-cyan-500"></div>
                        
                        <div className="space-y-5 h-full">
                          {educationTimeline.map((item, index) => (
                            <div key={index} className="relative flex items-start pb-4 last:pb-0">
                              {/* Timeline dot */}
                              <div className={`absolute left-0 w-4 h-4 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center -translate-x-1/2 z-10`}>
                                <div className="bg-white rounded-full w-1 h-1"></div>
                              </div>
                              
                              {/* Timeline content */}
                              <div className="ml-6 w-full">
                                <div className="flex justify-between items-start">
                                  <div>
                                    <div className="flex items-start">
                                      <div className="mr-2">{item.icon}</div>
                                      <div>
                                        <h4 className="text-base font-bold text-white">
                                          {item.title}
                                        </h4>
                                        <p className="text-cyan-300 text-sm mt-1">{item.institution}</p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="flex items-center bg-blue-800/30 px-2 py-1 rounded-full">
                                    <span className="text-xs text-cyan-300 font-medium">{item.period}</span>
                                  </div>
                                </div>
                                
                                {/* Performance metric */}
                                <div className="mt-2 flex items-center">
                                  <Trophy className="w-4 h-4 text-yellow-400 mr-1" />
                                  <span className="text-sm font-medium text-yellow-300">{item.performance}</span>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Decorative elements */}
                  <div className="absolute top-0 right-0 w-16 h-16 bg-white/5 rounded-full -translate-y-4 translate-x-4"></div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Passion Cards */}
        <div className="w-full bg-gradient-to-br from-gray-800 to-gray-900 px-4 sm:px-10 lg:px-20 py-10">
          <div className="max-w-full rounded-2xl shadow-xl border border-gray-700 p-8">
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-3 bg-gradient-to-br from-red-500 to-pink-500 rounded-xl">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white">What I'm Passionate About</h3>
            </div>
            <div className="flex flex-col md:flex-row gap-4">
              {passions.map((passion, index) => (
                <div
                  key={index}
                  className="flex-1 p-4 bg-gradient-to-br from-gray-800 to-gray-700 rounded-xl border border-gray-600 text-center hover:shadow-md transition-all duration-300 group"
                >
                  <div className="text-3xl mb-2 group-hover:scale-125 transition-transform duration-300">{passion.icon}</div>
                  <h4 className="font-semibold text-white mb-1">{passion.title}</h4>
                  <p className="text-sm text-gray-300">{passion.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { icon: <Code className="w-8 h-8 text-blue-400" />, label: "publications", value: "1" },
              { icon: <Briefcase className="w-8 h-8 text-green-400" />, label: "Projects Completed", value: "5+" },
              { icon: <Award className="w-8 h-8 text-yellow-400" />, label: "Certifications", value: "8+" },
              { icon: <Star className="w-8 h-8 text-purple-400" />, label: "Lanuages Known", value: "3" }
            ].map(({ icon, label, value }, i) => (
              <div
                key={i}
                className="flex flex-col items-center p-6 bg-gray-800 rounded-xl shadow hover:shadow-lg transition-shadow duration-300"
              >
                {icon}
                <h4 className="text-3xl font-bold mt-3 text-white">{value}</h4>
                <p className="text-gray-300 mt-1">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
