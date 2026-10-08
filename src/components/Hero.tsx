import { ArrowDown, Sparkles, GraduationCap, Bot, MonitorCheck } from 'lucide-react';
import { portfolioData } from '@/data/portfolio';

export default function Hero() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-neutral-950">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-950 via-neutral-950 to-secondary-950" />
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              'radial-gradient(circle at 20% 30%, rgba(12, 141, 231, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(48, 201, 130, 0.25) 0%, transparent 50%)',
          }}
        />
        <div className="absolute inset-0 bg-grid opacity-[0.07]" />
      </div>

      <div className="absolute top-1/4 left-10 w-72 h-72 rounded-full bg-primary-500/20 blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 rounded-full bg-secondary-500/20 blur-3xl animate-float" style={{ animationDelay: '2s' }} />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-20 pb-10">
        <div className="animate-fade-in-down mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full glass-dark border border-white/10 text-white/80 text-sm">
          <Sparkles size={16} className="text-secondary-400" />
          <span>Professional Portfolio</span>
        </div>

        <h1 className="animate-fade-in-up text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-[1.05] tracking-tight mb-6" style={{ animationDelay: '0.1s', opacity: 0 }}>
          Sharon Lindokuhle
          <br />
          <span className="gradient-text">Theza</span>
        </h1>

        <p className="animate-fade-in-up text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-4 leading-relaxed" style={{ animationDelay: '0.2s', opacity: 0 }}>
          {portfolioData.tagline}
        </p>

        <p className="animate-fade-in-up text-base text-white/50 max-w-xl mx-auto mb-10 leading-relaxed" style={{ animationDelay: '0.3s', opacity: 0 }}>
          Matric · AI Certified · ICDL Certified — ready to bring digital skills, critical thinking, and a passion for learning to the workplace.
        </p>

        <div className="animate-fade-in-up flex flex-wrap items-center justify-center gap-3 mb-12" style={{ animationDelay: '0.4s', opacity: 0 }}>
          {[
            { icon: GraduationCap, label: 'Matric' },
            { icon: Bot, label: 'AI Certificate' },
            { icon: MonitorCheck, label: 'ICDL Certificate' },
          ].map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl glass-dark border border-white/10 text-white/90 text-sm font-medium hover:border-secondary-400/50 hover:bg-white/5 transition-all duration-300 hover:scale-105"
            >
              <item.icon size={18} className="text-secondary-400" />
              {item.label}
            </div>
          ))}
        </div>

        <div className="animate-fade-in-up flex flex-col sm:flex-row items-center justify-center gap-4" style={{ animationDelay: '0.5s', opacity: 0 }}>
          <button
            onClick={() => scrollTo('profile')}
            className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-semibold text-sm shadow-lg shadow-primary-500/30 hover:shadow-xl hover:shadow-primary-500/40 hover:scale-105 transition-all duration-300"
          >
            Explore Portfolio
          </button>
          <button
            onClick={() => scrollTo('contact')}
            className="px-8 py-3.5 rounded-xl glass-dark border border-white/20 text-white font-semibold text-sm hover:bg-white/10 hover:scale-105 transition-all duration-300"
          >
            Get in Touch
          </button>
        </div>
      </div>

      <button
        onClick={() => scrollTo('profile')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/40 hover:text-white/80 transition-colors animate-bounce"
      >
        <ArrowDown size={28} />
      </button>
    </section>
  );
}
