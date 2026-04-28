import { ReactNode, useRef, MouseEvent } from 'react';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  padding?: 'sm' | 'md' | 'lg' | 'none';
  as?: 'div' | 'article' | 'section';
}

const paddingMap = {
  sm: 'p-4',
  md: 'p-6',
  lg: 'p-8',
  none: '',
};

export function GlassCard({
  children,
  className = '',
  hover = true,
  padding = 'md',
  as: Component = 'div',
}: GlassCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!hover || !cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = (y - centerY) / 20;
    const rotateY = (centerX - x) / 20;
    
    cardRef.current.style.transform = `translateY(-20px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
  };

  const handleMouseLeave = () => {
    if (!hover || !cardRef.current) return;
    cardRef.current.style.transform = `translateY(0) rotateX(0) rotateY(0) scale(1)`;
  };

  return (
    <Component
      ref={cardRef as any}
      className={`glass-card-3d rounded-xl ${paddingMap[padding]} ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="card-inner-3d">
        {children}
      </div>
    </Component>
  );
}
