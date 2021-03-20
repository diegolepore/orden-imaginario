module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      textColor: {
        'twitter-blue': '#1da1f2',
        instagram: '#7a2c85',
      },

      backgroundColor: {
        brand: {
          purple: '#615CFC',
          gray1: '#F2F2F2'
        },
        
        quotes: '#EBE6E1'
      },
      fontFamily: {
        sans: [
          'Raleway',
        ],
        serif: [
          'Playfair Display',
        ]
      }
    },
    lineClamp: {
      1: 1,
      2: 2,
      3: 3
    }
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('tailwindcss-line-clamp')
  ],
}