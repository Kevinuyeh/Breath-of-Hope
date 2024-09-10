/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        purp: '#5853A3',
        lpurp: '#8A55A357',
        dark: '#14284D',
        maast: '#233E4C',
        darkpurp: '#14284D',
        fblue: '#14284D',
        lblue:'#8AD5EA2E',
        llblue:'#E3EDFF',
        lightblue:'#8AD5EA',
        bluebg: '#14284D',
        blue2:'#2E5DB3',
        lgreen: '#8AD5EA45',
        lgray: '#D1D1D2',
        dgray: '#808086'
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        judson: ['Judson', 'serif'],
      },
    },
  },
  plugins: [],
}