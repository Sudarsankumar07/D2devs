import { TESTIMONIALS } from '../data';

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimonials" className="px-6 md:px-16 py-20 relative z-20">
      <div className="mb-12 flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
        <div>
          <span className="font-label-technical text-[#004ac6] mb-3 block opacity-80">
            [ 05 // TELEMETRY & VERIFICATION ]
          </span>
          <h2 className="font-sans font-bold text-4xl sm:text-5xl tracking-tight text-[#0b1c30]">
            Client Telemetry
          </h2>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl">
        {TESTIMONIALS.map((t) => (
          <div key={t.id} className="futuristic-pane rounded-[28px] p-8 flex flex-col justify-between shadow-lg">
            <div>
              <div className="flex justify-between items-center mb-6">
                <span className="font-label-technical text-xs text-[#004ac6] font-semibold">
                  VERIFIED BUILD: {t.buildId}
                </span>
                <span className="material-symbols-outlined text-[#004ac6]">verified</span>
              </div>
              <p className="font-sans text-lg text-[#0b1c30] italic leading-relaxed mb-8">
                &ldquo;{t.quote}&rdquo;
              </p>
            </div>
            <div className="border-t border-[#c3c6d7]/30 pt-4 flex items-center justify-between">
              <div>
                <h4 className="font-sans font-bold text-base text-[#0b1c30]">{t.author}</h4>
                <p className="text-xs text-[#434655]">{t.role}, {t.company}</p>
              </div>
              <span className="font-label-technical text-[10px] text-green-600 bg-green-50 px-2.5 py-1 rounded-full">
                100% SLA MET
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
