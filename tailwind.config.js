import preline from 'preline/plugin';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    'node_modules/preline/dist/*.js',
  ],
  theme: {
    extend: {
      boxShadow: {
        '3xl': '0 25px 50px 0px rgba(255,192,0, 1)',
      },
    },
  },
  plugins: [preline],
};
