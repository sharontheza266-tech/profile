import { BookOpen, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '@/data/portfolio';
import SectionHeader from './SectionHeader';

export default function Development() {
  return (
    <section id="development" className="relative py-24 md:py-32 bg-neutral-50 overflow-hidden">
      <div className="absolute inset-0 bg-dots opacity-40" />

      <div className="relative max-w-5xl mx-auto px-6 lg:px-8">
        <SectionHeader
          eyebrow="Professional Development"
          title="Continuous Learning"
          icon={<BookOpen size={14} />}
          description="My commitment to ongoing growth, skill development, and staying at the forefront of the digital landscape."
        />

        <div className="reveal">
          <div className="relative p-8 md:p-12 rounded-3xl bg-white border border-neutral-200/60 shadow-xl shadow-neutral-900/5">
            <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-primary-400 via-secondary-400 to-transparent" />

            <div className="space-y-5">
              {portfolioData.professionalDevelopment.map((item, i) => (
                <div
                  key={i}
                  className="reveal flex items-start gap-4 group"
                  style={{ transitionDelay: `${i * 0.1}s` }}
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br from-primary-50 to-secondary-50 flex items-center justify-center group-hover:from-primary-100 group-hover:to-secondary-100 transition-colors duration-300">
                    <CheckCircle2 size={20} className="text-primary-500 group-hover:text-primary-600 transition-colors" />
                  </div>
                  <div className="flex-1 pt-1.5">
                    <p className="text-sm md:text-base text-neutral-700 leading-relaxed group-hover:text-neutral-900 transition-colors">
                      {item}
                    </p>
                  </div>
                  <span className="text-xs font-bold text-neutral-300 pt-2">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-10 pt-8 border-t border-neutral-100">
              <div className="flex flex-wrap items-center justify-center gap-3">
                {['Growth Mindset', 'Lifelong Learner', 'Future-Ready', 'Tech-Savvy'].map((badge, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 rounded-full bg-gradient-to-r from-primary-50 to-secondary-50 text-primary-700 text-sm font-semibold border border-primary-100"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
