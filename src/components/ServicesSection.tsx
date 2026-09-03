import { SERVICES } from '../data';

interface ServicesSectionProps {
  onStartProjectForService: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onStartProjectForService }) => {
  return (
    <section id="services" className="px-6 md:px-16 py-20 relative z-20">
      <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <span className="font-label-technical text-[#004ac6] mb-3 block opacity-80">
            [ 03 // SERVICES & CAPABILITIES ]
          </span>
          <h2 className="font-sans font-bold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-[#0b1c30]">
            Software Solutions & Services
          </h2>
          <p className="font-sans text-base text-[#434655] leading-relaxed mt-4 max-w-3xl">
            D²devs delivers end-to-end software solutions from custom website development and mobile app engineering to AI product development and workflow automation for businesses across India and worldwide.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {SERVICES.map((svc) => (
          <div
            key={svc.id}
            className="futuristic-pane rounded-[28px] p-8 flex flex-col justify-between group hover:-translate-y-2 transition-all duration-300 shadow-[0_20px_50px_rgba(0,0,0,0.04)]"
          >
            <div>
              <div className="flex justify-between items-center mb-6">
                <span className="font-label-technical text-[#004ac6] font-bold">{svc.code}</span>
                <span className="font-label-technical text-[#737686]">{svc.lat}</span>
              </div>

              <h3 className="font-sans font-bold text-2xl text-[#0b1c30] mb-4 tracking-tight">
                {svc.title}
              </h3>

              <p className="font-sans text-sm text-[#434655] leading-relaxed mb-6">
                {svc.description}
              </p>

              <div className="space-y-2 mb-8">
                <span className="font-label-technical text-xs text-[#004ac6] font-semibold block mb-2">
                  DELIVERABLES:
                </span>
                {svc.deliverables.map((del, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-[#0b1c30] font-sans">
                    <span className="material-symbols-outlined text-[#004ac6] text-sm">check_circle</span>
                    <span>{del}</span>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={() => onStartProjectForService(svc.title)}
              className="w-full py-3 px-4 border border-[#004ac6]/30 hover:bg-[#004ac6] hover:text-white rounded-xl font-label-technical text-xs uppercase tracking-wider text-[#004ac6] transition-colors cursor-pointer flex items-center justify-center gap-2"
            >
              <span>Commission {svc.title.split(' ')[0]}</span>
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};
