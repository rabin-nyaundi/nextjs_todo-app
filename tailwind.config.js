const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}','./components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      gray: colors.coolGray,
      blue: colors.sky,
      red: colors.rose,
      pink: colors.fuchsia,
      blueGray: colors.blueGray,
      purple: colors.purple,
      white: colors.white
    },
    fontFamily: {
      sans: ['Graphick', 'sans-serif'],
      serif: ['Assistant', 'serif'],
      'body': ['"Assistant"'],
    },
    extend: {
      backgroundImage: {
        'back-image': "url('/Images/computer.jpeg')"
      },
      spacing: {
        '128': '32rem',
        '144': '36rem'
      },
      borderRadius: {
        '4xl':'2rem',
      }
    },
  },
  variants: {
    extend: {
      borderColor: ['focus-visible'],
      opacity:['disabled']
    },
  },
  plugins: [],
  // prefix: 'tw-'
}
