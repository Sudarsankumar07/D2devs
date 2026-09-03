export const Footer: React.FC = () => {
  return (
    <footer className="w-full px-6 md:px-16 py-12 bg-surface border-t border-[#c3c6d7]/30 relative z-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start gap-8">
        <div className="flex flex-col gap-3">
          <span className="font-label-caps text-[#434655] font-bold text-lg">D²devs</span>
          <p className="font-label-technical text-xs text-[#444749] max-w-xs">
            Software solutions, website development, and AI product development company in Salem, Tamil Nadu, India.
          </p>
          <div className="space-y-1 mt-2">
            <p className="font-label-technical text-xs text-[#444749]">
              780/4, Shivaji Nagar, R.K. Theater Opp, P.M. Kovil Post
            </p>
            <p className="font-label-technical text-xs text-[#444749]">
              Salem - 636003, Tamil Nadu, India
            </p>
            <p className="font-label-technical text-xs text-[#444749]">
              d2developerss@gmail.com | +91 7448440471
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <div className="flex flex-wrap justify-center gap-8">
            <a
              href="#about"
              className="font-label-technical text-xs text-[#444749] hover:text-[#004ac6] transition-colors"
            >
              About
            </a>
            <a
              href="#services"
              className="font-label-technical text-xs text-[#444749] hover:text-[#004ac6] transition-colors"
            >
              Services
            </a>
            <a
              href="#faq"
              className="font-label-technical text-xs text-[#444749] hover:text-[#004ac6] transition-colors"
            >
              FAQ
            </a>
            <a
              href="#contact"
              className="font-label-technical text-xs text-[#444749] hover:text-[#004ac6] transition-colors"
            >
              Contact
            </a>
            <a
              href="https://github.com/d2developers-org"
              target="_blank"
              rel="noopener noreferrer"
              className="font-label-technical text-xs text-[#444749] hover:text-[#004ac6] transition-colors"
            >
              Github
            </a>
          </div>
          <p className="font-label-technical text-xs text-[#444749] text-center md:text-right">
            © {new Date().getFullYear()} D²devs. Software · Web · Mobile · AI · Education.
          </p>
        </div>
      </div>
    </footer>
  );
};
