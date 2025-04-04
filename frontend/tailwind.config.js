/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // You can add custom colors matching Instrek's brand
        primaryBlue: "#0066cc", // Example blue color
        secondaryTeal: "#00cc99" // Example teal color
      }
    },
  },
  plugins: [],
}