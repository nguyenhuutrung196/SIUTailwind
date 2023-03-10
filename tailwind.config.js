/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ['./**/*.html',
  './src/**/*.{js,jsx,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        'interTight': ['Inter Tight','sans-serif']
      },
      backgroundImage: {
        'hero-pattern':
          "linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8)), url('./src/img')",
      },
    },
  },
  variants: {
    extend: {
      display: ['group-focus'],
      opacity: ['group-focus'],
      inset: ['group-focus']
    },
  },
  plugins: [],
}