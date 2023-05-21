/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('https://img.freepik.com/free-photo/navy-blue-smoky-art-abstract-background_53876-102669.jpg?size=626&ext=jpg&ga=GA1.1.1613183627.1673832056&semt=sph')",
        'footer-texture': "url('/img/footer-texture.png')",
      }
    },
  },
  plugins: [require("daisyui")],
}

