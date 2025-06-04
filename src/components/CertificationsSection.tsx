import React from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  ExternalLink,
  Award,
  Calendar,
  Shield,
  Code,
  Cloud,
  Database,
  Brain,
  Zap,
} from 'lucide-react';

const CertificationsSection = () => {
  const certifications = [
    {
      title: 'LLM Security Bootcamp',
      issuer: 'VIT-AP University & IIT Madras (Null Vijayawada)',
      date: 'June 2024',
      description:
        'Two-day intensive bootcamp on Large Language Model (LLM) security covering transformer models, GenAI on AWS, securing LLMs, MLOps best practices, and hands-on implementation with LangChain, LangGraph, and RAG for AI-powered chatbots.',
      type: 'AI Security',
      icon: <Shield className="w-8 h-8" />,
      color: 'from-indigo-500 to-violet-600',
      skills: [
        'LLM Security',
        'AWS GenAI',
        'Transformer Models',
        'LangChain/RAG',
        'MLOps Security'
      ],
      featured: true,
      verificationUrl: 'https://drive.google.com/file/d/1Vgq8TqwreX7m_hgsIAuBvV8kDtTurrn9/view?usp=sharing',
    },
    {
      title: 'Fake News Detection Research Publication',
      issuer: '(IJRTI)',
      date: 'April 2025',
      description:
        'Published comprehensive research comparing 7 AI/ML models for fake news detection, achieving 99.7% accuracy with XGBoost. Peer-reviewed publication demonstrating advanced research capabilities in International Journal for Research Trends and Innovation (IJRTI).',
      type: 'Publication',
      icon: <Brain className="w-8 h-8" />,
      color: 'from-indigo-500 to-violet-600', // Matching gradient
      skills: [
        'Research Methodology',
        'AI/ML Models',
        'Data Analysis',
        'Academic Writing',
        'flask integration'
      ],
      featured: true,
      verificationUrl:
        'https://drive.google.com/file/d/1TwJJCGP3zpRc7sKzVjQSLh9Pa4SxRr3k/view?usp=sharing',
    },
    {
      title: 'AWS Certified Cloud Practitioner',
      issuer: 'Amazon Web Services',
      date: 'January 2024',
      expiry: 'January 2027',
      description:
        'Comprehensive foundational understanding of AWS Cloud concepts, services, security, pricing, and support. Validates cloud fluency and foundational AWS knowledge.',
      type: 'Cloud Computing',
      icon: <Cloud className="w-6 h-6" />,
      color: 'from-orange-500 to-red-500',
      skills: [
        'AWS Services',
        'Cloud Architecture',
        'Security Practices',
        'Cost Optimization',
      ],
      featured: false,
      verificationUrl:
        'https://drive.google.com/file/d/1pnXEIYr8-j3qGIl-wzmtkh0acqueBEm8/view?usp=sharing',
    },
    {
      title: 'MERN Full Stack Development Intern',
      issuer: 'ETHNUS',
      date: 'Aug-Nov 2023',
      description: 'Completed a 4-month intensive training in MERN stack development, building a full-stack web application (Online Bike Showroom) using MongoDB, Express.js, React.js, and Node.js.',
      type: 'Internship',
      icon: <Brain className="w-6 h-6" />,
      color: 'from-purple-600 to-purple-800',
      skills: ['Web Development', 'Frontend Development', 'Teamwork', 'Git/GitHub'],
      verificationUrl: 'https://drive.google.com/file/d/1IikKk3H9EQZyqBdEo0_v6Xgbf7ZgVEvw/view?usp=sharing',
    },
    {
      title: 'AWS APAC Solutions Architecture Virtual Experience',
      issuer: 'Forage & Amazon Web Services',
      date: '2024',
      description:
        'Hands-on virtual experience in AWS solutions architecture, cloud design patterns, scalability planning, and cost optimization strategies for enterprise applications.',
      type: 'Cloud Architecture',
      icon: <Shield className="w-6 h-6" />,
      color: 'from-blue-500 to-cyan-500',
      skills: ['Solutions Architecture'],
      verificationUrl:
        'https://drive.google.com/file/d/1RJLtvsTprPjKlOMkgvgG5tZ3Hpbz_nAT/view?usp=sharing',
    },
    {
      title: 'Accenture Developer and Technology Virtual Experience',
      issuer: 'Forage & Accenture',
      date: '2024',
      description:
        'Comprehensive virtual experience in software development lifecycle, technology consulting, agile methodologies, and client engagement strategies.',
      type: 'Software Development',
      icon: <Code className="w-6 h-6" />,
      color: 'from-green-500 to-teal-500',
      skills: ['SDLC', 'Agile', 'Technology Consulting'],
      verificationUrl:
        'https://drive.google.com/file/d/159ZJSPhKkaSNAEDoxyNNaamzTOxPIZ2R/view?usp=sharing',
    },
    {
      title: 'Career Essentials in Generative AI',
      issuer: 'Microsoft & LinkedIn Learning',
      date: '2024',
      description:
        'In-depth understanding of generative AI technologies, prompt engineering, AI ethics, and practical applications in business and development contexts.',
      type: 'Artificial Intelligence',
      icon: <Brain className="w-6 h-6" />,
      color: 'from-pink-500 to-rose-500',
      skills: ['Generative AI', 'Prompt Engineering', 'AI Ethics', 'Generative AI Tools'],
      verificationUrl:
        'https://drive.google.com/file/d/1_4V2brwcqZETvBoFv2IsmdwZk6397EHE/view?usp=sharing',
    },
    {
      title: 'SQL for Data Analysis - Generate insights With Queries',
      issuer: 'SkillEcted',
      date: '2024',
      description:
        'Mastery of MySQL, including DQL, DML, DDL, DCL, TCL and database management systems (DBMS) for effective data-driven decision making.',
      type: 'Data Analysis',
      icon: <Database className="w-6 h-6" />,
      color: 'from-amber-500 to-orange-500',
      skills: ['MYSQL', 'DBMS'],
      verificationUrl:
        'https://drive.google.com/file/d/1Qz6jCSlYB7551etUFTiC0q2mDj5vgjag/view?usp=sharing',
    },
    {
      title: 'GitHub and GitHub Copilot Fundamentals',
      issuer: 'Microsoft Learn',
      date: '2024',
      description:
        'Version control mastery with Git and GitHub, AI-assisted development with GitHub Copilot, and collaborative software development workflows.',
      type: 'Development Tools',
      icon: <Zap className="w-6 h-6" />,
      color: 'from-amber-400 to-amber-600',
      skills: ['Git/GitHub', 'GitHub Copilot', 'Collaboration'],
      verificationUrl:
        'https://drive.google.com/file/d/1wXmfmDjZMkRxDya37dUbhLK9Id-IxT1W/view?usp=sharing',
    },
  ];

  const featuredCerts = certifications.filter((cert) => cert.featured);
  const otherCerts = certifications.filter((cert) => !cert.featured);

  return (
    <section
      id="certifications"
      className="py-20 bg-gradient-to-br from-gray-900 to-gray-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-full mb-6">
            <Award className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-4xl font-bold font-space text-white mb-4">
            Certifications & <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">Achievements</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-green-500 to-blue-500 rounded-full mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Industry-recognized certifications and achievements demonstrating
            expertise across cloud computing, AI/ML, and software development
          </p>
        </div>

        {/* Featured Certifications */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-white mb-8">
            🏆 Featured Achievements
          </h3>
          <div className="grid lg:grid-cols-2 gap-8">
            {featuredCerts.map((cert, index) => (
              <div
                key={index}
                className={`p-[2px] rounded-2xl bg-gradient-to-r ${cert.color} shadow-xl hover:scale-[1.01] transition-transform duration-300`}
              >
                <Card className="rounded-2xl border-0 bg-gray-800">
                  <div className={`h-2 bg-gradient-to-r ${cert.color}`}></div>
                  <CardHeader className="pb-4">
                    <div className="flex items-start space-x-4">
                      <div
                        className={`p-4 rounded-2xl bg-gradient-to-r ${cert.color} text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}
                      >
                        {cert.icon}
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-xl text-white leading-tight mb-3">
                          {cert.title}
                        </CardTitle>
                        <div className="flex items-center space-x-3 mb-3">
                          <Badge
                            className={`bg-gradient-to-r ${cert.color} text-white border-0`}
                          >
                            {cert.type}
                          </Badge>
                          <span className="text-sm text-gray-300 font-medium">
                            {cert.issuer}
                          </span>
                        </div>
                        <div className="flex items-center space-x-1 text-sm text-gray-400 mb-2">
                          <Calendar className="w-4 h-4" />
                          <span>{cert.date}</span>
                          {cert.expiry && <span>• Valid until {cert.expiry}</span>}
                        </div>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-6">
                    <p className="text-gray-300 leading-relaxed">
                      {cert.description}
                    </p>

                    <div>
                      <h4 className="font-semibold text-white mb-3">
                        Key Skills Validated
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {cert.skills.map((skill, idx) => (
                          <Badge
                            key={idx}
                            variant="secondary"
                            className="bg-blue-900/30 text-blue-300 px-3 py-1"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <Button
                      className={`w-full bg-gradient-to-r ${cert.color} hover:opacity-90 text-white shadow-lg`}
                      onClick={() => window.open(cert.verificationUrl, '_blank')}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Certificate
                    </Button>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Certifications */}
        <div className="my-12 px-4 md:px-8 lg:px-12">
          <h3 className="text-3xl font-extrabold text-center text-white mb-10 tracking-tight">
            📜 Additional Certifications
          </h3>

          <div className="grid gap-10 md:grid-cols-3 lg:grid-cols-2">
            {otherCerts.map((cert, index) => (
              <div
                key={index}
                className={`group rounded-3xl p-[2.5px] bg-gradient-to-r ${cert.color} shadow-lg hover:shadow-2xl transition-shadow duration-400 ease-in-out transform hover:scale-105`}
              >
                <Card className="bg-gray-800 rounded-3xl shadow-none border-0">
                  <CardContent className="p-8 flex flex-col justify-between space-y-6">
                    <div className="text-center">
                      <div
                        className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-r ${cert.color} text-white mb-6 shadow-md group-hover:scale-110 transition-transform duration-300`}
                      >
                        {cert.icon}
                      </div>
                      <h4 className="text-xl font-semibold text-white mb-2 leading-snug">
                        {cert.title}
                      </h4>
                      <div className="space-y-1">
                        <Badge
                          className={`bg-gradient-to-r ${cert.color} text-white border-0 font-medium inline-block px-3 py-1 rounded-full text-xs`}
                        >
                          {cert.type}
                        </Badge>
                        <div className="text-sm text-gray-300 font-medium mt-2">
                          {cert.issuer}
                        </div>
                        <time
                          dateTime={new Date(cert.date).toISOString()}
                          className="text-sm text-gray-400 block mt-1"
                        >
                          {cert.date}
                        </time>
                      </div>
                    </div>

                    <p className="text-sm text-gray-300 text-center leading-relaxed px-4">
                      {cert.description}
                    </p>

                    <div>
                      <h5 className="text-white font-semibold text-sm mb-3 text-center tracking-wide uppercase">
                        Skills
                      </h5>
                      <div className="flex flex-wrap gap-2 justify-center">
                        {cert.skills.map((skill, idx) => (
                          <Badge
                            key={idx}
                            variant="outline"
                            className="text-xs px-3 py-1 rounded-full hover:bg-gray-700 transition-colors border-gray-600 text-gray-300"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <Button
                      size="sm"
                      className={`w-full mt-4 text-white bg-gradient-to-r ${cert.color} hover:opacity-90 transition-opacity duration-300 shadow-md flex items-center justify-center gap-2 rounded-full font-semibold`}
                      onClick={() =>
                        window.open(cert.verificationUrl, '_blank', 'noopener,noreferrer')
                      }
                    >
                      <Award className="w-5 h-5" />
                      View Certificate
                    </Button>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;