import { fontFamily } from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      display: {
        inherit: 'inherit',
      },
      colors: {
        darkNavy: '#020c1b',
        navy: '#0a192f',
        lightNavy: '#112240',
        lightestNavy: '#233554',
        navyShadow: 'rgba(2, 12, 27, 0.7)',
        darkSlate: '#495670',
        slate: '#8892b0',
        lightSlate: '#a8b2d1',
        lightestSlate: '#ccd6f6',
        white: '#e6f1ff',
        green: '#1effa0',
        greenTint: 'rgba(100, 255, 218, 0.1)',
        pink: '#f57dff',
        blue: '#57cbff',
      },
      fontFamily: {
        primary: ['var(--font-fira-sans)', ...fontFamily.sans],
        mono: ['var(--font-fira-code)', ...fontFamily.serif],
      },
      transitionTimingFunction: {
        'in-menu': 'cubic-bezier(0.645, 0.045, 0.355, 1)',
      },
    },
  },
  plugins: [],
};