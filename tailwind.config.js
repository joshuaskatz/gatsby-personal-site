/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
  ],
  theme: {
    screens: {
    'sm': '640px',
    'md': '800px',
    'lg': '1024px',
    'xl': '1280px',
    '2xl': '1536px',
    }, 
    borderWidth: {
      DEFAULT: '1px',
      '0': '0',
      '2': '2px',
      '3': '3px',
      '4': '4px',
      '6': '6px',
      '8': '8px',
    },
    extend: {
      fontFamily: {
        primary: ["Source Code Pro"],
      },
    },
  },
  plugins: [],
};
