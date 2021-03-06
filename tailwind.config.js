module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
      serif: ['Roboto Slab', 'serif'],
    },
    colors: {
      primary: {
        DEFAULT: '#1C3C98',
      },
      green: {
        DEFAULT: '#55efc4',
        dark: '#00b894',
      },
      mint: {
        DEFAULT: '#81ecec',
        dark: '#00cec9',
      },
      blue: {
        DEFAULT: '#74b9ff',
        dark: '#0984e3',
      },
      purple: {
        DEFAULT: '#a29bfe',
        dark: '#6c5ce7',
      },
      red: {
        DEFAULT: '#ff7675',
        dark: '#d63031',
      },
      pink: {
        DEFAULT: '#fd79a8',
        dark: '#e84393',
      },
      orange: {
        DEFAULT: '#fab1a0',
        dark: '#e17055',
      },
      yellow: {
        DEFAULT: '#ffeaa7',
        dark: '#fdcb6e',
      },
      gray: {
        lightest: '#efefef',
        light: '#dfe6e9',
        DEFAULT: '#b2bec3',
        dark: '#636e72',
        darkest: '#2d3436',
      },
      white: {
        DEFAULT: '#ffffff',
      },
      black: {
        DEFAULT: '#000000',
      },
    },
    spacing: {
      px: '1px',
      0: '0',
      0.5: '0.125rem',
      1: '0.25rem',
      1.5: '0.375rem',
      2: '0.5rem',
      2.5: '0.625rem',
      3: '0.75rem',
      3.5: '0.875rem',
      4: '1rem',
      5: '1.25rem',
      6: '1.5rem',
      7: '1.75rem',
      8: '2rem',
      9: '2.25rem',
      10: '2.5rem',
      11: '2.75rem',
      12: '3rem',
      14: '3.5rem',
      16: '4rem',
      20: '5rem',
      24: '6rem',
      28: '7rem',
      32: '8rem',
      36: '9rem',
      40: '10rem',
      44: '11rem',
      48: '12rem',
      52: '13rem',
      56: '14rem',
      60: '15rem',
      64: '16rem',
      72: '18rem',
      80: '20rem',
      96: '24rem',
    },
    borderRadius: {
      none: '0',
      sm: '.125rem',
      DEFAULT: '.325rem',
      lg: '.5rem',
      xl: '.675rem',
      full: '9999px',
    },
    opacity: {
      0: '0',
      20: '0.2',
      40: '0.4',
      60: '0.6',
      80: '0.8',
      100: '1',
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')],
};
