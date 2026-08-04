export const Footer: React.FC = () => {
  return (
    <footer className="w-full px-6 md:px-16 py-12 flex flex-col md:flex-row justify-between items-center gap-6 bg-surface border-t border-[#c3c6d7]/30 relative z-20">
      <div className="flex flex-col items-center md:items-start gap-2">
        <span className="font-label-caps text-[#434655] font-bold text-lg">D²devs</span>
        <p className="font-label-technical text-xs text-[#444749]">
          © {new Date().getFullYear()} D²devs. Web · Mobile · Automation · AI · Education.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-8">
        <a
          href="#privacy"
          onClick={(e) => e.preventDefault()}
          className="font-label-technical text-xs text-[#444749] hover:text-[#004ac6] transition-colors"
        >
          Privacy Policy
        </a>
        <a
          href="#terms"
          onClick={(e) => e.preventDefault()}
          className="font-label-technical text-xs text-[#444749] hover:text-[#004ac6] transition-colors"
        >
          Terms of Service
        </a>
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="font-label-technical text-xs text-[#444749] hover:text-[#004ac6] transition-colors"
        >
          Github
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="font-label-technical text-xs text-[#444749] hover:text-[#004ac6] transition-colors"
        >
          LinkedIn
        </a>
      </div>
    </footer>
  );
};
