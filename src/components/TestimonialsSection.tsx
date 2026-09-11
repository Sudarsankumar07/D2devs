import { useState } from 'react';
import type { Testimonial } from '../types';

interface TestimonialsSectionProps {
  communityReviews: Testimonial[];
  onOpenReviewModal: () => void;
}

const StarRow: React.FC<{ rating: number; large?: boolean }> = ({ rating, large }) => (
  <div className={`flex ${large ? 'gap-1.5' : 'gap-1'}`}>
    {[1, 2, 3, 4, 5].map((star) => (
      <span
        key={star}
        className={`material-symbols-outlined ${large ? 'text-xl' : 'text-base'}`}
        style={{
          color: star <= rating ? '#004ac6' : '#c3c6d7',
          fontVariationSettings: star <= rating ? "'FILL' 1" : "'FILL' 0",
        }}
      >
        star
      </span>
    ))}
  </div>
);

const initials = (name: string) =>
  name
    .split(' ')
    .map((p) => p[0])
    .slice(0, 2)
    .join('')
    .toUpperCase();

const AvatarCircle: React.FC<{ t: Testimonial; large?: boolean }> = ({ t, large }) => {
  const size = large ? 'w-20 h-20 md:w-24 md:h-24' : 'w-14 h-14 md:w-16 md:h-16';
  const img = t.logoUrl || t.avatarUrl;
  return (
    <div
      className={`${size} rounded-full overflow-hidden ring-4 ring-[#f8f9ff] bg-white flex items-center justify-center shadow-xl shrink-0`}
    >
      {img ? (
        <img src={img} alt={t.company || t.author} className="w-full h-full object-contain p-2" />
      ) : (
        <span
          className={`font-label-technical font-bold text-white bg-[#004ac6] w-full h-full flex items-center justify-center ${
            large ? 'text-xl' : 'text-sm'
          }`}
        >
          {initials(t.author)}
        </span>
      )}
    </div>
  );
};

interface ReviewCardProps {
  t: Testimonial;
  isCenter: boolean;
}

const ReviewCard: React.FC<ReviewCardProps> = ({ t, isCenter }) => (
  <div
    className={`relative w-full min-w-0 transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] ${
      isCenter
        ? 'z-20'
        : 'opacity-70 hover:opacity-100 z-10 mt-6 md:mt-10'
    }`}
  >
    {/* Accent blob behind card (reference-style layered shape) */}
    <div
      className={`absolute inset-0 bg-[#b4c5ff] rounded-[36px] translate-x-3 translate-y-3 -z-10 ${
        isCenter ? 'rotate-2' : 'rotate-3'
      }`}
    ></div>

    {/* Card */}
    <div
      className={`relative bg-white border border-[#c3c6d7]/70 rounded-[36px] text-center shadow-[0_24px_60px_rgba(0,74,198,0.12)] ${
      isCenter ? 'p-8 md:p-10' : 'p-6 md:p-7'
      }`}
    >
      {/* Overlapping avatar/logo circle */}
      <div className="absolute left-1/2 -translate-x-1/2 -top-10 md:-top-12">
        <AvatarCircle t={t} large={isCenter} />
      </div>

      <div className={isCenter ? 'pt-14 md:pt-16' : 'pt-10 md:pt-12'}>
        <h4
          className={`font-sans font-bold text-[#0b1c30] ${
            isCenter ? 'text-xl md:text-2xl' : 'text-lg'
          }`}
        >
          {t.author}
        </h4>
        <p
          className={`font-label-technical text-[#004ac6] mt-1 ${
            isCenter ? 'text-xs md:text-sm' : 'text-[11px]'
          }`}
        >
          {t.role}
          {t.company && t.company !== '—' ? ` · ${t.company}` : ''}
        </p>

        {/* Quote glyph */}
        <span
          className={`material-symbols-outlined text-[#004ac6] block mt-3 ${
            isCenter ? 'text-3xl' : 'text-2xl'
          }`}
          style={{ fontVariationSettings: "'FILL' 1" }}
        >
          format_quote
        </span>

        <p
          className={`font-sans leading-relaxed text-[#434655] mt-2 ${
            isCenter ? 'text-base md:text-lg' : 'text-sm'
          }`}
        >
          {t.quote}
        </p>

        <div className="flex items-center justify-center gap-3 mt-5">
          {typeof t.rating === 'number' && <StarRow rating={t.rating} large={isCenter} />}
          <span className="inline-flex items-center gap-1 font-label-technical text-[9px] font-bold text-[#004ac6] bg-[#dbe1ff] border border-[#b4c5ff] px-2.5 py-1 rounded-full">
            <span className="material-symbols-outlined text-xs">task_alt</span>
            CLIENT REVIEW
          </span>
        </div>
      </div>
    </div>
  </div>
);

