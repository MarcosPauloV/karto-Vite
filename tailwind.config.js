/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './index.html',
        './src/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
          colors: {
            'light' : '#f5f5f5',
            'primary' : '#071E22'
          }
        },
    },
    plugins: [require("daisyui")],
};

