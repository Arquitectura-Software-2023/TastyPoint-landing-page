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
      },
    },
  },
  plugins: [],
}

