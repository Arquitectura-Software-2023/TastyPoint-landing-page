/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.html"],
  theme: {
    extend: {
      colors: {
        'primary': {
          DEFAULT: '#009D9A',
          hover: '#004e4d'
        },
        'secondary': {
          DEFAULT: '#4589FF',
        },
        'tertiary': {
          DEFAULT: '#31135E',
        },
        'quaternary': {
          DEFAULT: '#3F1602',
        },
        'quinary': {
          DEFAULT: '#FDFBEF',
        },
        'senary': {
          DEFAULT: '#BE95FF',
        },
        'septenary': {
          DEFAULT: '#2F2F2F',
        },
      },
      height: {
        'lg-video': '48rem',
      },
    },
  },
  plugins: [],
}

