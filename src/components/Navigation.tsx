import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Eye, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface NavItem {
  label: string;
  href: string;
  id: string;
}

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      
      const sections = Array.from(document.querySelectorAll('section[id]')) as HTMLElement[];
      
      for (const section of sections) {
        const { offsetTop, offsetHeight } = section;
        const id = section.getAttribute('id');
        
        if (!id) continue;
        
        if (window.scrollY + 150 >= offsetTop && 
            window.scrollY + 150 < offsetTop + offsetHeight) {
          setActiveSection(id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: NavItem[] = [
    { label: 'Home', href: '#home', id: 'home' },
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Skills', href: '#skills', id: 'skills' },
    { label: 'Projects', href: '#projects', id: 'projects' },
    { label: 'Certifications', href: '#certifications', id: 'certifications' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  const resumeLink = "https://drive.google.com/file/d/1csq3JCoc6Scwcb9W-kYWG9ribJ1ua6ZV/view?usp=sharing";

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', damping: 20, stiffness: 120 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-gray-900/95 backdrop-blur-md shadow-2xl' 
          : 'bg-transparent'
      }`}
    >
      {/* Premium Glow Effect */}
      {isScrolled && (
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-blue-500/0 via-blue-500/70 to-purple-500/0" />
      )}

      {/* Subtle particle background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white/5"
            initial={{
              x: Math.random() * 100,
              y: Math.random() * 100,
              width: Math.random() * 3 + 1,
              height: Math.random() * 3 + 1,
              opacity: Math.random() * 0.2 + 0.1
            }}
            animate={{
              y: [0, Math.random() * 20 - 10],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{
              duration: Math.random() * 10 + 5,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-5">
        <div className="flex justify-between items-center h-20">
          {/* Premium Logo */}
          <motion.a 
            href="#home"
            className="flex items-center space-x-2 group relative"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: 'spring', stiffness: 400 }}
          >
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-[0_8px_30px_rgba(99,102,241,0.3)] transition-all duration-500 overflow-hidden">
                <span className="text-white font-bold text-lg">VU</span>
                {/* Animated shine effect */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0"
                  initial={{ x: -100 }}
                  animate={{ x: 200 }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </div>
              <div className="absolute -inset-1 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 blur opacity-0 group-hover:opacity-30 transition-opacity duration-500 -z-10"></div>
            </div>
            <div className="hidden sm:block">
              <div className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent relative">
                Vasif Uravakonda
                <motion.div 
                  className="absolute bottom-0 left-0 h-px bg-gradient-to-r from-blue-400 to-purple-400"
                  initial={{ width: 0 }}
                  whileHover={{ width: '100%' }}
                  transition={{ duration: 0.3 }}
                />
              </div>
              <div className="text-xs text-gray-400/90 font-medium tracking-wider transition-all duration-500 group-hover:text-blue-300">
                SOFTWARE ENGINEER
              </div>
            </div>
          </motion.a>

          {/* Premium Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-1 relative">
              {navItems.map((item) => (
                <motion.a
                  key={item.id}
                  href={item.href}
                  className={`relative px-4 py-2 font-medium transition-colors duration-300 rounded-lg z-10 ${
                    activeSection === item.id 
                      ? 'text-white' 
                      : 'text-gray-400 hover:text-white'
                  }`}
                  onMouseEnter={() => setHoveredItem(item.id)}
                  onMouseLeave={() => setHoveredItem(null)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <motion.span 
                      className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"
                      layoutId="activeIndicator"
                      transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                    />
                  )}
                </motion.a>
              ))}
              
              {/* Floating background for hovered item */}
              <AnimatePresence>
                {hoveredItem && (
                  <motion.div
                    className="absolute bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700/50"
                    initial={{ opacity: 0 }}
                    animate={{ 
                      opacity: 1,
                      width: 'auto',
                      height: 'auto',
                      x: navItems.findIndex(item => item.id === hoveredItem) * 80,
                    }}
                    exit={{ opacity: 0 }}
                    transition={{ type: 'spring', damping: 25 }}
                    layoutId="hoverBackground"
                  />
                )}
              </AnimatePresence>
            </div>
          </div>

       {/* Premium View Resume Button */}
<div className="hidden md:flex justify-center">
  <motion.div
    whileHover={{ scale: 1.03 }}
    whileTap={{ scale: 0.98 }}
    transition={{ type: 'spring', stiffness: 400 }}
  >
    <Button 
      className="relative w-[200px] overflow-hidden group bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold px-6 py-2 rounded-xl shadow-lg hover:shadow-[0_10px_25px_rgba(99,102,241,0.3)] transition-all duration-500 z-10"
      onClick={() => window.open(resumeLink, '_blank')}
    >
      {/* Shine effect */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute top-0 left-0 h-full w-8 bg-white/30"
          initial={{ x: -100 }}
          animate={{ x: 300 }}
          transition={{
            delay: 0.5,
            duration: 1.5,
            repeat: Infinity,
            repeatDelay: 2
          }}
        />
      </div>
      <span className="relative flex items-center justify-center">
        <Eye className="w-4 h-4 mr-2" />
        View Resume
      </span>
    </Button>
  </motion.div>
</div>


          {/* Premium Mobile Menu Button */}
          <motion.div 
            className="md:hidden"
            whileTap={{ scale: 0.9 }}
          >
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg text-gray-300 hover:text-white hover:bg-gray-800/50 transition-all duration-300 relative overflow-hidden"
              aria-label="Toggle menu"
            >
              {/* Animated background */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-blue-600/30 to-purple-600/30"
                initial={{ opacity: 0 }}
                animate={{ opacity: isMobileMenuOpen ? 1 : 0 }}
                transition={{ duration: 0.3 }}
              />
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </motion.div>
        </div>

        {/* Premium Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="md:hidden mt-2"
            >
              <div className="bg-gray-900/95 backdrop-blur-lg rounded-xl shadow-2xl border border-gray-800 overflow-hidden relative">
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/10 rounded-full blur-3xl -z-10"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-purple-600/10 rounded-full blur-3xl -z-10"></div>
                
                <div className="px-2 pt-2 pb-1 space-y-1">
                  {navItems.map((item) => (
                    <motion.a
                      key={item.id}
                      href={item.href}
                      className={`block px-4 py-3 rounded-lg font-medium transition-all duration-300 relative overflow-hidden ${
                        activeSection === item.id
                          ? 'text-white bg-gray-800/50'
                          : 'text-gray-400 hover:text-white hover:bg-gray-800/30'
                      }`}
                      onClick={() => setIsMobileMenuOpen(false)}
                      whileTap={{ scale: 0.98 }}
                    >
                      {activeSection === item.id && (
                        <motion.div 
                          className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"
                          layoutId="mobileActiveBg"
                          transition={{ type: 'spring', stiffness: 300 }}
                        />
                      )}
                      <span className="relative z-10 flex items-center">
                        {item.label}
                        {activeSection === item.id && (
                          <motion.div 
                            className="ml-2 w-2 h-2 bg-blue-400 rounded-full"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ type: 'spring' }}
                          />
                        )}
                      </span>
                    </motion.a>
                  ))}
                </div>
              <div className="px-0.5 pb-3">
  <Button 
    className="w-80 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-3 rounded-lg shadow-lg hover:shadow-[0_10px_20px_rgba(99,102,241,0.3)] transition-all duration-500 relative overflow-hidden group"
    onClick={() => {
      window.open(resumeLink, '_blank');
      setIsMobileMenuOpen(false);
    }}
  >
    {/* Animated background */}
    <motion.div 
      className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
    />
    <span className="relative flex items-center justify-center">
      <Eye className="w-4 h-4 mr-2" />
      view Resume
    </span>
  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navigation;
