/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      colors: {
        brand: {
          black: '#1a1a1a',
          gray: '#6b6b6b',
          light: '#f0f0f0',
        },
      },
      transitionTimingFunction: {
        'ease-out-strong': 'cubic-bezier(0.23, 1, 0.32, 1)',
        'ease-in-out-strong': 'cubic-bezier(0.77, 0, 0.175, 1)',
        drawer: 'cubic-bezier(0.32, 0.72, 0, 1)',
      },
      transitionDuration: {
        250: '250ms',
      },
    },
  },
  plugins: [],
}
