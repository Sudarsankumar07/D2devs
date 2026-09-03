export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="px-6 md:px-16 py-20 relative z-20">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <span className="font-label-technical text-[#004ac6] mb-3 block opacity-80">
            [ 02 // ABOUT D²DEVS ]
          </span>
          <h2 className="font-sans font-bold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-[#0b1c30]">
            Software Company in Salem, Tamil Nadu
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <p className="font-sans text-base text-[#434655] leading-relaxed">
              D²devs is a software development company headquartered in Salem, Tamil Nadu, India. We specialize in building custom software solutions including websites, web applications, mobile apps, AI-powered products, and automation tools for businesses across Tamil Nadu and worldwide.
            </p>
            <p className="font-sans text-base text-[#434655] leading-relaxed">
              Based in Salem, we combine deep technical expertise in modern web technologies — React, TypeScript, Node.js, Python — with a practical understanding of business needs. From startups launching their first MVP to established enterprises modernizing their digital infrastructure, we deliver production-ready software built with clean architecture and measurable outcomes.
            </p>
            <p className="font-sans text-base text-[#434655] leading-relaxed">
              Our AI product development team builds intelligent systems including LLM fine-tuning pipelines, AI agent workflows, and custom MCP servers. We also run hands-on AI/ML and Python training programs, equipping the next generation of builders in Tamil Nadu with practical skills.
            </p>
          </div>

          <div className="space-y-6">
            <div className="futuristic-pane rounded-[28px] p-8">
              <h3 className="font-sans font-bold text-xl text-[#0b1c30] mb-4">Our Focus Areas</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-[#004ac6] mt-0.5">code</span>
                  <div>
                    <span className="font-sans font-semibold text-sm text-[#0b1c30] block">Website & App Development</span>
                    <span className="font-sans text-xs text-[#434655]">Custom web apps, mobile apps, and SaaS platforms built with React, Next.js, and React Native.</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-[#004ac6] mt-0.5">smart_toy</span>
                  <div>
                    <span className="font-sans font-semibold text-sm text-[#0b1c30] block">AI Product Development</span>
                    <span className="font-sans text-xs text-[#434655]">LLM fine-tuning, AI agents, MCP servers, and intelligent automation systems.</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-[#004ac6] mt-0.5">automation</span>
                  <div>
                    <span className="font-sans font-semibold text-sm text-[#0b1c30] block">Workflow Automation</span>
                    <span className="font-sans text-xs text-[#434655]">Custom automation pipelines and intelligent bots that eliminate repetitive manual work.</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-[#004ac6] mt-0.5">school</span>
                  <div>
                    <span className="font-sans font-semibold text-sm text-[#0b1c30] block">AI/ML & Python Education</span>
                    <span className="font-sans text-xs text-[#434655]">Hands-on training programs in AI, machine learning, and Python programming.</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="futuristic-pane rounded-[28px] p-6 flex items-center gap-4">
              <span className="material-symbols-outlined text-[#004ac6] text-3xl">location_on</span>
              <div>
                <span className="font-sans font-semibold text-sm text-[#0b1c30] block">Located in Salem, Tamil Nadu</span>
                <span className="font-sans text-xs text-[#434655]">Serving businesses across India and worldwide</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
