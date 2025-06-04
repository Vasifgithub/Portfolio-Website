import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap, Briefcase, Award, Globe, Code, Target, Heart, MapPin, MoveLeft } from 'lucide-react';

const AboutSection = () => {
  const highlights = [
    {
      title: "Education",
      content: (
        <>
          B.Tech in Computer Science and Engineering with AI/ML specialization at VIT-AP University - Amaravati 
          <br />
          <strong>2021-2025</strong>
        </>
      ),
      icon: <GraduationCap className="w-8 h-8" />,
      color: "from-blue-600 to-cyan-600",
      bgColor: "from-blue-900 to-cyan-900"
    },
    {
      title: "Experience",
      content: (
        <>
          MERN Full Stack Development Intern at ETHNUS
          <br />
          <strong>(Aug-Nov 2023)</strong>
        </>
      ),
      icon: <Briefcase className="w-8 h-8" />,
      color: "from-green-600 to-emerald-600",
      bgColor: "from-green-900 to-emerald-900"
    },
    {
      title: "Certifications",
      content: "AWS Certified Cloud Practitioner & Published AI Researcher",
      icon: <Award className="w-8 h-8" />,
      color: "from-amber-500 to-yellow-500",
      bgColor: "from-amber-900 to-yellow-900"
    },
    {
      title: "Languages",
      content: "English, Hindi (Professional) | Telugu (Native)",
      icon: <Globe className="w-8 h-8" />,
      color: "from-purple-600 to-pink-600",
      bgColor: "from-purple-900 to-pink-900"
    },
    {
      title: "Location",
      content: "Ananthapur, Andhra Pradesh, India",
      icon: <MapPin className="w-8 h-8" />,
      color: "from-emerald-500 to-blue-500",
      bgColor: "from-emerald-900 to-blue-900"
    }
  ];

  const passions = [
    { icon: "🤖", title: "AI & ML", desc: "Deep Learning, NLP" },
    { icon: "☁️", title: "Cloud", desc: "AWS, Serverless" },
    { icon: "🌐", title: "Web Dev", desc: "MERN, React, Node" },
    { icon: "🔬", title: "Research", desc: "AI-based Papers" }
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

        <div className="grid lg:grid-cols-2 gap-16 items-start mb-16">
          {/* My Journey */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-blue-900 to-purple-900 rounded-2xl p-8 shadow-xl border border-blue-800">
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-3 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">My Journey</h3>
              </div>
              <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
                <p className="text-left">
                  I'm a passionate software engineer with a strong foundation in Java programming and hands-on experience in MERN Full Stack Development. During my academic journey at VIT-AP University, I've worked on projects like Fake News Detection using AI and Infant Cry Classification using Raspberry Pi, Assesment of blast induced effects using ML and Online-Bike Showroom using MERN.
                </p>
                <p className="text-left">
                  These experiences helped me understand the full development lifecycle and enhanced my skills in web development and AI. I'm AWS Cloud Practitioner certified and completed a MERN Stack internship at ETHNUS.
                </p>
                <p className="text-left">
                  I enjoy collaborating in teams, solving problems creatively, and building user-centric solutions. Whether it's designing a responsive front end or built machine learning models, I love bringing ideas to life through code.
                </p>
                <p className="text-left">
                  My goal is to contribute to dynamic tech teams where I can keep learning and work on impactful projects that make a difference.
                </p>
              </div>
            </div>
          </div>

          {/* Right side highlights */}
          <div className="grid gap-6">
            {highlights.map((item, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-500 border-0 overflow-hidden">
                <CardContent className={`p-0 bg-gradient-to-br ${item.bgColor}`}>
                  <div className="p-6 relative">
                    <div className="flex items-start space-x-4">
                      <div className={`p-4 bg-gradient-to-br ${item.color} rounded-2xl text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        {item.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                        <p className="text-gray-300 leading-relaxed">{item.content}</p>
                      </div>
                    </div>
                    <div className="absolute top-0 right-0 w-20 h-20 bg-white/5 rounded-full -translate-y-4 translate-x-4"></div>
                  </div>
                </CardContent>
              </Card>
            ))}
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
                  className="flex-1 p-4 bg-gradient-to-br from-gray-800 to-gray-700 rounded-xl border border-gray-600 text-center hover:shadow-md transition-all duration-300"
                >
                  <div className="text-3xl mb-2">{passion.icon}</div>
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
              { icon: <Globe className="w-8 h-8 text-purple-400" />, label: "Languages Known", value: "3" }
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