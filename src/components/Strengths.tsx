import { Zap, TrendingUp, Target, ArrowRight } from 'lucide-react';
import { portfolioData } from '@/data/portfolio';
import SectionHeader from './SectionHeader';

export default function Strengths() {
  return (
    <section id="strengths" className="relative py-24 md:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeader
          eyebrow="Personal Strengths"
          title="What Sets Me Apart"
          icon={<Zap size={14} />}
          description="The personal qualities that drive my approach to work, learning, and collaboration."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioData.personalStrengths.map((strength, i) => (
            <div
              key={i}
              className={`reveal group relative p-7 rounded-2xl bg-gradient-to-br from-neutral-50 to-white border border-neutral-200/60 hover:shadow-xl hover:shadow-neutral-900/5 hover:-translate-y-1 transition-all duration-300 overflow-hidden`}
              style={{ transitionDelay: `${(i % 3) * 0.1}s` }}
            >
              <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full bg-primary-50/50 group-hover:bg-primary-100/50 transition-colors duration-500" />

              <div className="relative">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center text-white font-bold text-sm shadow-md">
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <h3 className="text-lg font-bold text-neutral-900">
                    {strength.title}
                  </h3>
                </div>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  {strength.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
