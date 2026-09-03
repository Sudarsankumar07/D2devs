import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { Portfolio } from './components/Portfolio';
import { ServicesSection } from './components/ServicesSection';
import { PricingSection } from './components/PricingSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FaqSection } from './components/FaqSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import {
  TechnicalSpecsModal,
  StartProjectModal,
  ProjectDetailModal,
} from './components/Modals';
import { INITIAL_PROJECTS } from './data';
import type { Project } from './types';

export const HomePage: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [specsModalOpen, setSpecsModalOpen] = useState<boolean>(false);
  const [startProjectModalOpen, setStartProjectModalOpen] = useState<boolean>(false);
  const [preselectedService, setPreselectedService] = useState<string>('');

  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenStartProject = (serviceTitle?: string) => {
    if (serviceTitle) setPreselectedService(serviceTitle);
    else setPreselectedService('');
    setStartProjectModalOpen(true);
  };

  return (
    <div className="bg-[#f8f9ff] text-[#0b1c30] min-h-screen font-sans font-body-md overflow-x-hidden selection:bg-[#004ac6] selection:text-white">
      {/* Top Floating Glass Navigation */}
      <Navbar
        activeSection={activeSection}
        onNavigate={handleNavigate}
        onOpenStartProject={() => handleOpenStartProject()}
      />

      <main className="relative">
        {/* Hero Section */}
        <HeroSection
          onViewPortfolioClick={() => handleNavigate('portfolio')}
          onOpenSpecsModal={() => setSpecsModalOpen(true)}
        />

        {/* About Section */}
        <AboutSection />

        {/* Portfolio Section */}
        <Portfolio
          projects={INITIAL_PROJECTS}
          onSelectProject={(project) => setSelectedProject(project)}
        />

        {/* Services Section */}
        <ServicesSection
          onStartProjectForService={(title) => handleOpenStartProject(title)}
        />

        {/* Pricing Section */}
        <PricingSection
          onSelectTier={(tierName) => handleOpenStartProject(`Tier: ${tierName}`)}
        />

        {/* Testimonials Telemetry */}
        <TestimonialsSection />

        {/* FAQ Section */}
        <FaqSection />

        {/* Contact / Initiation Section */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Modals */}
      <TechnicalSpecsModal
        isOpen={specsModalOpen}
        onClose={() => setSpecsModalOpen(false)}
      />

      <StartProjectModal
        isOpen={startProjectModalOpen}
        onClose={() => setStartProjectModalOpen(false)}
        preselectedService={preselectedService}
      />

      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onStartProject={() => handleOpenStartProject(`Project: ${selectedProject?.title}`)}
      />
    </div>
  );
};
