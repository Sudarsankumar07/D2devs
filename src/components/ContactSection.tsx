import { useState } from 'react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    projectScope: 'AI & Machine Learning',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="px-6 md:px-16 py-20 relative z-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <span className="font-label-technical text-[#004ac6] mb-3 block opacity-80">
            [ 06 // CONTACT & INITIATION ]
          </span>
          <h2 className="font-sans font-bold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-[#0b1c30] mb-6">
            Initiate Deployment
          </h2>
          <p className="font-sans text-base text-[#434655] leading-relaxed mb-8">
            Have an idea for a website, mobile app, automation tool or AI project — or want to learn AI/ML and Python? Contact our engineering team directly or submit a project brief.
          </p>

          <div className="space-y-4 font-technical text-sm text-[#0b1c30]">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-[#004ac6]">mail</span>
              <span>engineering@d2devs.io</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-[#004ac6]">location_on</span>
              <span>Chennai // Remote // Worldwide</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-[#004ac6]">schedule</span>
              <span>Avg. Response Time: &lt; 2 Hours</span>
            </div>
          </div>
        </div>

        <div className="futuristic-pane rounded-[32px] p-8 shadow-2xl">
          {submitted ? (
            <div className="py-12 text-center space-y-4">
              <span className="material-symbols-outlined text-6xl text-[#004ac6]">check_circle</span>
              <h3 className="font-sans font-bold text-2xl text-[#0b1c30]">Transmission Received</h3>
              <p className="font-sans text-sm text-[#434655] max-w-sm mx-auto">
                Thank you, {formData.name}. Our lead system architect will review your parameters and initiate contact shortly.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-4 px-6 py-2 bg-[#004ac6] text-white rounded-lg font-label-technical text-xs"
              >
                Send Another Brief
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block font-label-technical text-xs text-[#0b1c30] uppercase mb-2">
                  Full Name / Entity *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Dr. Alex Vance"
                  className="w-full px-4 py-3 bg-white/70 border border-[#c3c6d7] rounded-xl font-sans text-sm text-[#0b1c30] focus:outline-none focus:border-[#004ac6]"
                />
              </div>

              <div>
                <label className="block font-label-technical text-xs text-[#0b1c30] uppercase mb-2">
                  Corporate Email *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="alex@enterprise.com"
                  className="w-full px-4 py-3 bg-white/70 border border-[#c3c6d7] rounded-xl font-sans text-sm text-[#0b1c30] focus:outline-none focus:border-[#004ac6]"
                />
              </div>

              <div>
                <label className="block font-label-technical text-xs text-[#0b1c30] uppercase mb-2">
                  Project Domain
                </label>
                <select
                  value={formData.projectScope}
                  onChange={(e) => setFormData({ ...formData, projectScope: e.target.value })}
                  className="w-full px-4 py-3 bg-white/70 border border-[#c3c6d7] rounded-xl font-sans text-sm text-[#0b1c30] focus:outline-none focus:border-[#004ac6]"
                >
                  <option value="Website Development">Website &amp; Web App Development</option>
                  <option value="Mobile App Development">Mobile App Development</option>
                  <option value="Automation Tools">Automation Tools</option>
                  <option value="AI & Machine Learning">AI / LLM / MCP Engineering</option>
                  <option value="AI/ML Training & Education">AI/ML &amp; Python Training</option>
                </select>
              </div>

              <div>
                <label className="block font-label-technical text-xs text-[#0b1c30] uppercase mb-2">
                  System Requirements / Parameters
                </label>
                <textarea
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Outline key performance goals, timeline expectations, or stack constraints..."
                  className="w-full px-4 py-3 bg-white/70 border border-[#c3c6d7] rounded-xl font-sans text-sm text-[#0b1c30] focus:outline-none focus:border-[#004ac6]"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-[#004ac6] hover:bg-[#2563eb] text-white font-label-caps text-xs tracking-widest uppercase rounded-xl shadow-lg transition-all cursor-pointer"
              >
                Transmit Specification
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
