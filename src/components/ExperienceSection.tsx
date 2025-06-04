import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Briefcase, Calendar, Globe, Hammer, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ExperienceSection = () => {
  const experiences = [
    {
      company: "ETHNUS",
      title: "MERN Full Stack Intern",
      type: "Internship",
      duration: "Aug 2023 – Nov 2023 · 4 mos",
      location: "Remote",
      description: [
        "Completed a 4-month intensive training in MERN stack development, completing 34 hands-on tasks.",
        "Built a full-stack web application (Online Bike Showroom) using MongoDB, Express.js, React.js, and Node.js.",
        "Designed a responsive UI with React.js, improving user retention by 30% and reducing load time by 20%.",
        "Led a team of 4 students in a collaborative group project, solving real-world development challenges."
      ],
      technologies: [
        "MongoDB", "Express.js", "React.js", "Node.js", "HTML", "CSS", "Bootstrap", "JavaScript", "GitHub", "Teamwork"
      ],
      certificate: "https://drive.google.com/file/d/1IikKk3H9EQZyqBdEo0_v6Xgbf7ZgVEvw/view?usp=sharing"
    },
  ];

  return (
    <section id="experience" className="py-20 bg-gradient-to-b from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-tr from-green-500 to-blue-500 rounded-full shadow-lg mb-6">
            <Briefcase className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-4xl font-extrabold text-white font-space mb-2">
            Experience & <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">Internships</span>
          </h2>
          <div className="w-20 h-1 mx-auto bg-gradient-to-r from-green-400 to-blue-500 rounded-full mb-4"></div>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Real-world experience in full-stack development, team leadership, and project execution.
          </p>
        </div>

        {/* Cards */}
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-gradient-to-tr from-green-400 via-blue-500 to-purple-500 p-[2px] rounded-2xl shadow-2xl transition-transform duration-300 hover:scale-[1.01]"
            >
              <Card className="rounded-[14px] border-0 bg-[#1e293b] text-white shadow-inner">
                <CardHeader className="pb-6">
                  <div className="flex items-start justify-between mb-4">
                    {/* Left: Icon + Title + Badge */}
                    <div className="flex items-center space-x-4">
                      <div className="p-3 rounded-xl bg-gradient-to-r from-green-900 to-blue-900">
                        <Hammer className="w-6 h-6 text-green-400" />
                      </div>
                      <div className="flex flex-col">
                        <Badge className="bg-blue-800 text-blue-100 font-semibold px-2 py-1 rounded-full w-fit">{exp.type}</Badge>
                        <h3 className="text-lg font-semibold text-white mt-1">{exp.title}</h3>
                      </div>
                    </div>

                    {/* Right: Duration & Location */}
                    <div className="text-right text-sm text-gray-400 space-y-1">
                      <div className="flex items-center justify-end">
                        <Calendar className="w-4 h-4 mr-1 text-blue-400" />
                        {exp.duration}
                      </div>
                      <div className="flex items-center justify-end">
                        <Globe className="w-4 h-4 mr-1 text-green-400" />
                        {exp.location}
                      </div>
                    </div>
                  </div>

                  {/* Company Name */}
                  <CardTitle className="text-xl font-semibold text-white tracking-tight">
                    {exp.company}
                  </CardTitle>
                </CardHeader>

                <CardContent className="space-y-6">
                  {/* Bullet List */}
                  <div className="space-y-2 text-gray-300 text-base leading-relaxed">
                    {exp.description.map((point, idx) => (
                      <div key={idx} className="flex items-start">
                        <span className="text-green-400 mt-1 mr-2">•</span>
                        <p>{point}</p>
                      </div>
                    ))}
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="text-md font-semibold text-white mb-2">Technologies & Tools</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, idx) => (
                        <Badge
                          key={idx}
                          variant="secondary"
                          className="bg-green-900 text-green-200 border border-green-700 px-3 py-1 text-sm rounded-full"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Certificate Button */}
                  {exp.certificate && (
                    <div className="pt-4">
                      <a href={exp.certificate} target="_blank" rel="noopener noreferrer">
                        <Button className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white shadow-lg transition-all duration-300">
                          <FileText className="w-4 h-4 mr-2" />
                          View Certificate
                        </Button>
                      </a>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;