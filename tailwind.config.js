/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit',
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        'hs-0': { 'raw': '(min-height: 0px)'}, //10px = rem
        'hs-sm': { 'raw': '(min-height: 600px)' }, //10px = rem
        'hs-md': { 'raw': '(min-height: 700px)' }, //11px = rem
        'hs-base': { 'raw': '(min-height: 800px)' }, //12.5px = rem
        'hs-lg': { 'raw': '(min-height: 900px)' }, //14px = rem
        'hs-xl': { 'raw': '(min-height: 1000px)' }, //16px = rem
        // => @media (min-height: 800px) { ... }
      }
    },
  },
  plugins: [],
};
