export const colors = {
  dark: {
    bg: '#0a0a0f',
    bgSecondary: '#111118',
    bgTertiary: '#1a1a24',
    surface: '#16161e',
    surfaceHover: '#1e1e28',
    border: 'rgba(255,255,255,0.06)',
    borderHover: 'rgba(255,255,255,0.12)',
    text: '#f0f0f5',
    textSecondary: '#a0a0b0',
    textTertiary: '#6a6a7a',
    accent: '#3b82f6',
    accentHover: '#60a5fa',
    accentMuted: 'rgba(59,130,246,0.15)',
    success: '#22c55e',
    warning: '#f59e0b',
    error: '#ef4444',
  },
  light: {
    bg: '#fafafa',
    bgSecondary: '#f5f5f7',
    bgTertiary: '#ebebf0',
    surface: '#ffffff',
    surfaceHover: '#f5f5f7',
    border: 'rgba(0,0,0,0.06)',
    borderHover: 'rgba(0,0,0,0.12)',
    text: '#1a1a2e',
    textSecondary: '#5a5a6e',
    textTertiary: '#8a8a9a',
    accent: '#2563eb',
    accentHover: '#1d4ed8',
    accentMuted: 'rgba(37,99,235,0.1)',
    success: '#16a34a',
    warning: '#d97706',
    error: '#dc2626',
  },
} as const;

export const typography = {
  fontFamily: {
    sans: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    display: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
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
} as const;

export const radius = {
  sm: '0.375rem',
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
    lg: '0 8px 24px rgba(0,0,0,0.5)',
    xl: '0 16px 48px rgba(0,0,0,0.6)',
    glow: '0 0 20px rgba(59,130,246,0.15)',
  },
  light: {
    sm: '0 1px 2px rgba(0,0,0,0.05)',
    md: '0 4px 12px rgba(0,0,0,0.08)',
    lg: '0 8px 24px rgba(0,0,0,0.1)',
    xl: '0 16px 48px rgba(0,0,0,0.12)',
    glow: '0 0 20px rgba(37,99,235,0.1)',
  },
} as const;

export const glass = {
  dark: {
    background: 'rgba(22,22,30,0.7)',
    border: '1px solid rgba(255,255,255,0.06)',
    backdropFilter: 'blur(20px) saturate(180%)',
    boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
  },
  light: {
    background: 'rgba(255,255,255,0.7)',
    border: '1px solid rgba(0,0,0,0.06)',
    backdropFilter: 'blur(20px) saturate(180%)',
    boxShadow: '0 8px 32px rgba(0,0,0,0.08)',
  },
} as const;

export const transitions = {
  fast: '150ms cubic-bezier(0.4, 0, 0.2, 1)',
  normal: '250ms cubic-bezier(0.4, 0, 0.2, 1)',
  slow: '400ms cubic-bezier(0.4, 0, 0.2, 1)',
  spring: '500ms cubic-bezier(0.34, 1.56, 0.64, 1)',
} as const;

export const layout = {
  maxWidth: '1280px',
  maxWidthNarrow: '960px',
  maxWidthWide: '1440px',
  sectionPadding: { x: '1.5rem', y: '6rem' },
  containerPadding: { x: '1.5rem' },
} as const;
