import { useState } from 'react';
import type { Testimonial } from '../types';
import { SERVICES } from '../data';
import { buildMailtoLink } from '../reviews';

interface ReviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (review: Testimonial) => void;
}

const emptyForm = {
  author: '',
  role: '',
  company: '',
  email: '',
  product: '',
  logoUrl: '',
  rating: 5,
  quote: '',
};

export const ReviewModal: React.FC<ReviewModalProps> = ({ isOpen, onClose, onSubmit }) => {
  const [form, setForm] = useState(emptyForm);
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const isValid = form.author.trim() && form.quote.trim() && form.rating >= 1;

  const update = (key: keyof typeof emptyForm, value: string | number) =>
    setForm((f) => ({ ...f, [key]: value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isValid) return;
    const review: Testimonial = {
      id: `community_${Date.now()}`,
      quote: form.quote.trim(),
      author: form.author.trim(),
      role: form.role.trim() || 'Client',
      company: form.company.trim() || '—',
      buildId: 'community_review',
      rating: form.rating,
      product: form.product.trim() || 'Custom Build',
      logoUrl: form.logoUrl.trim() || undefined,
      email: form.email.trim(),
      source: 'community',
      createdAt: new Date().toISOString(),
    };
    onSubmit(review);
    setSubmitted(true);
    setForm(emptyForm);
  };

  const mailto = buildMailtoLink({
    id: 'community',
    quote: form.quote,
    author: form.author || '—',
    role: form.role || '—',
    company: form.company || '—',
    buildId: 'community_review',
    rating: form.rating,
    product: form.product,
    email: form.email,
  });

  const inputClass =
    'w-full px-4 py-2.5 bg-white border border-gray-200 rounded-xl font-sans text-sm text-[#0b1c30] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#004ac6]/40 focus:border-[#004ac6] transition-colors';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-md animate-fade-in">
      <div className="bg-white text-[#0b1c30] w-full max-w-2xl rounded-3xl shadow-2xl border border-gray-100 overflow-hidden max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="flex justify-between items-center px-6 sm:px-8 py-5 border-b border-gray-100 bg-gradient-to-r from-[#f0f4ff] to-white">
          <div className="flex items-center gap-3">
            <span className="w-3 h-3 rounded-full bg-[#004ac6] animate-pulse"></span>
            <div>
              <span className="font-label-technical text-xs text-[#004ac6] font-bold block">
                [ CLIENT_FEEDBACK // NEW_ENTRY ]
              </span>
              <span className="font-sans font-bold text-lg">Write a Review</span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors text-gray-500 hover:text-[#0b1c30] cursor-pointer"
            aria-label="Close"
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>
        {submitted ? (
          /* Success State */
          <div className="p-8 sm:p-12 text-center flex flex-col items-center gap-4">
            <span className="material-symbols-outlined text-6xl text-green-600">verified</span>
            <h3 className="font-sans font-bold text-2xl">Review Recorded!</h3>
            <p className="font-sans text-sm text-[#434655] max-w-md leading-relaxed">
              Thank you! Your review is now visible on this device. To make it appear for
              <strong> every visitor</strong>, send us a copy and we&apos;ll feature it as a
              Verified Build on the site.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 mt-2 w-full sm:w-auto">
              <a
                href={mailto}
                className="px-6 py-2.5 bg-[#004ac6] text-white rounded-xl font-label-technical text-xs text-center hover:bg-[#2563eb] transition-colors"
              >
                Send Copy via Email
              </a>
              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="px-6 py-2.5 border border-gray-300 rounded-xl font-label-technical text-xs hover:bg-gray-50"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          /* Form */
          <form onSubmit={handleSubmit} className="px-6 sm:px-8 py-6 space-y-5 overflow-y-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="font-label-technical text-[10px] text-[#004ac6] uppercase font-bold block mb-1.5">
                  Your Name *
                </label>
                <input
                  type="text"
                  required
                  value={form.author}
                  onChange={(e) => update('author', e.target.value)}
                  placeholder="e.g. Priya Sharma"
                  className={inputClass}
                />
              </div>
              <div>
                <label className="font-label-technical text-[10px] text-[#004ac6] uppercase font-bold block mb-1.5">
                  Role / Designation
                </label>
                <input
                  type="text"
                  value={form.role}
                  onChange={(e) => update('role', e.target.value)}
                  placeholder="e.g. Founder"
                  className={inputClass}
                />
              </div>
              <div>
                <label className="font-label-technical text-[10px] text-[#004ac6] uppercase font-bold block mb-1.5">
                  Company / Organization
                </label>
                <input
                  type="text"
                  value={form.company}
                  onChange={(e) => update('company', e.target.value)}
                  placeholder="e.g. TechFlow Solutions"
                  className={inputClass}
                />
              </div>
              <div>
                <label className="font-label-technical text-[10px] text-[#004ac6] uppercase font-bold block mb-1.5">
                  Email (not displayed)
                </label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => update('email', e.target.value)}
                  placeholder="you@company.com"
                  className={inputClass}
                />
              </div>
            </div>

            <div>
              <label className="font-label-technical text-[10px] text-[#004ac6] uppercase font-bold block mb-1.5">
                Product / Service Built
              </label>
              <select
                value={form.product}
                onChange={(e) => update('product', e.target.value)}
                className={inputClass}
              >
                <option value="">Select what we built for you…</option>
                {SERVICES.map((s) => (
                  <option key={s.id} value={s.title}>
                    {s.title}
                  </option>
                ))}
                <option value="Other">Other / Custom Build</option>
              </select>
            </div>
            {/* Star Rating */}
            <div>
              <label className="font-label-technical text-[10px] text-[#004ac6] uppercase font-bold block mb-1.5">
                Company Logo URL (optional)
              </label>
              <input
                type="url"
                value={form.logoUrl}
                onChange={(e) => update('logoUrl', e.target.value)}
                placeholder="https://yourcompany.com/logo.png"
                className={inputClass}
              />
              <p className="font-label-technical text-[9px] text-gray-400 mt-1">
                Shown in the circle above your review — leave empty to use your initials.
              </p>
            </div>

            {/* Star Rating */}
            <div>
              <label className="font-label-technical text-[10px] text-[#004ac6] uppercase font-bold block mb-1.5">
                Rating *
              </label>
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => update('rating', star)}
                    className="cursor-pointer transition-transform hover:scale-110"
                    aria-label={`${star} star`}
                  >
                    <span
                      className="material-symbols-outlined text-3xl"
                      style={{
                        color: star <= form.rating ? '#f59e0b' : '#d1d5db',
                        fontVariationSettings: star <= form.rating ? "'FILL' 1" : "'FILL' 0",
                      }}
                    >
                      star
                    </span>
                  </button>
                ))}
                <span className="font-label-technical text-xs text-[#434655] ml-2">
                  {form.rating}.0 / 5.0
                </span>
              </div>
            </div>

            <div>
              <label className="font-label-technical text-[10px] text-[#004ac6] uppercase font-bold block mb-1.5">
                Your Review *
              </label>
              <textarea
                required
                rows={4}
                value={form.quote}
                onChange={(e) => update('quote', e.target.value)}
                placeholder="Share your experience working with D²devs — what we built, how it went, results you saw…"
                className={`${inputClass} resize-none`}
              />
            </div>

            {/* Footer */}
            <div className="pt-4 border-t border-gray-100 flex flex-col sm:flex-row justify-between items-center gap-3">
              <span className="font-label-technical text-[10px] text-gray-400">
                STORED LOCALLY // NOT PUBLIC UNTIL VERIFIED
              </span>
              <div className="flex gap-3 w-full sm:w-auto">
                <button
                  type="button"
                  onClick={onClose}
                  className="flex-1 sm:flex-initial px-6 py-2.5 border border-gray-300 rounded-xl font-label-technical text-xs hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={!isValid}
                  className="flex-1 sm:flex-initial px-6 py-2.5 bg-[#004ac6] text-white rounded-xl font-label-technical text-xs hover:bg-[#2563eb] disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                >
                  Submit Review
                </button>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
