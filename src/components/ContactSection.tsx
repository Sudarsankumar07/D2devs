import { useState } from 'react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    projectScope: 'AI & Machine Learning',
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    
    setIsSubmitting(true);
    const formUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSd_pr1BlGWrfvcKoMpDN3vmhYHB9IY0BNdxD3RVT35_L6CFZA/formResponse';
    const formBody = new URLSearchParams();
    formBody.append('entry.429560998', formData.name);
    formBody.append('entry.1763658554', formData.email);
    formBody.append('entry.833238667', formData.projectScope);
    formBody.append('entry.1292918307', formData.message);

    try {
      await fetch(formUrl, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formBody.toString(),
      });
      setSubmitted(true);
    } catch (error) {
      console.error('Error submitting form', error);
      alert('Failed to send transmission. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="px-6 md:px-16 py-20 relative z-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <span className="font-label-technical text-[#004ac6] mb-3 block opacity-80">
            [ 06 // CONTACT & INITIATION ]
          </span>
          <h2 className="font-sans font-bold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-[#0b1c30] mb-6">
            Contact D²devs in Salem, Tamil Nadu
          </h2>
          <p className="font-sans text-base text-[#434655] leading-relaxed mb-8">
            Reach out to our software development team in Salem, Tamil Nadu, India. We build websites, mobile apps, AI products, and automation tools for businesses in Salem, across Tamil Nadu, and worldwide. Have a project in mind? Submit a brief or contact us directly.
          </p>

          <div className="space-y-4 font-technical text-sm text-[#0b1c30]">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-[#004ac6]">mail</span>
              <span>d2developerss@gmail.com</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-[#004ac6]">call</span>
              <span>+91 7448440471</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="material-symbols-outlined text-[#004ac6]">location_on</span>
              <span>780/4, Shivaji Nagar, R.K. Theater Opp, P.M. Kovil Post, Salem - 636003, Tamil Nadu, India</span>
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
                disabled={isSubmitting}
                className="w-full py-4 bg-[#004ac6] hover:bg-[#2563eb] disabled:bg-[#004ac6]/70 text-white font-label-caps text-xs tracking-widest uppercase rounded-xl shadow-lg transition-all cursor-pointer disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Transmitting...' : 'Transmit Specification'}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
