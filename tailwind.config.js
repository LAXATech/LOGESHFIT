/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0B1120", // Deep Navy
        secondary: "#1e293b", // Slate 800
        accent: "#bef264", // Lime 400
        "accent-hover": "#a3e635", // Lime 500
        dark: "#020617", // Slate 950
      },
      fontFamily: {
        sans: ['Open Sans', 'sans-serif'],
        heading: ['Montserrat', 'sans-serif'],
        body: ['Open Sans', 'sans-serif'],
      },
      backgroundImage: {
        'hero-pattern': "linear-gradient(to right bottom, rgba(11, 17, 32, 0.9), rgba(11, 17, 32, 0.8))",
      }
    },
  },
  plugins: [],
}
