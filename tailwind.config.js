module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        main: '#5057b4',
      },
      fontFamily: {
        control: ['Lato', 'sans-serif'],
        body: ['"Gill Sans"', 'sans-serif'],
      },

    },
    screens: {
      xs: '320px',
      sm: '480px',
      md: '640px',
      lg: '1024px',
      xl: '1280px',
    },
  },
  plugins: [],
};
