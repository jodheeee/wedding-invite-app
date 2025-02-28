/** @type {import('tailwindcss').Config} */
const pxToRem = (px) => px / 16 + 'rem';
const basicSpace = Array.from(Array(200)).map((_, index) => pxToRem(index));

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      md: pxToRem(550),
    },
    spacing: {
      ...basicSpace,
      280: pxToRem(280),
      360: pxToRem(360),
      650: pxToRem(650),
      700: pxToRem(700),
      760: pxToRem(760),
      800: pxToRem(800),
      900: pxToRem(900),
    },
    borderWidth: {
      DEFAULT: '1px',
      0: '0',
      1: pxToRem(1),
      2: pxToRem(2),
      3: pxToRem(3),
      4: pxToRem(4),
      5: pxToRem(5),
      6: pxToRem(6),
      7: pxToRem(7),
      8: pxToRem(8),
      9: pxToRem(9),
      10: pxToRem(10),
    },
    extend: {},
    fontFamily: {
      MapoDacapo: ['MapoDacapo'],
    },
  },
  plugins: [],
};