/* __CAROUSEL_BODY__ */

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({
  communityReviews,
  onOpenReviewModal,
}) => {
  const [active, setActive] = useState(0);
  const n = communityReviews.length;
  const safeActive = n ? Math.min(active, n - 1) : 0;

  const prev = () => n > 1 && setActive((a) => (a - 1 + n) % n);
  const next = () => n > 1 && setActive((a) => (a + 1) % n);

  // Determine which reviews sit left / center / right
  const cards: { t: Testimonial; position: 'left' | 'center' | 'right' }[] = [];
  if (n === 1) {
    cards.push({ t: communityReviews[0], position: 'center' });
  } else if (n === 2) {
    cards.push({ t: communityReviews[(safeActive + 1) % 2], position: 'left' });
    cards.push({ t: communityReviews[safeActive], position: 'center' });
  } else if (n > 2) {
    cards.push({ t: communityReviews[(safeActive - 1 + n) % n], position: 'left' });
    cards.push({ t: communityReviews[safeActive], position: 'center' });
    cards.push({ t: communityReviews[(safeActive + 1) % n], position: 'right' });
  }

  const arrowClass =
    'w-11 h-11 rounded-full bg-white border border-[#c3c6d7] text-[#004ac6] flex items-center justify-center hover:bg-[#004ac6] hover:border-[#004ac6] hover:text-white transition-colors cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed shadow-sm';

  return (
    <section id="testimonials" className="px-4 md:px-10 py-20 relative z-20">
      <div className="relative futuristic-pane data-mesh rounded-[40px] px-4 sm:px-8 md:px-16 py-16 md:py-20 shadow-[0_30px_80px_rgba(0,74,198,0.08)]">

        {/* Header */}
        <div className="relative z-10 flex flex-col items-center text-center gap-3 mb-12 md:mb-16">
          <span className="font-label-technical text-[#004ac6] text-xs opacity-80">
            [ 05 // TELEMETRY &amp; VERIFICATION ]
          </span>
          <h2 className="font-sans font-bold text-3xl sm:text-4xl md:text-5xl tracking-tight text-[#0b1c30]">
            What Our Clients Say About Us
          </h2>
          <button
            onClick={onOpenReviewModal}
            className="mt-2 group flex items-center gap-2 px-6 py-3 bg-[#004ac6] text-white rounded-full font-label-technical text-xs hover:bg-[#2563eb] transition-colors shadow-lg cursor-pointer"
          >
            <span className="material-symbols-outlined text-base group-hover:rotate-90 transition-transform">
              edit_square
            </span>
            WRITE A REVIEW
          </button>
        </div>

        {n === 0 ? (
          /* Empty state */
          <div className="relative z-10 flex flex-col items-center text-center gap-4 mt-10 max-w-md mx-auto">
            <span className="material-symbols-outlined text-6xl text-[#004ac6]/60">rate_review</span>
            <p className="font-sans text-lg text-[#434655] leading-relaxed">
              No client reviews yet — be the first to share your experience working with D²devs!
            </p>
          </div>
        ) : (
          <>
            {/* Carousel stage */}
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 items-start gap-4 md:gap-6 max-w-[1120px] mx-auto md:px-10">
              {n > 3 && (
                <button
                  onClick={prev}
                  aria-label="Previous review"
                  className={`${arrowClass} absolute left-0 top-1/2 -translate-y-1/2 hidden md:flex z-30`}
                >
                  <span className="material-symbols-outlined">chevron_left</span>
                </button>
              )}

              {cards.map(({ t, position }) => (
                <div
                  key={t.id}
                  onClick={() =>
                    position !== 'center' &&
                    setActive(communityReviews.findIndex((r) => r.id === t.id))
                  }
                  className={`${position === 'center' ? '' : 'hidden md:block cursor-pointer'} ${
                    n === 1 && position === 'center' ? 'md:col-start-2' : ''
                  }`}
                >
                  <ReviewCard t={t} isCenter={position === 'center'} />
                </div>
              ))}

              {n > 3 && (
                <button
                  onClick={next}
                  aria-label="Next review"
                  className={`${arrowClass} absolute right-0 top-1/2 -translate-y-1/2 hidden md:flex z-30`}
                >
                  <span className="material-symbols-outlined">chevron_right</span>
                </button>
              )}
            </div>

            {/* Mobile arrows */}
            {n > 3 && (
              <div className="flex md:hidden justify-center gap-4 mt-8 relative z-10">
                <button onClick={prev} aria-label="Previous review" className={arrowClass}>
                  <span className="material-symbols-outlined">chevron_left</span>
                </button>
                <button onClick={next} aria-label="Next review" className={arrowClass}>
                  <span className="material-symbols-outlined">chevron_right</span>
                </button>
              </div>
            )}

            {/* Dots */}
            {n > 3 && (
              <div className="relative z-10 flex justify-center items-center gap-2.5 mt-8">
                {communityReviews.map((r, i) => (
                  <button
                    key={r.id}
                    onClick={() => setActive(i)}
                    aria-label={`Go to review ${i + 1}`}
                    className={`rounded-full transition-all duration-300 cursor-pointer ${
                      i === safeActive
                        ? 'w-3.5 h-3.5 bg-[#004ac6] shadow-[0_0_10px_rgba(0,74,198,0.35)]'
                        : 'w-2 h-2 bg-[#c3c6d7] hover:bg-[#737686]'
                    }`}
                  ></button>
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
};

