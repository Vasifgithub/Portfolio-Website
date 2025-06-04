import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, Linkedin, Github, Phone, Download, MessageCircle, Languages, Home, MessageSquare } from 'lucide-react';

const ContactSection = () => {
  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      value: "vasif951521@gmail.com",
      description: "Preferred contact for job opportunities",
      link: "mailto:vasif951521@gmail.com",
      color: "bg-gradient-to-br from-red-500 to-rose-500"
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: "Phone",
      value: "+918125725362",
      description: "Available for screening calls",
      link: "tel:+918125725362",
      color: "bg-gradient-to-br from-emerald-500 to-teal-500"
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      label: "LinkedIn",
      value: "vasif-uravakonda",
      description: "Professional networking",
      link: "https://linkedin.com/in/vasif-uravakonda",
      color: "bg-gradient-to-br from-blue-600 to-indigo-600"
    },
    {
      icon: <Github className="w-5 h-5" />,
      label: "GitHub",
      value: "Vasifgithub",
      description: "Technical projects & code",
      link: "https://github.com/Vasifgithub",
      color: "bg-gradient-to-br from-gray-700 to-gray-900"
    }
  ];

  const languages = [
    { language: "English", proficiency: "Professional", level: 95, icon: <MessageCircle className="w-5 h-5 text-white" /> },
    { language: "Hindi", proficiency: "Working", level: 85, icon: <MessageSquare className="w-5 h-5 text-white" /> },
    { language: "Telugu", proficiency: "Native", level: 100, icon: <Home className="w-5 h-5 text-white" /> }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mb-6 shadow-lg">
            <MessageCircle className="w-7 h-7 text-white" />
          </div>
          <h2 className="text-4xl font-bold text-white mb-4">
            Get In <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mb-6"></div>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            I'm actively exploring new opportunities in software engineering, Web Development and AI/ML. 
            Reach out for collaborations or just to say hello!
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1 space-y-6">
            {contactInfo.map((info, index) => (
              <a 
                key={index} 
                href={info.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="block group"
              >
                <Card className="border-0 bg-gray-800 hover:bg-gray-750 transition-all duration-300 shadow-md hover:shadow-lg">
                  <CardContent className="p-5">
                    <div className="flex items-start space-x-4">
                      <div className={`flex-shrink-0 p-3 rounded-lg ${info.color} text-white shadow-md`}>
                        {info.icon}
                      </div>
                      <div>
                        <h3 className="text-sm font-medium text-gray-300">{info.label}</h3>
                        <p className="text-white font-medium mt-1">{info.value}</p>
                        <p className="text-xs text-gray-400 mt-1.5">{info.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </a>
            ))}
          </div>

          <div className="lg:col-span-2 space-y-6">
            <Card className="border-0 bg-gray-800 shadow-lg">
              <CardHeader className="pb-3">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-blue-600/10 rounded-lg">
                    <Languages className="w-5 h-5 text-blue-400" />
                  </div>
                  <CardTitle className="text-lg text-white">Language Proficiency</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="pt-0 space-y-5">
                {languages.map((lang, index) => (
                  <div key={index} className="space-y-2.5">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="p-1.5 bg-blue-600/20 rounded-lg">
                          {lang.icon}
                        </div>
                        <div>
                          <h4 className="font-medium text-white">{lang.language}</h4>
                          <p className="text-xs text-gray-400">{lang.proficiency} Proficiency</p>
                        </div>
                      </div>
                      <span className="text-sm font-medium text-blue-400">{lang.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                      <div 
                        className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-700"
                        style={{ width: `${lang.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-2 gap-4 items-stretch">
              {/* Download Resume Card */}
              <Card className="border-0 bg-gradient-to-br from-blue-700/90 to-indigo-700/90 shadow-lg h-full">
                <CardContent className="p-4 flex flex-col h-full">
                  <div className="text-center">
                    <div className="p-2 bg-white/10 rounded-full mb-2 inline-flex">
                      <Download className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-sm font-semibold text-white mb-1">Download Resume</h3>
                    <p className="text-blue-100 text-xs mb-3">
                      Get my complete professional profile with work history and skills
                    </p>
                  </div>
                  <a
                    href="https://drive.google.com/file/d/1rl1JiybDdPrDqbFDKU1Iw6XRE0xw9aSZ/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto w-full inline-flex items-center justify-center bg-white text-blue-700 hover:bg-gray-50 text-xs font-medium py-2 px-4 rounded-md transition-colors shadow-sm"
                  >
                    <Download className="w-3 h-3 mr-1" />
                    Download PDF
                  </a>
                </CardContent>
              </Card>

              {/* Let's Connect Card */}
              <Card className="border-0 bg-gradient-to-br from-purple-700/90 to-violet-700/90 shadow-lg h-full">
                <CardContent className="p-4 flex flex-col h-full">
                  <div className="text-center">
                    <div className="p-2 bg-white/10 rounded-full mb-2 inline-flex">
                      <MessageCircle className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-sm font-semibold text-white mb-1">Let's Connect</h3>
                    <p className="text-purple-100 text-xs mb-3">
                      Interested in working together? Send me a message!
                    </p>
                  </div>
                  <a
                    href="mailto:vasif951521@gmail.com"
                    className="mt-auto w-full inline-flex items-center justify-center bg-white text-purple-700 hover:bg-gray-50 text-xs font-medium py-2 px-4 rounded-md transition-colors shadow-sm"
                  >
                    <Mail className="w-3 h-3 mr-1" />
                    Contact Me
                  </a>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;