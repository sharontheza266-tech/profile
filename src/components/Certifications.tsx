import { GraduationCap, Bot, MonitorCheck, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '@/data/portfolio';
import SectionHeader from './SectionHeader';

const iconMap: Record<string, typeof GraduationCap> = {
  GraduationCap,
  Bot,
  MonitorCheck,
};

const colorMap: Record<string, { bg: string; text: string; border: string; badge: string; dot: string }> = {
  ai: { bg: 'from-primary-500 to-primary-700', text: 'text-primary-600', border: 'hover:border-primary-300', badge: 'bg-primary-50 text-primary-700', dot: 'bg-primary-400' },
  icdl: { bg: 'from-secondary-500 to-secondary-700', text: 'text-secondary-600', border: 'hover:border-secondary-300', badge: 'bg-secondary-50 text-secondary-700', dot: 'bg-secondary-400' },
  matric: { bg: 'from-accent-500 to-accent-700', text: 'text-accent-600', border: 'hover:border-accent-300', badge: 'bg-accent-50 text-accent-700', dot: 'bg-accent-400' },
};

export default function Certifications() {
  return (
    <section id="certifications" className="relative py-24 md:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeader
          eyebrow="Education & Certifications"
          title="Qualifications"
          icon={<GraduationCap size={14} />}
          description="A strong academic foundation complemented by industry-recognised digital and AI certifications."
        />

        <div className="grid lg:grid-cols-3 gap-8">
          {portfolioData.certifications.map((cert, i) => {
            const Icon = iconMap[cert.icon] || GraduationCap;
            const colors = colorMap[cert.id];
            return (
              <div
                key={cert.id}
                id={cert.id === 'matric' ? 'education' : cert.id}
                className={`reveal reveal-delay-${i + 1} group relative rounded-3xl border border-neutral-200/60 ${colors.border} bg-white overflow-hidden hover:shadow-2xl hover:shadow-neutral-900/8 hover:-translate-y-2 transition-all duration-500`}
              >
                <div className={`h-2 bg-gradient-to-r ${colors.bg}`} />

                <div className="p-8">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${colors.bg} flex items-center justify-center text-white mb-6 shadow-lg transition-transform group-hover:scale-110 group-hover:rotate-3`}>
                    <Icon size={32} />
                  </div>

                  <h3 className="text-xl font-bold text-neutral-900 mb-3 leading-tight">
                    {cert.name}
                  </h3>

                  <p className="text-sm text-neutral-500 leading-relaxed mb-6">
                    {cert.description}
                  </p>

                  <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold ${colors.badge} mb-6`}>
                    <CheckCircle2 size={14} />
                    Certified
                  </div>

                  <div className="space-y-2.5">
                    <p className={`text-xs font-semibold uppercase tracking-wider ${colors.text} mb-3`}>
                      Skills Gained
                    </p>
                    {cert.skills.map((skill, j) => (
                      <div key={j} className="flex items-start gap-2.5 text-sm text-neutral-700 leading-relaxed">
                        <span className={`mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 ${colors.dot}`} />
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
