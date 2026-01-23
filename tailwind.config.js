// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./src/**/*.{js,ts,jsx,tsx,mdx}"
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// };


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
  extend: {
    // ... keep your other colors/fonts here ...

    keyframes: {
      blink: {
        '0%': { opacity: '0', transform: 'scale(0.8)' },
        '20%': { opacity: '1', transform: 'scale(1)' },     // Flash ON quickly
        '100%': { opacity: '0', transform: 'scale(0.8)' },   // Fade OFF slowly
      },
    },
    animation: {
      blink: 'blink 1.5s ease-in-out forwards', // Run the blink animation once
    },
  },
},
  plugins: [],
};