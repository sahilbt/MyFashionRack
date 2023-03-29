/** @type {import('tailwindcss').Config} */
module.exports = {
  content: 
  [
    './pages/**/*.js',
    './components/**/*.js',
    './pages/**/*.jsx',
    './components/**/*.jsx'
  ],
  theme: {
    extend: {
        colors:{
            'pink' : '#DF6684',
            'darkGrey' : '#222222',
            'lightGrey' : '#353535',
            'white' : '#FFFFFF'
        },
        scale:{
            '30': '0.3'
        },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}
