import { ReactNode } from 'react';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  padding?: 'sm' | 'md' | 'lg';
  as?: 'div' | 'article' | 'section';
}

const paddingMap = {
  sm: 'p-4',
  md: 'p-6',
  lg: 'p-8',
};

export function GlassCard({
  children,
  className = '',
  hover = true,
  padding = 'md',
  as: Component = 'div',
}: GlassCardProps) {
  return (
    <Component
      className={`glass rounded-2xl ${paddingMap[padding]} ${
        hover ? 'glass-hover transition-all duration-250' : ''
      } ${className}`}
    >
      {children}
    </Component>
  );
}
