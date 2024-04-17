/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'midnight': '#151515',
      'whiteFont': "#858585",
      'menuFont': "#ffffff",
      'grayFont': '#b9b9b9'
    },
    extend: {
      backgroundImage: {
        'boat-background': "url('/assets/images/sail-design.png')",
      }
    },
  },
  plugins: [],
}

