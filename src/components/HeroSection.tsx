import { useState } from 'react';

interface HeroSectionProps {
  onViewPortfolioClick: () => void;
  onOpenSpecsModal: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onViewPortfolioClick,
  onOpenSpecsModal,
}) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / 30;
    const y = (e.clientY - rect.top - rect.height / 2) / 30;
    setMousePos({ x, y });
  };

  return (
    <section
      id="hero"
      onMouseMove={handleMouseMove}
      className="relative px-6 md:px-16 pt-24 pb-16 flex flex-col min-h-screen justify-between overflow-hidden"
    >
      {/* Technical Grid Background */}
      <div className="absolute inset-0 technical-grid opacity-30 pointer-events-none"></div>

      {/* Main Content Row */}
      <div className="relative z-20 flex flex-col md:flex-row items-center gap-12 my-auto">
        {/* Left Column: Typography & CTAs */}
        <div className="w-full md:w-3/5 pt-8">
          {/* Precision Coordinates Header */}
          <div className="mb-8 flex items-center gap-4 text-[#004ac6] opacity-80">
            <span className="font-label-technical">[ 01 // INTERFACE ]</span>
            <div className="h-[0.5px] w-24 bg-[#c3c6d7]"></div>
            <span className="font-label-technical">LAT: 11.6643° N</span>
          </div>

          <div className="relative">
            {/* Background Shadow Outline Text */}
            <div className="absolute -top-16 -left-4 font-sans font-bold text-[90px] sm:text-[120px] md:text-[140px] text-stroke opacity-15 select-none whitespace-nowrap pointer-events-none tracking-tighter">
              ENGINEERING
            </div>

            <h1 className="font-sans font-bold text-5xl sm:text-6xl md:text-7xl lg:text-[80px] leading-[0.95] tracking-tighter text-[#0b1c30] relative z-10 max-w-2xl">
              Software Solutions & <span className="text-[#004ac6] italic font-sans">AI Product</span> Development in Salem
            </h1>

            {/* Subheader */}
            <div className="mt-8 md:mt-12 ml-0 sm:ml-8 md:ml-12 border-l-2 border-[#004ac6]/30 pl-6 md:pl-8 max-w-md">
              <p className="font-sans text-base sm:text-lg text-[#434655] leading-relaxed">
                D²devs is a leading software solutions and AI product development company in Salem, Tamil Nadu, India. We build websites, mobile apps, automation tools, and engineer AI systems — serving businesses across Tamil Nadu and worldwide.
              </p>

              <div className="mt-8 md:mt-10 flex flex-wrap gap-4 sm:gap-6">
                <button
                  onClick={onViewPortfolioClick}
                  className="group flex items-center gap-4 px-6 md:px-8 py-3.5 md:py-4 bg-[#2563eb] hover:bg-[#004ac6] text-white rounded-lg font-label-caps shadow-[0px_20px_40px_rgba(37,99,235,0.2)] transition-all hover:-translate-y-0.5 hover:shadow-[0px_24px_48px_rgba(37,99,235,0.3)] cursor-pointer"
                >
                  View Portfolio
                  <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                </button>

                <button
                  onClick={onOpenSpecsModal}
                  className="flex items-center gap-3 px-6 md:px-8 py-3.5 md:py-4 border border-[#737686]/30 rounded-lg font-label-technical text-[#0b1c30] hover:bg-[#eff4ff] transition-colors cursor-pointer"
                >
                  <span className="material-symbols-outlined text-base">terminal</span>
                  Technical Specs
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Immersive Glass Forms & 3D Artwork */}
        <div className="relative w-full md:w-2/5 h-[480px] sm:h-[550px] md:h-[600px] flex items-center justify-center">
          {/* Radial Ambient Glow */}
          <div className="absolute w-[350px] sm:w-[450px] h-[450px] rounded-full bg-gradient-to-tr from-[#004ac6]/15 to-transparent blur-3xl -top-10 -right-10 pointer-events-none"></div>

          {/* Overlapping Glass Canvas Container */}
          <div className="relative w-full h-full flex items-center justify-center">
            {/* Glass Card Offset 1 (Top Right) */}
            <div
              style={{
                transform: `translate(${mousePos.x * 1.2}px, ${mousePos.y * 1.2}px) rotate(6deg)`,
              }}
              className="absolute top-0 right-0 w-60 sm:w-64 h-72 sm:h-80 glass-panel rounded-2xl shadow-2xl z-30 transition-transform duration-300 ease-out p-6 flex flex-col justify-between border border-white/60"
            >
              <div className="flex justify-between items-start">
                <span className="material-symbols-outlined text-[#004ac6] text-3xl">architecture</span>
                <span className="font-label-technical text-[#004ac6] font-bold text-xs">v0.4.2</span>
              </div>
              <div>
                <div className="h-1 w-12 bg-[#004ac6] mb-4"></div>
                <div className="font-label-caps text-[#0b1c30] leading-tight font-bold">
                  PRECISION<br />LAYER
                </div>
              </div>
            </div>

            {/* Main Visual Frame (Center Sculpture) */}
            <div
              style={{
                transform: `translate(${mousePos.x * 0.5}px, ${mousePos.y * 0.5}px)`,
              }}
              className="absolute inset-0 z-20 flex items-center justify-center p-4 sm:p-8 transition-transform duration-300 ease-out"
            >
              <div className="w-full h-full rounded-[40px] shadow-[0_25px_60px_rgba(0,74,198,0.1)] overflow-hidden border border-white/60 bg-white/30 backdrop-blur-md">
                <img
                  className="w-full h-full object-cover"
                  alt="A high-end 3D abstract digital artwork"
                  src="https://images.unsplash.com/photo-1783431412513-8043c76cc987?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                />
              </div>
            </div>

            {/* Glass Card Offset 2 (Bottom Left) */}
            <div
              style={{
                transform: `translate(${mousePos.x * -1}px, ${mousePos.y * -1}px) rotate(-12deg)`,
              }}
              className="absolute -bottom-6 -left-6 w-52 sm:w-56 h-44 sm:h-48 glass-panel rounded-2xl shadow-xl z-40 transition-transform duration-300 ease-out p-6 border border-white/60"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-2.5 h-2.5 rounded-full bg-[#004ac6] animate-pulse"></div>
                <span className="font-label-technical font-bold text-[#0b1c30] text-xs">SYSTEM_ACTIVE</span>
              </div>
              <div className="space-y-3">
                <div className="h-[1px] w-full bg-[#c3c6d7]"></div>
                <div className="h-[1px] w-3/4 bg-[#004ac6]/60"></div>
                <div className="h-[1px] w-1/2 bg-[#c3c6d7]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Technical Metadata Footer Strip */}
      <div className="relative z-20 px-2 pt-8 pb-4 flex flex-col sm:flex-row justify-between items-center border-t border-[#c3c6d7]/30 gap-4 mt-8">
        <div className="flex gap-8 sm:gap-12">
          <div className="flex flex-col">
            <span className="font-label-technical opacity-50 uppercase text-[#737686]">Stack</span>
            <span className="font-sans text-sm font-medium text-[#0b1c30]">React · React Native · Python · Node.js</span>
          </div>
          <div className="flex flex-col">
            <span className="font-label-technical opacity-50 uppercase text-[#737686]">Build</span>
            <span className="font-sans text-sm font-medium text-[#0b1c30]">d2_prod_v9</span>
          </div>
        </div>
        <div className="flex gap-3 items-center">
          <span className="w-2.5 h-2.5 bg-[#004ac6] rounded-full animate-ping"></span>
          <span className="font-label-caps tracking-widest uppercase text-[#004ac6]">Global Connectivity</span>
        </div>
      </div>
    </section>
  );
};
