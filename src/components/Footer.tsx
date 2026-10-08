import { Heart, ArrowUp } from 'lucide-react';
import { portfolioData } from '@/data/portfolio';

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="relative bg-neutral-950 text-white py-12 overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-[0.03]" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center text-white font-bold text-sm">
              {portfolioData.initials}
            </div>
            <div>
              <p className="font-semibold text-sm">{portfolioData.name}</p>
              <p className="text-xs text-white/40">{portfolioData.tagline}</p>
            </div>
          </div>

          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-sm text-white/70 hover:text-white hover:bg-white/10 transition-all duration-300"
          >
            <span>Back to Top</span>
            <ArrowUp size={16} className="group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

        <div className="mt-8 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/40 flex items-center gap-1.5">
            © 2026 {portfolioData.name}. Made with
            <Heart size={12} className="text-secondary-400 fill-current" />
            and dedication.
          </p>
          <p className="text-xs text-white/30">
            Professional Portfolio · Matric · AI Certified · ICDL Certified
          </p>
        </div>
      </div>
    </footer>
  );
}
