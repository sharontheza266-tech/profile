import {
  MessageSquare, Users, Puzzle, Brain, Clock, ClipboardList,
  Laptop, Search, Bot, Sparkles, Shuffle, Eye, GraduationCap, Briefcase,
  type LucideIcon,
} from 'lucide-react';
import { portfolioData } from '@/data/portfolio';
import SectionHeader from './SectionHeader';

const iconMap: Record<string, LucideIcon> = {
  MessageSquare, Users, Puzzle, Brain, Clock, ClipboardList,
  Laptop, Search, Bot, Sparkles, Shuffle, Eye, GraduationCap, Briefcase,
};

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 md:py-32 bg-neutral-50 overflow-hidden">
      <div className="absolute inset-0 bg-dots opacity-40" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeader
          eyebrow="Core Professional Skills"
          title="Skills & Competencies"
          icon={<Sparkles size={14} />}
          description="A versatile skill set developed through formal education, certifications, and hands-on learning."
        />

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5 mb-20">
          {portfolioData.coreSkills.map((skill, i) => {
            const Icon = iconMap[skill.icon] || Sparkles;
            return (
              <div
                key={i}
                className={`reveal group p-5 rounded-2xl bg-white border border-neutral-200/60 hover:border-primary-300 hover:shadow-lg hover:shadow-primary-500/10 hover:-translate-y-1 transition-all duration-300`}
                style={{ transitionDelay: `${(i % 4) * 0.08}s` }}
              >
                <div className="w-11 h-11 rounded-xl bg-neutral-100 group-hover:bg-primary-50 flex items-center justify-center mb-4 transition-colors duration-300">
                  <Icon size={20} className="text-neutral-600 group-hover:text-primary-600 transition-colors duration-300" />
                </div>
                <h3 className="text-sm font-semibold text-neutral-900 leading-snug">
                  {skill.name}
                </h3>
              </div>
            );
          })}
        </div>

        <div className="reveal">
          <div className="text-center mb-10">
            <h3 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-3">
              Digital & AI Skills
            </h3>
            <p className="text-neutral-500 max-w-xl mx-auto">
              Proficiency levels across key digital and AI competencies.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {portfolioData.digitalAISkills.map((skill, i) => (
              <div key={i} className="reveal" style={{ transitionDelay: `${i * 0.08}s` }}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-neutral-700">{skill.name}</span>
                  <span className="text-xs font-semibold text-neutral-400">{skill.level}%</span>
                </div>
                <div className="h-2.5 rounded-full bg-neutral-200 overflow-hidden">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 transition-all duration-1000 ease-out"
                    style={{ width: '0%' }}
                    ref={(el) => {
                      if (el) {
                        const observer = new IntersectionObserver(
                          (entries) => {
                            entries.forEach((entry) => {
                              if (entry.isIntersecting) {
                                el.style.width = `${skill.level}%`;
                                observer.disconnect();
                              }
                            });
                          },
                          { threshold: 0.3 }
                        );
                        observer.observe(el);
                      }
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
