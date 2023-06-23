/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{html,js,ts}"
  ],
  safelist: [
    {
      pattern: /^(py-|border-|text-|max-w-|px-|justify-|items-)/,
      variants: ["hover", "active"],
    },
  ],
  theme: {
    extend: {
      colors: {
        'blue': {
          DEFAULT: '#5562eb'
        },
      }
    },
  },
  plugins: [],
}

