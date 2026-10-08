import { User, Target, Briefcase, Heart } from 'lucide-react';
import { portfolioData } from '@/data/portfolio';
import SectionHeader from './SectionHeader';

export default function Profile() {
  const cards = [
    {
      icon: Target,
      title: 'Career Interests',
      items: portfolioData.careerInterests,
      color: 'primary',
    },
    {
      icon: Briefcase,
      title: 'Professional Goals',
      items: portfolioData.professionalDevelopment.slice(0, 5).map((d) => d.replace(/^.*?: /, '')),
      color: 'secondary',
    },
    {
      icon: Heart,
      title: 'Personal Strengths',
      items: portfolioData.personalStrengths.map((s) => s.title),
      color: 'accent',
    },
  ];

  return (
    <section id="profile" className="relative py-24 md:py-32 bg-white overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neutral-200 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeader
          eyebrow="Personal Profile"
          title="About Me"
          icon={<User size={14} />}
          description="Get to know my background, aspirations, and what makes me uniquely positioned for the digital workforce."
        />

        <div className="reveal max-w-4xl mx-auto mb-16">
          <div className="relative p-8 md:p-12 rounded-3xl bg-gradient-to-br from-neutral-50 to-primary-50/30 border border-neutral-200/60">
            <div className="absolute top-6 left-8 text-7xl font-serif text-primary-200 leading-none select-none">"</div>
            <p className="relative text-lg md:text-xl text-neutral-700 leading-relaxed font-light pl-8">
              {portfolioData.intro}
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {cards.map((card, i) => (
            <div
              key={i}
              className={`reveal reveal-delay-${i + 1} group p-6 rounded-2xl bg-white border border-neutral-200/60 hover:shadow-xl hover:shadow-neutral-900/5 hover:-translate-y-1 transition-all duration-300`}
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-transform group-hover:scale-110 ${
                card.color === 'primary' ? 'bg-primary-50 text-primary-600' :
                card.color === 'secondary' ? 'bg-secondary-50 text-secondary-600' :
                'bg-accent-50 text-accent-600'
              }`}>
                <card.icon size={24} />
              </div>
              <h3 className="text-lg font-bold text-neutral-900 mb-4">{card.title}</h3>
              <ul className="space-y-2.5">
                {card.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-2.5 text-sm text-neutral-600 leading-relaxed">
                    <span className={`mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 ${
                      card.color === 'primary' ? 'bg-primary-400' :
                      card.color === 'secondary' ? 'bg-secondary-400' :
                      'bg-accent-400'
                    }`} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
