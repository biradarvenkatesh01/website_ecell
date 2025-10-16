/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#f26d1e',
          light: '#f76c14',
          dark: '#c1713d',
        },
        secondary: {
          DEFAULT: '#ffde9c',
          light: '#edb745',
          dark: '#7d552b',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'system-ui', 'sans-serif'],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      lineHeight: {
        'relaxed-custom': '1.5',
        'heading': '1.2',
      },
    },
  },
  plugins: [],
};
