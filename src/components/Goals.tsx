import { Flag, TrendingUp, Target, Award } from 'lucide-react';
import { portfolioData } from '@/data/portfolio';
import SectionHeader from './SectionHeader';

const icons = [Target, TrendingUp, Award];
const colorMap = [
  { bg: 'from-primary-500 to-primary-700', light: 'bg-primary-50', text: 'text-primary-600', border: 'border-primary-200' },
  { bg: 'from-secondary-500 to-secondary-700', light: 'bg-secondary-50', text: 'text-secondary-600', border: 'border-secondary-200' },
  { bg: 'from-accent-500 to-accent-700', light: 'bg-accent-50', text: 'text-accent-600', border: 'border-accent-200' },
];

export default function Goals() {
  return (
    <section id="goals" className="relative py-24 md:py-32 bg-neutral-950 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-neutral-950 via-primary-950/30 to-neutral-950" />
        <div className="absolute inset-0 bg-grid opacity-[0.05]" />
      </div>

      <div className="absolute top-1/3 right-0 w-96 h-96 rounded-full bg-primary-500/10 blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 rounded-full bg-secondary-500/10 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="reveal text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-secondary-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <Flag size={14} />
            Career Goals
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4">
            My Path Forward
          </h2>
          <p className="text-base md:text-lg text-white/50 max-w-2xl mx-auto leading-relaxed">
            A clear vision for my professional journey, from immediate next steps to long-term aspirations.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {portfolioData.careerGoals.map((goal, i) => {
            const Icon = icons[i] || Target;
            const colors = colorMap[i];
            return (
              <div
                key={i}
                className={`reveal reveal-delay-${i + 1} group relative p-8 rounded-2xl glass-dark border border-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-2`}
              >
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${colors.bg} flex items-center justify-center text-white mb-6 shadow-lg transition-transform group-hover:scale-110`}>
                  <Icon size={28} />
                </div>

                <div className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${colors.light} ${colors.text} mb-3`}>
                  {goal.title}
                </div>

                <p className="text-white/70 leading-relaxed text-sm">
                  {goal.description}
                </p>

                <div className={`mt-6 h-1 rounded-full bg-gradient-to-r ${colors.bg} opacity-60 group-hover:opacity-100 transition-opacity`} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
