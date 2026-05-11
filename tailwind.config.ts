import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        obsidian: '#050b14',
        graphite: '#0b1524',
        panel: '#0a121d',
        ruby: '#ff6f7f',
        coral: '#ff9b92',
        blush: '#ffc2b6',
        amber: '#f2d198',
        ink: '#edf6ff',
        mist: '#c2b2b3',
        faint: '#8e7779',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
      boxShadow: {
        panel:
          '0 24px 64px rgba(0, 0, 0, 0.42), inset 0 1px 0 rgba(255, 255, 255, 0.06)',
        glow: '0 0 32px rgba(88, 214, 255, 0.2)',
      },
      backgroundImage: {
        haze:
          'radial-gradient(circle at top left, rgba(255, 111, 127, 0.16), transparent 38%), radial-gradient(circle at top right, rgba(255, 194, 182, 0.1), transparent 26%), radial-gradient(circle at bottom center, rgba(242, 209, 152, 0.1), transparent 36%)',
      },
    },
  },
  plugins: [],
};

export default config;
