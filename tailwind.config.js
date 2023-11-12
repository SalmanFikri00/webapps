/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'ubuntu': ['Ubuntu' , 'sans-serif'],
      'poppins': ['Poppins' , 'sans-serif'],
      'quicksand':['Quicksand', 'sans-serif'],
      'montserrat':['Montserrat', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
}

