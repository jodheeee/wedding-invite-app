/** @type {import('tailwindcss').Config} */
const pxToRem = (px) => px / 16 + 'rem';
const basicSpace = Array.from(Array(101)).map((_, index) => pxToRem(index));

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      md: pxToRem(600),
    },
    spacing: {
      ...basicSpace,
      360: pxToRem(360),
      600: pxToRem(600),
    },
    extend: {},
  },
  plugins: [],
};
