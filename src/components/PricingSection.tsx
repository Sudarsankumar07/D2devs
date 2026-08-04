import { PRICING_TIERS } from '../data';

interface PricingSectionProps {
  onSelectTier: (tierName: string) => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onSelectTier }) => {
  return (
    <section id="pricing" className="px-6 md:px-16 py-20 relative z-20">
      <div className="mb-12 text-center max-w-2xl mx-auto">
        <span className="font-label-technical text-[#004ac6] mb-3 block opacity-80">
          [ 04 // PRICING & TIERING ]
        </span>
        <h2 className="font-sans font-bold text-4xl sm:text-5xl tracking-tight text-[#0b1c30] mb-4">
          Investment Framework
        </h2>
        <p className="font-sans text-[#434655] text-base leading-relaxed">
          We don't publish fixed prices — we provide the best quotation after understanding your scope. Low cost, great build quality, and 1 year of free maintenance on every build.
        </p>
      </div>

      <div className="max-w-6xl mx-auto mb-10 flex flex-wrap justify-center gap-3">
        {['Best Quotation', 'Low Cost', 'Great Build Quality', '1 Year Free Maintenance'].map((item) => (
          <span
            key={item}
            className="px-4 py-2 rounded-full border border-[#004ac6]/25 bg-white/60 font-label-technical text-xs text-[#004ac6]"
          >
            {item}
          </span>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {PRICING_TIERS.map((tier) => (
          <div
            key={tier.id}
            className={`rounded-[28px] p-8 flex flex-col justify-between transition-all duration-300 relative ${
              tier.highlighted
                ? 'bg-gradient-to-b from-[#004ac6] to-[#003ea8] text-white shadow-2xl scale-105 border-2 border-blue-400'
                : 'futuristic-pane text-[#0b1c30] shadow-lg'
            }`}
          >
            {tier.highlighted && (
              <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#2563eb] text-white font-label-technical text-[10px] uppercase tracking-widest px-4 py-1 rounded-full shadow">
                MOST POPULAR
              </span>
            )}

            <div>
              <div className="flex justify-between items-center mb-4">
                <span className={`font-label-technical text-xs ${tier.highlighted ? 'text-blue-200' : 'text-[#004ac6]'}`}>
                  {tier.code}
                </span>
              </div>

              <h3 className="font-sans font-bold text-2xl mb-2">{tier.name}</h3>
              <p className={`text-xs mb-6 ${tier.highlighted ? 'text-blue-100' : 'text-[#434655]'}`}>
                {tier.description}
              </p>

              <div className="mb-8">
                <span className="font-sans font-extrabold text-4xl sm:text-5xl tracking-tight">
                  {tier.priceLabel}
                </span>
                <span className={`text-xs font-technical ml-2 ${tier.highlighted ? 'text-blue-200' : 'text-[#737686]'}`}>
                  {tier.periodLabel}
                </span>
              </div>

              <div className="space-y-3 mb-8">
                {tier.features.map((feat, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-sm">
                    <span className={`material-symbols-outlined text-base ${tier.highlighted ? 'text-blue-200' : 'text-[#004ac6]'}`}>
                      task_alt
                    </span>
                    <span className={tier.highlighted ? 'text-blue-50' : 'text-[#0b1c30]'}>
                      {feat}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={() => onSelectTier(tier.name)}
              className={`w-full py-3.5 rounded-xl font-label-technical text-xs tracking-wider uppercase transition-all cursor-pointer ${
                tier.highlighted
                  ? 'bg-white text-[#004ac6] hover:bg-blue-50 font-bold shadow'
                  : 'bg-[#004ac6] text-white hover:bg-[#2563eb]'
              }`}
            >
              Select Tier
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};
