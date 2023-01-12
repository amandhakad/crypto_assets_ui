/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'regal-blue': '#243c5a',
        'dark-shade': '#14172B',
        'positive-green': '#00FFA3',
        'negative-red': '#FF4D4D',
        'border-grad-one': '#ECF0FF1A',
        'border-grad-two': '#3B3F5700',
        'cell-caption': '#737BAE'
      },
    },
  },
  plugins: [],
}
