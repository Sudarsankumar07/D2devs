import { useState } from 'react';
import type { Project } from '../types';

interface PortfolioProps {
  projects: Project[];
  onSelectProject: (project: Project) => void;
}

export const Portfolio: React.FC<PortfolioProps> = ({ projects, onSelectProject }) => {
  const [selectedFilter, setSelectedFilter] = useState<string>('ALL');
  const [hoveredProjectId, setHoveredProjectId] = useState<string | null>(null);

  const categories = [
    { id: 'ALL', label: 'ALL_BUILDS' },
    { id: 'WEB_PLATFORM', label: 'WEB_PLATFORMS' },
    { id: 'MOBILE_APP', label: 'MOBILE_APPS' },
    { id: 'AUTOMATION', label: 'AUTOMATION' },
    { id: 'AI_ENGINEERING', label: 'AI_ENGINEERING' },
  ];

  const filteredProjects = selectedFilter === 'ALL'
    ? projects
    : projects.filter(p => p.category === selectedFilter);


  return (
    <section id="portfolio" className="px-6 md:px-16 py-20 relative z-20 overflow-hidden">
      {/* Top Header Row */}
      <div className="mb-12 md:mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <span className="font-label-technical text-[#004ac6] mb-3 block opacity-80">
            [ 02 // PORTFOLIO ]
          </span>
          <h2 className="font-sans font-bold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-[#0b1c30]">
            Engineered Realities
          </h2>
        </div>

        <div className="flex flex-col md:items-end gap-2">
          <div className="flex items-center gap-4 text-[#737686]">
            <span className="font-label-technical">STATUS</span>
            <div className="h-[1px] w-12 bg-[#c3c6d7]"></div>
            <span className="font-label-technical text-[#004ac6] font-bold">LIVE_DATA</span>
          </div>
          <span className="font-label-technical text-[#737686] text-xs">
            SYS.REQ: HIGH_FIDELITY
          </span>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="mb-12 flex flex-wrap gap-3 border-b border-[#c3c6d7]/30 pb-4">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setSelectedFilter(cat.id)}
            className={`px-4 py-2 rounded-lg font-label-technical text-xs transition-all cursor-pointer ${selectedFilter === cat.id
                ? 'bg-[#004ac6] text-white font-semibold shadow-md'
                : 'bg-white/60 text-[#434655] hover:bg-[#eff4ff] border border-gray-200'
              }`}
          >
            [ {cat.label} ]
          </button>
        ))}
      </div>

      {/* Interactive Flex-Accordion Stage */}
      <div className="relative w-full flex flex-col md:flex-row gap-4 h-auto md:h-[600px] mt-12 pb-12">
        {filteredProjects.map((project, index) => {
          const isActive = hoveredProjectId === project.id || (hoveredProjectId === null && index === 0);

          return (
            <div
              key={project.id}
              onMouseEnter={() => setHoveredProjectId(project.id)}
              onMouseLeave={() => setHoveredProjectId(null)}
              onClick={() => onSelectProject(project)}
              className="group relative overflow-hidden rounded-[32px] border border-white/60 bg-[#0b1c30] transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] cursor-pointer shadow-lg hover:shadow-2xl flex"
              style={{
                flex: isActive ? '4' : '1',
                minHeight: '200px'
              }}
            >
              {/* Image Background */}
              <div className="absolute inset-0">
                <div className={`absolute inset-0 bg-[#004ac6]/20 mix-blend-overlay z-10 transition-opacity duration-500 ${isActive ? 'opacity-0' : 'opacity-100'}`}></div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b1c30]/95 via-[#0b1c30]/40 to-transparent z-10"></div>
                <img
                  alt={project.title}
                  className={`w-full h-full object-cover transition-transform duration-[1.5s] ${isActive ? 'scale-105' : 'scale-100 grayscale-[30%]'}`}
                  src={project.imageUrl}
                />
              </div>

              {/* Content Overlay */}
              <div className="relative z-20 w-full h-full p-6 sm:p-8 flex flex-col justify-end overflow-hidden">
                <div className="flex gap-3 items-center mb-4">
                  <span className={`w-2 h-2 rounded-full transition-colors duration-500 ${isActive ? 'bg-[#40b8ff] animate-pulse' : 'bg-white/40'}`}></span>
                  <span className={`font-label-technical font-bold tracking-wide text-xs sm:text-sm transition-colors duration-500 whitespace-pre-line leading-tight ${isActive ? 'text-[#40b8ff]' : 'text-white/60'}`}>
                    {isActive
                      ? project.categoryLabel.replace(/\s+/g, '\n')
                      : project.categoryLabel.replace(/[^\w]/g, '').trim()}
                  </span>
                </div>

                <div className="overflow-hidden">
                  <h3 className={`font-sans font-bold text-white tracking-tight transition-all duration-700 text-xl whitespace-nowrap overflow-hidden text-ellipsis mb-0 ${isActive ? 'md:text-2xl md:whitespace-normal md:overflow-visible md:mb-4' : ''}`}>
                    {project.title}
                  </h3>

                  <div className={`transition-all duration-700 ease-in-out opacity-0 max-h-0 ${isActive ? 'md:opacity-100 md:max-h-[500px]' : 'md:opacity-0 md:max-h-0'}`}>
                    <p className="font-sans text-white/80 text-sm sm:text-base max-w-xl leading-relaxed mb-6 line-clamp-4 md:line-clamp-none">
                      {project.description}
                    </p>
                    <div className="flex items-center gap-2 text-[#0b1c30] bg-white font-label-caps text-xs sm:text-sm font-bold px-5 py-2.5 rounded-lg w-fit transition-transform hover:scale-105">
                      EXPLORE BUILD
                      <span className="material-symbols-outlined text-lg">arrow_forward</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
