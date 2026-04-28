import { ReactNode } from 'react';
import { useScrollAnimation } from '../hooks';

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function ScrollReveal({ children, className = '', delay = 0 }: ScrollRevealProps) {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <div
      ref={ref}
      className={`transition-all duration-600 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
