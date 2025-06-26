import React, { useState, useRef, FormEvent, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, Linkedin, Github, Phone, Download, MessageCircle, Languages, Home, MessageSquare } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';

const ContactSection = () => {
  const form = useRef<HTMLFormElement>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState('');

  // Initialize EmailJS once
  useEffect(() => {
    emailjs.init('XdbEJ2uA8z2Wa2i4l'); // Your public key
  }, []);

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
    }
  ];

  const languages = [
    { language: "English", proficiency: "Professional", level: 90, icon: <MessageCircle className="w-5 h-5 text-white" /> },
    { language: "Hindi", proficiency: "Working", level: 85, icon: <MessageSquare className="w-5 h-5 text-white" /> },
    { language: "Telugu", proficiency: "Native", level: 100, icon: <Home className="w-5 h-5 text-white" /> }
  ];

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    
    if (!form.current) {
      setError('Form reference is not available');
      setIsLoading(false);
      return;
    }

    // Get form values
    const name = form.current.from_name.value;
    const email = form.current.reply_to.value;
    const subject = form.current.subject.value;
    const message = form.current.message.value;

    if (!name || !email || !subject || !message) {
      setError('Please fill all required fields');
      setIsLoading(false);
      return;
    }

    // Updated template parameters to match EmailJS template
    const templateParams = {
      from_name: name,          // Matches {{from_name}} in template
      from_email: email,        // Matches {{from_email}} in template
      subject: subject,         // Used in template subject
      message: message,         // Matches {{message}} in template
      site_name: "Vasif's Portfolio", // Additional variable for template
      date: new Date().toLocaleDateString() // Auto-generated date
    };

    emailjs.send(
      'service_xmyqoyn',    // Your service ID
      'template_g8y1r1b',   // Your template ID
      templateParams
    )
    .then((result) => {
        console.log('Email sent successfully:', result);
        setIsSent(true);
        form.current?.reset();
        
        setTimeout(() => {
          setIsSent(false);
        }, 5000);
    }, (error) => {
        console.error('Email send error:', error);
        setError(`Failed to send message. Please try again later or contact me directly at vasif951521@gmail.com.`);
    })
    .finally(() => {
        setIsLoading(false);
    });
  };

  return (
    <section id="contact" className="py-16 bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mb-5 shadow-lg"
          >
            <MessageCircle className="w-7 h-7 text-white" />
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl font-bold text-white mb-3"
          >
            Get In <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Touch</span>
          </motion.h2>
          
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: '5rem' }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mb-5"
          ></motion.div>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            I'm actively exploring new opportunities in software engineering, Web Development and AI/ML. 
            Reach out for collaborations or just to say hello!
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-3 gap-5">
          {/* Left Column - Contact Cards */}
          <div className="lg:col-span-1 space-y-4">
            {contactInfo.map((info, index) => (
              <motion.a 
                key={index} 
                href={info.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="block group"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
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
              </motion.a>
            ))}

            {/* GitHub Card */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Card className="border-0 bg-gray-800 shadow-lg">
                <CardContent className="p-5">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 p-3 rounded-lg bg-gradient-to-br from-gray-700 to-gray-900 text-white shadow-md">
                      <Github className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white mb-1">GitHub</h3>
                      <p className="text-sm font-medium text-blue-400">Vasifgithub</p>
                      <p className="text-xs text-gray-400 mt-1.5">Technical projects & code</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card className="border-0 bg-gray-800 shadow-lg h-full">
                <CardHeader className="pb-3">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-blue-600/10 rounded-lg">
                      <Mail className="w-5 h-5 text-blue-400" />
                    </div>
                    <CardTitle className="text-lg text-white">Send Message</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <form ref={form} onSubmit={sendEmail} className="space-y-4 h-full flex flex-col">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                          Your Name
                        </label>
                        <Input
                          type="text"
                          id="name"
                          name="from_name"
                          placeholder="John Doe"
                          className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                          Your Email
                        </label>
                        <Input
                          type="email"
                          id="email"
                          name="reply_to"
                          placeholder="john@example.com"
                          className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500"
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-1">
                        Subject
                      </label>
                      <Input
                        type="text"
                        id="subject"
                        name="subject"
                        placeholder="Job Opportunity"
                        className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500"
                        required
                      />
                    </div>
                    <div className="flex-grow">
                      <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                        Message
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        rows={8}
                        placeholder="Your message here..."
                        className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500 h-full min-h-[150px]"
                        required
                      />
                    </div>
                    
                    {/* Status Messages */}
                    {isSent && (
                      <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="px-4 py-2 bg-green-500/10 border border-green-500/30 rounded-md text-green-400 text-sm"
                      >
                        Message sent successfully! I'll get back to you soon.
                      </motion.div>
                    )}
                    
                    {error && (
                      <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="px-4 py-2 bg-red-500/10 border border-red-500/30 rounded-md text-red-400 text-sm"
                      >
                        {error}
                      </motion.div>
                    )}
                    
                    <Button
                      type="submit"
                      disabled={isLoading}
                      className={`w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium py-2 px-4 rounded-md transition-all shadow-md mt-2 ${
                        isLoading ? 'opacity-70 cursor-not-allowed' : ''
                      }`}
                    >
                      {isLoading ? (
                        <div className="flex items-center justify-center">
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending...
                        </div>
                      ) : (
                        'Send Message'
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
          
          {/* Bottom Row - Aligned bottom edges */}
          <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-3 mt-3">
            {/* Language Proficiency Card */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="h-full"
            >
              <Card className="border-0 bg-gray-800 shadow-lg h-full">
                <CardHeader className="pb-3">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-blue-600/10 rounded-lg">
                      <Languages className="w-5 h-5 text-blue-400" />
                    </div>
                    <CardTitle className="text-lg text-white">Language Proficiency</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-0 space-y-4">
                  {languages.map((lang, index) => (
                    <div key={index} className="space-y-2">
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
            </motion.div>

            {/* Download Resume Card - UPDATED */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="h-full"
            >
              <Card className="border-0 bg-gradient-to-br from-blue-700/90 to-indigo-700/90 shadow-lg h-full">
                <CardContent className="p-5 flex flex-col h-full">
                  <div className="text-center flex-grow">
                    <div className="p-3 bg-white/10 rounded-full mb-4 inline-flex">
                      <Download className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">Download Resume</h3>
                    <p className="text-blue-100 text-sm mb-4">
                      Get my complete professional profile
                    </p>
                  </div>
                  <a
                    href="https://drive.google.com/file/d/1csq3JCoc6Scwcb9W-kYWG9ribJ1ua6ZV/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center bg-white text-blue-700 hover:bg-gray-50 text-base font-medium py-3 px-4 rounded-md transition-colors shadow-sm"
                  >
                    <Download className="w-5 h-5 mr-2" />
                    Download PDF
                  </a>
                </CardContent>
              </Card>
            </motion.div>

            {/* Let's Connect Card - UPDATED */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="h-full"
            >
              <Card className="border-0 bg-gradient-to-br from-purple-700/90 to-violet-700/90 shadow-lg h-full">
                <CardContent className="p-5 flex flex-col h-full">
                  <div className="text-center flex-grow">
                    <div className="p-3 bg-white/10 rounded-full mb-4 inline-flex">
                      <MessageCircle className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">Let's Connect</h3>
                    <p className="text-purple-100 text-sm mb-4">
                      Interested in working together?
                    </p>
                  </div>
                  <a
                    href="mailto:vasif951521@gmail.com"
                    className="w-full inline-flex items-center justify-center bg-white text-purple-700 hover:bg-gray-50 text-base font-medium py-3 px-4 rounded-md transition-colors shadow-sm"
                  >
                    <Mail className="w-5 h-5 mr-2" />
                    Contact Me
                  </a>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
