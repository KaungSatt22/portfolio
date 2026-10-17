/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#f4f6f5",
        ink: "#141a18",
        muted: "#5c6b66",
        accent: "#0f6b63",
        "accent-soft": "#d4ebe8",
        surface: "rgba(255, 255, 255, 0.72)",
      },
      fontFamily: {
        display: ["Syne", "sans-serif"],
        sans: ["Manrope", "sans-serif"],
      },
      boxShadow: {
        soft: "0 20px 50px -24px rgba(20, 26, 24, 0.25)",
      },
    },
  },
  plugins: [],
};
