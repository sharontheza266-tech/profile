import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { navSections, portfolioData } from '@/data/portfolio';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleClick = (id: string) => {
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <div className="fixed top-0 left-0 right-0 h-1 z-[60] bg-transparent">
        <div
          id="scroll-progress-bar"
          className="h-full bg-gradient-to-r from-primary-500 via-secondary-500 to-primary-500 transition-all duration-100"
          style={{ width: '0%' }}
        />
      </div>

      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'glass shadow-lg shadow-neutral-900/5' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            <button
              onClick={() => handleClick('home')}
              className="flex items-center gap-3 group"
            >
              <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-primary-500/20 transition-transform group-hover:scale-110">
                {portfolioData.initials}
              </div>
              <span className={`font-semibold text-sm md:text-base transition-colors ${scrolled ? 'text-neutral-900' : 'text-white'}`}>
                {portfolioData.name}
              </span>
            </button>

            <div className="hidden lg:flex items-center gap-1">
              {navSections.map((section) => (
                <button
                  key={section.id}
                  data-nav-link={section.id}
                  onClick={() => handleClick(section.id)}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    scrolled
                      ? 'text-neutral-600 hover:text-primary-600 hover:bg-primary-50'
                      : 'text-white/80 hover:text-white hover:bg-white/10'
                  } nav-active:bg-primary-50 nav-active:text-primary-600 nav-active:shadow-sm`}
                >
                  {section.label}
                </button>
              ))}
            </div>

            <button
              className={`lg:hidden p-2 rounded-lg transition-colors ${scrolled ? 'text-neutral-900' : 'text-white'}`}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="lg:hidden glass border-t border-neutral-200/50 animate-fade-in-down">
            <div className="px-6 py-4 space-y-1 max-h-[calc(100vh-5rem)] overflow-y-auto">
              {navSections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => handleClick(section.id)}
                  className="block w-full text-left px-4 py-3 rounded-lg text-sm font-medium text-neutral-700 hover:bg-primary-50 hover:text-primary-600 transition-colors"
                >
                  {section.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
