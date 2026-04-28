export const colors = {
  dark: {
    bg: '#131315',
    bgSecondary: '#1c1b1d',
    bgTertiary: '#201f21',
    surface: '#131315',
    surfaceHover: '#1c1b1d',
    border: 'rgba(255, 255, 255, 0.08)',
    borderHover: 'rgba(0, 240, 255, 0.4)',
    text: '#e5e1e4',
    textSecondary: '#b9cacb',
    textTertiary: '#849495',
    accent: '#00f0ff',
    accentHover: '#00dbe9',
    accentMuted: 'rgba(0, 240, 255, 0.15)',
    success: '#00f89e',
    warning: '#f59e0b',
    error: '#ffb4ab',
  },
  light: {
    bg: '#f8fafc',
    bgSecondary: '#f1f5f9',
    bgTertiary: '#e2e8f0',
    surface: '#ffffff',
    surfaceHover: '#f1f5f9',
    border: 'rgba(0, 0, 0, 0.08)',
    borderHover: 'rgba(0, 105, 112, 0.4)',
    text: '#0f172a',
    textSecondary: '#475569',
    textTertiary: '#64748b',
    accent: '#006970',
    accentHover: '#004f54',
    accentMuted: 'rgba(0, 105, 112, 0.1)',
    success: '#059669',
    warning: '#d97706',
    error: '#dc2626',
  },
} as const;

export const typography = {
  fontFamily: {
    sans: "'Inter', sans-serif",
    display: "'Space Grotesk', sans-serif",
    mono: "'SF Mono', 'Fira Code', monospace",
  },
  fontSize: {
    xs: '0.75rem',
    sm: '0.875rem',
    base: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '1.875rem',
    '4xl': '2.25rem',
    '5xl': '3rem',
    '6xl': '3.75rem',
    '7xl': '4.5rem',
    h1: '40px',
    h2: '32px',
    h3: '24px',
    displayLg: '56px',
    displayXl: '72px',
  },
  fontWeight: {
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },
  lineHeight: {
    tight: 1.1,
    snug: 1.25,
    normal: 1.5,
    relaxed: 1.625,
  },
  letterSpacing: {
    tight: '-0.02em',
    normal: '0',
    wide: '0.02em',
    wider: '0.05em',
    widest: '0.1em',
  },
} as const;

export const spacing = {
  0: '0',
  1: '0.25rem',
  2: '0.5rem',
  3: '0.75rem',
  4: '1rem',
  5: '1.25rem',
  6: '1.5rem',
  8: '2rem',
  10: '2.5rem',
  12: '3rem',
  16: '4rem',
  20: '5rem',
  24: '6rem',
  32: '8rem',
  40: '10rem',
  48: '12rem',
  gutter: '24px',
  xl: '80px',
  lg: '48px',
  md: '24px',
  sm: '12px',
  xs: '4px',
} as const;

export const radius = {
  sm: '0.25rem',
  md: '0.5rem',
  lg: '0.75rem',
  xl: '1rem',
  '2xl': '1.5rem',
  '3xl': '2rem',
  full: '9999px',
} as const;

export const shadows = {
  dark: {
    sm: '0 1px 2px rgba(0,0,0,0.3)',
    md: '0 4px 12px rgba(0,0,0,0.4)',
    lg: '0 8px 32px rgba(0,0,0,0.8)',
    xl: '0 40px 80px rgba(0, 0, 0, 0.8)',
    glow: '0 0 20px rgba(0, 240, 255, 0.15)',
  },
  light: {
    sm: '0 1px 2px rgba(0,0,0,0.05)',
    md: '0 4px 12px rgba(0,0,0,0.08)',
    lg: '0 8px 32px rgba(0, 0, 0, 0.05)',
    xl: '0 20px 40px rgba(0, 0, 0, 0.1)',
    glow: '0 0 20px rgba(0, 105, 112, 0.1)',
  },
} as const;

export const glass = {
  dark: {
    background: 'rgba(255, 255, 255, 0.02)',
    border: '1px solid rgba(255, 255, 255, 0.08)',
    backdropFilter: 'blur(15px)',
    boxShadow: '0 8px 32px rgba(0,0,0,0.8)',
  },
  light: {
    background: 'rgba(255, 255, 255, 0.7)',
    border: '1px solid rgba(0, 0, 0, 0.08)',
    backdropFilter: 'blur(15px)',
    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.05)',
  },
} as const;

export const transitions = {
  fast: '150ms cubic-bezier(0.4, 0, 0.2, 1)',
  normal: '250ms cubic-bezier(0.4, 0, 0.2, 1)',
  slow: '400ms cubic-bezier(0.4, 0, 0.2, 1)',
  spring: '500ms cubic-bezier(0.34, 1.56, 0.64, 1)',
  '3d': '0.6s cubic-bezier(0.23, 1, 0.32, 1)',
} as const;

export const layout = {
  maxWidth: '1280px',
  maxWidthNarrow: '960px',
  maxWidthWide: '1440px',
  sectionPadding: { x: '1.5rem', y: '6rem' },
  containerPadding: { x: '1.5rem' },
} as const;
