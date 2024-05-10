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
      'grayFont': '#b9b9b9',
      'goldFont': '#ddb59c',
      'goldenFont': '#cba58b',
      'grayBg': '#2f2f2f',
      'blue-button': '#0075eb',
    },
    extend: {
      backgroundImage: {
        'boat-background': "url('/assets/images/sail-design.png')",
        'footer-background': "url('/assets/images/excellence-ui-design-illustration.png')"
      },
      height: {
        '128': '32rem',
        '156': '400px',
      }
    },
  },
  plugins: [],
}

