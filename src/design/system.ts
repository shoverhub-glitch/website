import { colors, glass, transitions } from './tokens';

export function getGlassStyles(isDark: boolean) {
  const g = isDark ? glass.dark : glass.light;
  return {
    background: g.background,
    border: g.border,
    backdropFilter: g.backdropFilter,
    WebkitBackdropFilter: g.backdropFilter,
    boxShadow: g.boxShadow,
  };
}

export function getGlassSurfaceStyles(isDark: boolean, elevation: 'low' | 'medium' | 'high' = 'medium') {
  const c = isDark ? colors.dark : colors.light;
  const g = isDark ? glass.dark : glass.light;
  const opacityMap = { low: 0.5, medium: 0.7, high: 0.85 };
  const bg = isDark
    ? `rgba(22,22,30,${opacityMap[elevation]})`
    : `rgba(255,255,255,${opacityMap[elevation]})`;
  return {
    background: bg,
    border: `1px solid ${c.border}`,
    backdropFilter: g.backdropFilter,
    WebkitBackdropFilter: g.backdropFilter,
    boxShadow: g.boxShadow,
    borderRadius: '1rem',
    transition: `all ${transitions.normal}`,
  };
}

export const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] },
};

export const staggerContainer = {
  animate: {
    transition: { staggerChildren: 0.1 },
  },
};

export const staggerItem = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] } },
};
