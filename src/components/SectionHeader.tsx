import type { ReactNode } from 'react';

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  icon?: ReactNode;
  centered?: boolean;
}

export default function SectionHeader({ eyebrow, title, description, icon, centered = true }: SectionHeaderProps) {
  return (
    <div className={`reveal mb-12 ${centered ? 'text-center' : 'text-left'}`}>
      {eyebrow && (
        <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary-50 text-primary-700 text-xs font-semibold uppercase tracking-wider mb-4 ${centered ? 'mx-auto' : ''}`}>
          {icon}
          {eyebrow}
        </div>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 tracking-tight mb-4">
        {title}
      </h2>
      {description && (
        <p className={`text-base md:text-lg text-neutral-500 leading-relaxed ${centered ? 'max-w-2xl mx-auto' : 'max-w-2xl'}`}>
          {description}
        </p>
      )}
    </div>
  );
}
