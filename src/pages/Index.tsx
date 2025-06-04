
import React from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import Experience from '@/components/ExperienceSection';  
import SkillsSection from '@/components/SkillsSection';
import ProjectsSection from '@/components/ProjectsSection';
import PublicationsSection from '@/components/PublicationsSection';
import CertificationsSection from '@/components/CertificationsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
// import BootcampExperience from '@/components/BootcampExperience';
// import Experience from '@/components/Experience';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { BookOpen } from 'lucide-react';        
import ExperienceSection from '@/components/ExperienceSection';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="w-full">
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        {/* <BootcampExperience /> */}
        <SkillsSection />
        <ProjectsSection />
        <PublicationsSection />
        <CertificationsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
