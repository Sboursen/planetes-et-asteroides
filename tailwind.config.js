module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'header-card': '#6770e7',
        header: '#5057b4',
        main: '#3e488c',
        'grid-one': '#4b52a8',
        'grid-two': '#4e57b1',
      },
      fontFamily: {
        control: ['Lato', 'sans-serif'],
        body: ['"Gill Sans"', 'sans-serif'],
      },
      animation: {
        'ping-fast': 'ping 0.83s linear infinite',
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
