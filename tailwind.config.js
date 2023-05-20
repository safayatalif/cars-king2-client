/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('https://img.freepik.com/premium-vector/car-with-curve-background-paper-art-style_24623-452.jpg?size=626&ext=jpg&ga=GA1.1.1613183627.1673832056&semt=ais')",
        'footer-texture': "url('/img/footer-texture.png')",
      }
    },
  },
  plugins: [require("daisyui")],
}

