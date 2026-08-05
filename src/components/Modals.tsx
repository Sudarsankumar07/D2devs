import { useState } from 'react';
import type { Project } from '../types';
import { TECHNICAL_SPECS } from '../data';

interface TechnicalSpecsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TechnicalSpecsModal: React.FC<TechnicalSpecsModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-md animate-fade-in">
      <div className="bg-[#0b1c30] text-white w-full max-w-4xl rounded-3xl p-6 sm:p-8 border border-blue-500/30 shadow-2xl overflow-hidden max-h-[90vh] flex flex-col">
        {/* Modal Header */}
        <div className="flex justify-between items-center pb-4 border-b border-gray-700">
          <div className="flex items-center gap-3">
            <span className="w-3 h-3 rounded-full bg-green-400 animate-ping"></span>
            <span className="font-label-technical text-green-400 font-bold">
              SYSTEM_SPECS // TERMINAL_V9
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1 hover:bg-gray-800 rounded-full transition-colors text-gray-400 hover:text-white cursor-pointer"
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        {/* Modal Body */}
        <div className="py-6 overflow-y-auto space-y-6 font-technical text-sm">
          <div className="bg-black/40 p-4 rounded-xl border border-gray-800 text-xs text-gray-300">
            <p className="text-blue-400">$ d2devs --inspect-system-telemetry</p>
            <p className="text-gray-400 mt-1">&gt; Initializing real-time telemetry stream... ALL SYSTEMS NOMINAL</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {TECHNICAL_SPECS.map((spec, i) => (
              <div key={i} className="bg-gray-900/80 p-5 rounded-2xl border border-gray-800 space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-blue-400 font-bold">{spec.module}</span>
                  <span className="text-[10px] bg-blue-950 text-blue-300 px-2 py-0.5 rounded border border-blue-800">
                    {spec.version}
                  </span>
                </div>
                <p className="text-xs text-gray-400 leading-relaxed">{spec.description}</p>
                <div className="grid grid-cols-2 gap-2 text-xs pt-2 border-t border-gray-800">
                  <div>
                    <span className="text-gray-500 text-[10px] block">P99 LATENCY</span>
                    <span className="text-green-400 font-bold">{spec.latency}</span>
                  </div>
                  <div>
                    <span className="text-gray-500 text-[10px] block">THROUGHPUT</span>
                    <span className="text-white font-bold">{spec.throughput}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Modal Footer */}
        <div className="pt-4 border-t border-gray-800 flex justify-between items-center">
          <span className="text-xs text-gray-500 font-technical">D²devs // React · React Native · Python · Node.js</span>
          <button
            onClick={onClose}
            className="px-6 py-2 bg-[#004ac6] text-white rounded-xl font-label-technical text-xs hover:bg-[#2563eb]"
          >
            Exit Spec Terminal
          </button>
        </div>
      </div>
    </div>
  );
};

interface StartProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedService?: string;
}

