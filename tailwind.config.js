const { getTheme } = require('reshaped/config/tailwind');
const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    ...getTheme(),
    extend: {
      spacing: {
        x12: '48px',
        x16: '64px',
        x24: '96px',
        x32: '128px',
        x48: '192px',
        x64: '256px',
        x96: '384px',
        x128: '512px',
        x160: '640px',
        x192: '768px',
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        '.scrollbar-0::-webkit-scrollbar': {
          width: '0px',
        },
        '.scrollbar-6::-webkit-scrollbar': {
          width: '6px',
        },
        '.scrollbar-rounded-12::-webkit-scrollbar-thumb': {
          'border-radius': '12px',
        },
        '.scrollbar-bg-neutral::-webkit-scrollbar-thumb': {
          'background-color': 'var(--rs-color-background-neutral)',
        },
      });
    }),
  ],
};
