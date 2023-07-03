/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        green: {
          400: "#69EF5D",
          500: "#92C83E",
          600: "#005422",
        },
        grey: {
          500: "#383838",
        },
        black: {
          500: "#021E0E",
          600: "#1E1E1E",
        },
      },
      fontFamily: {
        sans: ["Neue Montreal", "sans-serif"],
        heading: ["var(--font-heading)", "sans-serif"],
      },
    },
  },
  screens: {
    xs: "414px",
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
    "2xl": "1536px",
  },
  plugins: [],
}