export const StartProjectModal: React.FC<StartProjectModalProps> = ({
  isOpen,
  onClose,
  preselectedService,
}) => {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    service: preselectedService || 'Website Development',
    budget: 'MVP / Prototype',
    details: '',
  });

  if (!isOpen) return null;

  const handleNext = async (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 2) {
      setStep(2);
      return;
    }

    setIsSubmitting(true);
    const formUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSd_pr1BlGWrfvcKoMpDN3vmhYHB9IY0BNdxD3RVT35_L6CFZA/formResponse';
    const formBody = new URLSearchParams();
    formBody.append('entry.429560998', form.name);
    formBody.append('entry.1763658554', form.email);
    
    const combinedDetails = `Service: ${form.service}\nBudget: ${form.budget}\nDetails: ${form.details}`;
    formBody.append('entry.1292918307', combinedDetails);

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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md">
      <div className="bg-white text-[#0b1c30] w-full max-w-xl rounded-3xl p-6 sm:p-8 border border-white/60 shadow-2xl">
        <div className="flex justify-between items-center pb-4 border-b border-gray-100">
          <div>
            <span className="font-label-technical text-[#004ac6] text-xs font-bold block">
              [ INITIATION PROTOCOL ]
            </span>
            <h3 className="font-sans font-bold text-2xl text-[#0b1c30]">Start a Project</h3>
          </div>
          <button onClick={onClose} className="p-1 text-gray-400 hover:text-black cursor-pointer">
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        {submitted ? (
          <div className="py-12 text-center space-y-4">
            <span className="material-symbols-outlined text-6xl text-[#004ac6]">verified</span>
            <h4 className="font-sans font-bold text-2xl">Initiation Confirmed</h4>
            <p className="text-sm text-[#434655] max-w-md mx-auto">
              Your submission for <strong className="text-[#004ac6]">{form.service}</strong> has been ingested. A lead architect will reach out via <span className="font-mono">{form.email}</span> within 2 hours.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                setStep(1);
                onClose();
              }}
              className="mt-4 px-8 py-3 bg-[#004ac6] text-white rounded-xl font-label-technical text-xs"
            >
              Close Window
            </button>
          </div>
        ) : (
          <form onSubmit={handleNext} className="py-6 space-y-6">
            {step === 1 ? (
              <>
                <div>
                  <label className="block font-label-technical text-xs text-[#0b1c30] uppercase mb-2">
                    Primary Service Domain
                  </label>
                  <select
                    value={form.service}
                    onChange={(e) => setForm({ ...form, service: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl font-sans text-sm"
                  >
                    <option value="Website Development">Website &amp; Web App Development</option>
                    <option value="Mobile App Development">Mobile App Development</option>
                    <option value="Automation & AI Engineering">Automation &amp; AI Engineering</option>
                    <option value="AI/ML Training & Education">AI/ML &amp; Python Training</option>
                  </select>
                </div>

                <div>
                  <label className="block font-label-technical text-xs text-[#0b1c30] uppercase mb-2">
                    Project Scope
                  </label>
                  <div className="grid grid-cols-3 gap-3">
                    {['MVP / Prototype', 'Full Product Build', 'Ongoing / Retainer'].map((b) => (
                      <button
                        type="button"
                        key={b}
                        onClick={() => setForm({ ...form, budget: b })}
                        className={`py-3 px-2 rounded-xl font-label-technical text-xs border cursor-pointer transition-all ${
                          form.budget === b
                            ? 'bg-[#004ac6] text-white border-[#004ac6] font-bold'
                            : 'bg-gray-50 border-gray-200 text-[#0b1c30]'
                        }`}
                      >
                        {b}
                      </button>
                    ))}
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="w-full py-3.5 bg-[#004ac6] text-white rounded-xl font-label-caps text-xs uppercase"
                >
                  Continue to Contact Details &rarr;
                </button>
              </>
            ) : (
              <>
                <div>
                  <label className="block font-label-technical text-xs text-[#0b1c30] uppercase mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="e.g. Sarah Connor"
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl font-sans text-sm"
                  />
                </div>

                <div>
                  <label className="block font-label-technical text-xs text-[#0b1c30] uppercase mb-2">
                    Work Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="sarah@cyberdyne.io"
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl font-sans text-sm"
                  />
                </div>

                <div>
                  <label className="block font-label-technical text-xs text-[#0b1c30] uppercase mb-2">
                    Brief Notes / Key Goals
                  </label>
                  <textarea
                    rows={3}
                    value={form.details}
                    onChange={(e) => setForm({ ...form, details: e.target.value })}
                    placeholder="Describe your core requirements..."
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl font-sans text-sm"
                  />
                </div>

                <div className="flex gap-4">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="w-1/3 py-3.5 border border-gray-300 rounded-xl font-label-technical text-xs"
                  >
                    &larr; Back
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-2/3 py-3.5 bg-[#004ac6] hover:bg-[#2563eb] disabled:bg-[#004ac6]/70 text-white rounded-xl font-label-caps text-xs uppercase font-bold disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Submitting...' : 'Submit Project Brief'}
                  </button>
                </div>
              </>
            )}
          </form>
        )}
      </div>
    </div>
  );
};

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
  onStartProject: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  project,
  onClose,
  onStartProject,
}) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md animate-fade-in">
      <div className="bg-white text-[#0b1c30] w-full max-w-4xl rounded-3xl p-6 sm:p-8 border border-white/60 shadow-2xl max-h-[90vh] overflow-y-auto no-scrollbar">
        <div className="flex justify-between items-start pb-4 border-b border-gray-200">
          <div>
            <div className="flex items-center gap-3 mb-1">
              <span className="font-label-technical text-[#004ac6] font-bold">
                {project.categoryLabel}
              </span>
              <span className="font-label-technical text-gray-500 text-xs">
                {project.buildVersion}
              </span>
            </div>
            <h3 className="font-sans font-extrabold text-3xl sm:text-4xl">{project.title}</h3>
          </div>
          <button onClick={onClose} className="p-2 text-gray-400 hover:text-black cursor-pointer">
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        <div className="py-6 space-y-6">
          <div className="h-64 sm:h-80 rounded-2xl overflow-hidden border border-gray-200">
            <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover" />
          </div>

          <div>
            <h4 className="font-label-technical text-xs text-[#004ac6] uppercase font-bold mb-2">
              ARCHITECTURAL BREAKDOWN
            </h4>
            <p className="font-sans text-sm sm:text-base text-[#434655] leading-relaxed">
              {project.fullDetails || project.description}
            </p>
            {project.highlights && project.highlights.length > 0 && (
              <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {project.highlights.map((h, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 bg-blue-50/70 border border-blue-100 rounded-xl px-4 py-3"
                  >
                    <span className="material-symbols-outlined text-[#004ac6] text-lg mt-0.5 shrink-0">check_circle</span>
                    <span className="font-sans text-sm text-[#0b1c30] leading-snug">{h}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div>
            <h4 className="font-label-technical text-xs text-[#004ac6] uppercase font-bold mb-3">
              TELEMETRY & PERFORMANCE BENCHMARKS
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {project.metrics.map((m, i) => (
                <div key={i} className="bg-blue-50/70 p-4 rounded-xl border border-blue-100">
                  <span className="font-label-technical text-[10px] text-gray-500 block uppercase">
                    {m.label}
                  </span>
                  <span className="font-sans font-bold text-xl text-[#004ac6]">{m.value}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-label-technical text-xs text-[#004ac6] uppercase font-bold mb-3">
              CORE TECH STACK
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-gray-100 border border-gray-200 rounded-lg font-technical text-xs text-[#0b1c30]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-4 border-t border-gray-200 flex flex-col sm:flex-row justify-between items-center gap-4">
          <span className="font-label-technical text-xs text-gray-500">
            {project.lat} // STATUS: {project.status}
          </span>
          <div className="flex gap-4 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="flex-1 sm:flex-initial px-6 py-2.5 border border-gray-300 rounded-xl font-label-technical text-xs"
            >
              Close
            </button>
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="flex-1 sm:flex-initial px-6 py-2.5 bg-[#0b1c30] text-white rounded-xl font-label-caps text-xs text-center hover:bg-[#1d2f45]"
              >
                {project.linkLabel || 'Visit Live Project'}
              </a>
            )}
            <button
              onClick={() => {
                onClose();
                onStartProject();
              }}
              className="flex-1 sm:flex-initial px-6 py-2.5 bg-[#004ac6] text-white rounded-xl font-label-caps text-xs"
            >
              Commission Similar Build
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
