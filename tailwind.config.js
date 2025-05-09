/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        yellow: {
          300: '#ffd54f',
          400: '#ffc107',
          500: '#ffb300',
        },
        red: {
          500: '#e53935',
          600: '#d32f2f',
          700: '#c62828',
          800: '#b71c1c',
        }
      },
      animation: {
        bounce: 'bounce 1s infinite',
        fadeIn: 'fadeIn 0.5s ease-in-out',
        slideInRight: 'slideInRight 0.5s ease-in-out',
        pulse: 'pulse 2s infinite',
      },
      keyframes: {
        bounce: {
          '0%, 100%': { transform: 'translateY(-10%)' },
          '50%': { transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};