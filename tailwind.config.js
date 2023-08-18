/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'YelpCamp': "url('../public/YelpCamp.png')"
      },
    },
  },
  plugins: [],
}

