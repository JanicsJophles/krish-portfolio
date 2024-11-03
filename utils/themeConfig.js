export const lightTheme = {
  colors: {
    primary: '#2563eb',
    secondary: '#4f46e5',
    background: '#ffffff',
    text: '#1a1a1a',
    accent: '#0070f3',
    cardBg: '#ffffff',
    navBg: 'rgba(255, 255, 255, 0.8)',
  },
  fonts: {
    heading: '"Inter", sans-serif',
    body: '"Inter", sans-serif',
  },
  transitions: {
    default: 'all 0.3s ease',
  },
  borderRadius: {
    default: '0.5rem',
    large: '1rem',
  }
};

export const darkTheme = {
  colors: {
    primary: '#3b82f6',
    secondary: '#6366f1',
    background: '#121212',
    text: '#ffffff',
    accent: '#0070f3',
    cardBg: '#1f2937',
    navBg: 'rgba(17, 24, 39, 0.8)',
  },
  fonts: lightTheme.fonts,
  transitions: lightTheme.transitions,
  borderRadius: lightTheme.borderRadius,
}; 