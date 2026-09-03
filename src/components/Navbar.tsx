import { useState } from 'react';

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  onOpenStartProject: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeSection,
  onNavigate,
  onOpenStartProject,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'portfolio', label: 'Projects' },
    { id: 'services', label: 'Services' },
    { id: 'pricing', label: 'Pricing' },
    { id: 'testimonials', label: 'Testimonials' },
    { id: 'faq', label: 'FAQ' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-8 py-3 rounded-full mt-4 mx-auto w-[94%] max-w-7xl bg-white/70 backdrop-blur-3xl border border-white/30 shadow-[0px_20px_40px_rgba(37,99,235,0.06)] transition-all">
      <div className="flex items-center gap-8">
        <button
          onClick={() => handleNavClick('hero')}
          className="font-sans font-bold text-2xl md:text-3xl tracking-tighter text-[#0b1c30] hover:text-[#004ac6] transition-colors cursor-pointer flex items-center gap-1"
        >
          D²devs
        </button>

        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`font-technical text-xs tracking-widest uppercase transition-all cursor-pointer pb-1 ${
                  isActive
                    ? 'text-[#004ac6] font-bold border-b-2 border-[#004ac6]'
                    : 'text-[#434655] hover:text-[#004ac6]'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </div>
      </div>

      <div className="hidden md:flex items-center gap-4">
        <button
          onClick={onOpenStartProject}
          className="px-6 py-2 bg-[#004ac6] hover:bg-[#2563eb] text-white rounded-full font-technical text-xs tracking-wider uppercase scale-95 active:scale-90 transition-all hover:shadow-lg cursor-pointer"
        >
          Start a Project
        </button>
      </div>

      {/* Mobile Toggle */}
      <div className="flex md:hidden items-center gap-2">
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="p-2 text-[#0b1c30] hover:text-[#004ac6] transition-colors"
          aria-label="Toggle Navigation"
        >
          <span className="material-symbols-outlined">{mobileMenuOpen ? 'close' : 'menu'}</span>
        </button>
      </div>

      {/* Mobile Dropdown */}
      {mobileMenuOpen && (
        <div className="absolute top-16 left-0 right-0 bg-white/95 backdrop-blur-2xl border border-white/50 rounded-3xl p-6 shadow-2xl flex flex-col gap-4 md:hidden z-50">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className="text-left font-technical text-sm tracking-wider text-[#0b1c30] hover:text-[#004ac6] py-2 border-b border-gray-100"
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenStartProject();
            }}
            className="w-full mt-2 py-3 bg-[#004ac6] text-white rounded-xl font-technical text-xs tracking-widest uppercase text-center"
          >
            Start a Project
          </button>
        </div>
      )}
    </nav>
  );
};
