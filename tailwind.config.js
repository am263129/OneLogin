module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      tiny: '420px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        app:{
          primary:{
            DEFAULT:"#1b1d2a",
            light:"#32343F",
            100:"#272935"
          },
          blue:{
            DEFAULT:"#325ae7",
          }
        }
      },
      spacing: {
        px: '1px',
        0: '0px',
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
        7.5: '30px',
        8: '2rem',
        9: '2.25rem',
        10: '2.5rem',
        11: '2.75rem',
        12: '3rem',
        12.5: '55px',
        13: '50px',
        14: '3.5rem',
        16: '4rem',
        17: '4.375rem',
        20: '5rem',
        24: '6rem',
        25: '104px',
        28: '7rem',
        29: '7.5rem',
        32: '8rem',
        33: '130px',
        36: '9rem',
        37: '155px',
        40: '10rem',
        44: '11rem',
        45: '11.25rem',
        46: '11.875rem',
        48: '12rem',
        50: '200px',
        52: '13rem',
        53: '210px',
        56: '14rem',
        60: '15rem',
        64: '16rem',
        72: '18rem',
        80: '20rem',
        81: '347px',
        96: '24rem',
        720: '45rem',
        1040: '65rem'
      },
    }
  },
  plugins: [],
}
