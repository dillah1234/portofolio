/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {

      fontSize: {
        agakbesar: "150px",
      },

      backgroundImage: {
        Image: 'url("../public/image.png")',
        coolbro: 'url("../public/cool bro.jpg")',
       
      }

      
    },
  },
  plugins: [],
}



