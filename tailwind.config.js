module.exports = {
  purge: {
    mode: 'layers',
    content: ['./public/**/*.html'],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontSize: {
        'xxs': ['.55rem', '1rem'],
      }
    },
    fontFamily: {
      'raj': ['Rajdhani', 'sans-serif'],
      'mons': ['Montserrat', 'sans-serif']
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
