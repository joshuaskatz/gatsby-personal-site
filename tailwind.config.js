/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
  ],
  theme: {
    screens: {
    'sm': '640px',
    'md': '900px',
    'lg': '1024px',
    'xl': '1280px',
    '2xl': '1536px',
    },
    extend: {
      fontFamily: {
        primary: ["Source Code Pro"],
      },
    },
  },
  plugins: [],
};
