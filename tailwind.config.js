/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'base': 'Roboto'
      },
      fontSize:{
        "3xl":"32px"
      },
      backgroundColor:{
        main:"#211F26",
        secondary:"#2B2930"
      },
      colors:{
        gray_text:"#616370",
        acento: "#CAC4D0"
      }
    },
  },
  plugins: [],
}