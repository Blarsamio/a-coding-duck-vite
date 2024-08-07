module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      primary: 'Inter',
      secondary: 'League Spartan',
      tertiary: 'Montserrat',
    },
    container: {
      padding: {
        DEFAULT: '15px',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      xxl: '1536px',
    },
    extend: {
      colors: {
        primary: '#0a0a0a',
        accent: '#C42847',
        snow: '#FBF5F3',
        mint: '#63A375',
        rusty: '#DE3C4B',
        deft: '#434371',
        black: '#373636',
        isabelline: '#F1F0EC',
        bone: '#DBD6C3',
        reseda: '#708361'
      },
      backgroundImage: {
        about: "url('./assets/about.png')",
        services: "url('./assets/office.jpeg')",
      },
    },
  },
  plugins: [],
};
