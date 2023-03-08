/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,tsx,jsx}"],
  theme: {
    extend: {
      keyframes:{
        slideOpen:{
          '0%':{opacity:0},
          '50%':{opacity:0.5,transform:'translate(30%)'},
          '100%':{opacity:1}
        }
      },
      animation:{
        slideOpen:'slideOpen 0.5s ease-in-out',
      }
    },
  },
  plugins: [],
}