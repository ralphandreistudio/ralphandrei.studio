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
    },
  },
  plugins: [],
}
