/** @type {import('tailwindcss').Config} */
import tailwindScrollbarHide from 'tailwind-scrollbar-hide';

export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        "3xl": "2000px",
      },
    },
  },
  plugins: [
    tailwindScrollbarHide,
  ],
};
