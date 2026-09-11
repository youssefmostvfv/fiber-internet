/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "../../index.html",
    "../../**/*.html",
    "../js/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eff6ff',
          100: '#dbeafe',
          500: '#0080ff', // Electric Fiber Cyan-Blue
          600: '#0066ff', // Royal Blue
          700: '#0047ab', // Cobalt Blue
          800: '#0a1931', // Deep Dark Navy (word Fiber)
          900: '#030b1e', // Dark Mode Base
          gradient: 'linear-gradient(135deg, #0047ab 0%, #0066ff 50%, #00a2ff 100%)',
        },
        stc: {
          primary: '#4F008C',
          accent: '#FF375F',
        },
        salam: {
          primary: '#00A859',
          dark: '#007A40',
        },
        mobily: {
          primary: '#0096D6',
          dark: '#006495',
        },
        zain: {
          primary: '#8C358E',
          orange: '#FF8200',
        }
      },
      fontFamily: {
        sans: ['Almarai', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
