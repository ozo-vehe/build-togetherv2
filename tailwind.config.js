/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        '160': '160px',
        '337': '337px',
        '300': '300px',
        '350': '350px',
        '400': '400px',
        '450': '450px',
        '500': '500px',
        '550': '550px',
        '600': '600px',
        '650': '650px',
        '700': '700px',
        '750': '750px',
      },
      colors: {
        'custom_orange': '#f57724',
        'custom_dark_orange': '#DE6C1F',
        'custom_border': '#E2E2E2',
        'custom_card_text': '#475569',
        'custom_card_header': '#202020',
        'custom_card_orange_bg': '#FEF1E9',
        'custom_card_gray_bg': '#E8EBED',
        'custom_card_gray_border': '#1B3447',
        'custom_card_button': '#4F4F4F',
      }
    },
  },
  plugins: [],
}

