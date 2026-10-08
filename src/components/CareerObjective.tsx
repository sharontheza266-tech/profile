import { Target, ArrowRight } from 'lucide-react';
import { portfolioData } from '@/data/portfolio';
import SectionHeader from './SectionHeader';

export default function CareerObjective() {
  return (
    <section id="objective" className="relative py-24 md:py-32 bg-neutral-50 overflow-hidden">
      <div className="absolute inset-0 bg-dots opacity-50" />

      <div className="relative max-w-5xl mx-auto px-6 lg:px-8">
        <SectionHeader
          eyebrow="Career Objective"
          title="My Mission"
          icon={<Target size={14} />}
          description="A clear statement of what I aim to achieve and how I plan to create value."
        />

        <div className="reveal relative">
          <div className="relative p-10 md:p-16 rounded-3xl bg-gradient-to-br from-primary-600 via-primary-700 to-secondary-700 text-white overflow-hidden shadow-2xl shadow-primary-900/20">
            <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-white/10 blur-3xl" />
            <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-secondary-400/20 blur-3xl" />
            <div className="absolute inset-0 bg-grid opacity-[0.05]" />

            <div className="relative">
              <Target className="text-secondary-300 mb-6" size={48} />

              <p className="text-xl md:text-2xl lg:text-3xl font-light leading-relaxed text-balance">
                {portfolioData.careerObjective}
              </p>

              <div className="mt-10 flex flex-wrap gap-3">
                {['Internships', 'Learnerships', 'Further Studies', 'Entry-Level Roles', 'Training Opportunities'].map((tag, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-sm font-medium backdrop-blur-sm hover:bg-white/20 transition-colors"
                  >
                    <ArrowRight size={14} className="text-secondary-300" />
                    {tag}
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
