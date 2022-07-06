/* @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        dropDown: {
          "0%": { transform: "translateY(0%) scale(5)", opacity: "0" },
          "100%": { transform: "translateY(0) scale(1)", opacity: "1" },
        },
        dropOut: {
          "0%": { transform: "translateY(0) scale(1)", opacity: "1" },
          "100%": { transform: "translateY(0%) scale(5)", opacity: "0" },
        },
      },
      animation: {
        dropin: "dropDown 0.4s ease-out",
        dropout: "dropOut 0.2s ease-in",
      },
    },
  },
  plugins: [],
};
