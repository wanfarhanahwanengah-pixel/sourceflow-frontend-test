/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        fontFamily: {
          sans: ['Poppins', 'sans-serif'],
        },
        colors: {
          'brand-blue': 'var(--color-brand-blue)',
          'brand-orange': 'var(--color-brand-orange)',
          'brand-yellow': 'var(--color-brand-yellow)',
        },
      },
    },
    plugins: [],
  }
  