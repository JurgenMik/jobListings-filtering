const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'pattern': "url('../public/assets/bg-header-desktop.svg')",
      }
    },
    fontFamily: {
      'sans' : ['League Spartan', ...defaultTheme.fontFamily.sans],
    }
  },
  plugins: [],
}