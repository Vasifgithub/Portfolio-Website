
import React from 'react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { 
  Mail, 
  MapPin, 
  Linkedin, 
  Github, 
  Phone, 
  Download,
  Heart,
  ExternalLink,
  Code,
  Briefcase,
  GraduationCap,
  Award
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'About Me', href: '#about', icon: <GraduationCap className="w-4 h-4" /> },
    { label: 'Skills', href: '#skills', icon: <Code className="w-4 h-4" /> },
    { label: 'Projects', href: '#projects', icon: <Briefcase className="w-4 h-4" /> },
    { label: 'Publications', href: '#publications', icon: <Award className="w-4 h-4" /> },
    { label: 'Certifications', href: '#certifications', icon: <Award className="w-4 h-4" /> },
    { label: 'Contact', href: '#contact', icon: <Mail className="w-4 h-4" /> }
  ];

  const socialLinks = [
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com/in/vasif-uravakonda',
      icon: <Linkedin className="w-5 h-5" />,
      color: 'hover:text-blue-600',
      followers: '500+'
    },
    {
      name: 'GitHub',
      href: 'https://github.com/Vasifgithub',
      icon: <Github className="w-5 h-5" />,
      color: 'hover:text-gray-800',
      followers: ''
    },
    {
      name: 'Email',
      href: 'mailto:vasif951521@gmail.com',
      icon: <Mail className="w-5 h-5" />,
      color: 'hover:text-red-600',
      followers: 'Direct'
    }
  ];

  const techStack = [
    'Web Development',
    'AI/ML',
    'AWS Cloud Computing',
    'software Development',
  ];

  const achievements = [
    { number: '5+', label: 'Projects Completed' },
    { number: '8+', label: 'Certifications' },
    { number: '1', label: 'Publications' },
    { number: '99.7%', label: 'Best Model Accuracy' }
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          
          {/* Brand & About */}
          <div className="lg:col-span-1 space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-xl">VU</span>
              </div>
              <div>
                <div className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Vasif Uravakonda
                </div>
                <div className="text-sm text-gray-300">Software Engineer</div>
              </div>
            </div>
            
            <p className="text-gray-300 leading-relaxed">
              Passionate software engineer specializing in AI/ML, full-stack development, and cloud computing. 
              Committed to creating innovative solutions that make a real-world impact.
            </p>
            
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-gray-300">
                <MapPin className="w-4 h-4 text-blue-400" />
                <span className="text-sm">Ananthapur, Andhra Pradesh, India</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <Mail className="w-4 h-4 text-blue-400" />
                <span className="text-sm">vasif951521@gmail.com</span>
              </div>
          
              <div className="flex items-center space-x-2 text-gray-300">
                <Phone className="w-4 h-4 text-blue-400" />
                <span className="text-sm">+91 8125725362</span>
              </div>
            </div>
          <br />
            <a
            href="https://drive.google.com/file/d/1csq3JCoc6Scwcb9W-kYWG9ribJ1ua6ZV/view?usp=sharing&export=download"
            target="_blank"
            rel="noopener noreferrer"
>
          <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
          <Download className="w-4 h-4 mr-2" />
          Download Resume
          </Button>
          </a>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="flex items-center space-x-2 text-gray-300 hover:text-blue-400 transition-colors duration-300 group"
                  >
                    <span className="group-hover:text-blue-400 transition-colors">{link.icon}</span>
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white">Tech Stack</h3>
            <div className="flex flex-wrap gap-2">
              {techStack.map((tech, index) => (
                <span 
                  key={index}
                  className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm hover:bg-gray-700 transition-colors duration-300"
                >
                  {tech}
                </span>
              ))}
            </div>
            
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white">Key Achievements</h4>
              <div className="grid grid-cols-2 gap-4">
                {achievements.map((achievement, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl font-bold text-blue-400">{achievement.number}</div>
                    <div className="text-xs text-gray-400">{achievement.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Social Links & Connect */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white">Let's Connect</h3>
            
            <div className="space-y-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center justify-between p-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-all duration-300 group ${social.color}`}
                >
                  <div className="flex items-center space-x-3">
                    <span className="group-hover:scale-110 transition-transform duration-300">
                      {social.icon}
                    </span>
                    <div>
                      <div className="font-medium">{social.name}</div>
                      <div className="text-xs text-gray-400">{social.followers}</div>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </a>
              ))}
            </div>

            <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 p-4 rounded-lg border border-blue-500/30">
              <h4 className="font-semibold text-white mb-2">Open to Opportunities</h4>
              <p className="text-sm text-gray-300 mb-3">
                Currently seeking full-time opportunities in software engineering, AI/ML, and Web Devlopment.
              </p>
             <a href="mailto:vasif951521@gmail.com">
             <Button 
             variant="outline" 
             size="sm" 
             className="w-full border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white"
            >
            <Mail className="w-4 h-4 mr-2" />
           Get In Touch
          </Button>
          </a>
            </div>
          </div>
        </div>
      </div>

      <Separator className="bg-gray-700" />

      {/* Bottom Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <div className="flex items-center space-x-2 text-gray-400">
            <span>© {currentYear} Vasif Uravakonda. All rights reserved.</span>
          </div>
          
          <div className="flex items-center space-x-6 text-gray-400">
            <span className="flex items-center space-x-1 text-sm">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500 animate-pulse" />
              <span>using React, TypeScript & Tailwind CSS</span>
            </span>
          </div>
          
          <div className="flex items-center space-x-4 text-gray-400 text-sm">
            <a href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</a>
            <span>•</span>
            <a href="#" className="hover:text-blue-400 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
