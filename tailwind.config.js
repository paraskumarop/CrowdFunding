/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:
      {
        'arrow': "url('./src/assets/splash.svg')",
        'blur': "url('./src/assets/blursbg.svg')"
      }
    },
  },
  plugins: [],
}

