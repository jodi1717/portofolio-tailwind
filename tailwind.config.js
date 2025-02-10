/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      screens: {'2xl': '1320px'},
      colors: {
        primary: '#14b8a6',  // ini adalah warna teal-500
        secondary: '#64748b',
      },
    },
  },
  plugins: [],
};
