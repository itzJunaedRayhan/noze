module.exports = {
  mode: 'jit',
  purge: ['./*.{html,js}'],
  theme: {
    screens: {
      'xs': '320px',
      'sm': '576px',
      'md': '768px',
      'lg': '990px',
      'xl': '1350px'
    },
    extend: {
      fontFamily: {
        poppins: "'Poppins', sans-serif",
        raleway: "'Raleway', sans-serif"
      },
      fontSize: {
        sm: "15px",
        lg: "17px"
      },
      colors: {
        'primary': '#654A9B',
        'secondary' : '#210545',
        'text-color' : '#6b5a78',
        'text-secondary' : '#B9B0E4',
        'border-color' : '#d0cbe6'
      }
    },
  },
  plugins: [],
}
