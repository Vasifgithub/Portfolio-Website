import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code, Globe, Brain, Cloud, Cpu, Users } from 'lucide-react';

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="w-8 h-8" />,
      emoji: "💻",
      skills: ["Java", "Python", "JavaScript", "R", "SQL"],
      cardBg: "bg-gradient-to-br from-blue-900/90 via-blue-900/50 to-blue-800/80",
      iconBg: "bg-gradient-to-br from-blue-500 to-blue-600",
      borderColor: "border-blue-700/40 hover:border-blue-500/60",
      badgeColor: "bg-blue-800/80 text-blue-100 border-blue-700/40 hover:bg-blue-700/80"
    },
    {
      title: "Web Development",
      icon: <Globe className="w-8 h-8" />,
      emoji: "🌐",
      skills: ["HTML5", "CSS3", "Bootstrap", "React.js", "Node.js", "Express.js", "MongoDB", "Flask"],
      cardBg: "bg-gradient-to-br from-emerald-900/90 via-emerald-900/50 to-emerald-800/80",
      iconBg: "bg-gradient-to-br from-emerald-500 to-emerald-600",
      borderColor: "border-emerald-700/40 hover:border-emerald-500/60",
      badgeColor: "bg-emerald-800/80 text-emerald-100 border-emerald-700/40 hover:bg-emerald-700/80"
    },
    {
      title: "AI/ML & Data Science",
      icon: <Brain className="w-8 h-8" />,
      emoji: "🤖",
      skills: ["Machine Learning", "Deep Learning", "NLP", "Generative AI", "TensorFlow", "Scikit-learn", "CNN", "LSTM", "XGBoost"],
      cardBg: "bg-gradient-to-br from-purple-900/90 via-purple-900/50 to-purple-800/80",
      iconBg: "bg-gradient-to-br from-purple-500 to-purple-600",
      borderColor: "border-purple-700/40 hover:border-purple-500/60",
      badgeColor: "bg-purple-800/80 text-purple-100 border-purple-700/40 hover:bg-purple-700/80"
    },
    {
      title: "Cloud Computing",
      icon: <Cloud className="w-8 h-8" />,
      emoji: "☁️",
      skills: ["AWS", "Cloud Computing", "Serverless", "Lambda", "S3", "DynamoDB", "EC2"],
      cardBg: "bg-gradient-to-br from-amber-900/90 via-amber-900/50 to-amber-800/80",
      iconBg: "bg-gradient-to-br from-amber-500 to-amber-600",
      borderColor: "border-amber-700/40 hover:border-amber-500/60",
      badgeColor: "bg-amber-800/80 text-amber-100 border-amber-700/40 hover:bg-amber-700/80"
    },
    {
      title: "Tools & IoT",
      icon: <Cpu className="w-8 h-8" />,
      emoji: "🔧",
      skills: ["GitHub", "Git", "VS Code", "Google Colab", "MySQL", "Workbench", "Jupyter Notebook", "Vercel", "Render", "Arduino", "Raspberry"],
      cardBg: "bg-gradient-to-br from-indigo-900/90 via-indigo-900/50 to-indigo-800/80",
      iconBg: "bg-gradient-to-br from-indigo-500 to-indigo-600",
      borderColor: "border-indigo-700/40 hover:border-indigo-500/60",
      badgeColor: "bg-indigo-800/80 text-indigo-100 border-indigo-700/40 hover:bg-indigo-700/80"
    },
    {
      title: "Soft Skills",
      icon: <Users className="w-8 h-8" />,
      emoji: "🎯",
      skills: ["Teamwork", "Presentation", "Research", "Ethics", "Problem Solving", "Leadership"],
      cardBg: "bg-gradient-to-br from-teal-900/90 via-teal-900/50 to-teal-800/80",
      iconBg: "bg-gradient-to-br from-teal-500 to-teal-600",
      borderColor: "border-teal-700/40 hover:border-teal-500/60",
      badgeColor: "bg-teal-800/80 text-teal-100 border-teal-700/40 hover:bg-teal-700/80"
    }
  ];

  return (
    <section id="skills" className="py-24 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-5xl font-bold font-space mb-4">
            Technical <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 rounded-full mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A comprehensive toolkit spanning full-stack development, AI/ML, cloud computing, and emerging technologies
          </p>
        </div>

        {/* Skills Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <Card 
              key={index} 
              className={`group border ${category.borderColor} rounded-2xl transition-all duration-300 shadow-xl hover:shadow-2xl ${category.cardBg} backdrop-blur-sm hover:backdrop-blur overflow-hidden transform hover:-translate-y-1`}
            >
              <CardContent className="p-0">
                <div className="p-6 flex flex-col h-full">
                  <div className="text-center mb-6">
                    <div className="relative inline-block mb-4">
                      <div className={`p-4 ${category.iconBg} rounded-xl text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        {category.icon}
                      </div>
                      <div className="absolute -top-2 -right-2 text-2xl bg-gray-900/80 border border-gray-700/50 rounded-full p-1 shadow-lg backdrop-blur-sm">
                        {category.emoji}
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-white/90 group-hover:text-white transition-colors duration-300">
                      {category.title}
                    </h3>
                  </div>
                  <div className="flex flex-wrap justify-center gap-2 flex-grow">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge
                        key={skillIndex}
                        className={`${category.badgeColor} px-3 py-1 text-sm font-medium rounded-full transition duration-300 shadow-sm hover:shadow-md hover:scale-105`}
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;