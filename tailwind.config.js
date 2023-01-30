const fontFamily = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        black: {
          0: "#737373",
          25: "#3C3C3C",
          50: "#2C2C2C",
          75: "#151515",
          100: "#000000",
        },
        white: {
          0: "#8C8C8C",
          25: "#CCCCCC",
          50: "#DEDEDE",
          75: "#F2F2F2",
          100: "#FFFFFF",
        },
        error: {
          0: "#FF9999",
          25: "#FF5C5C",
          50: "#FF5252",
          75: "#FF4848",
          100: "#FF3B3B",
        },
        warning: {
          0: "#FFCE80",
          25: "#FFBC52",
          50: "#FFB642",
          75: "#FFB033",
          100: "#FFAD2A",
        },
        success: {
          0: "#99FFA3",
          25: "#70FF7E",
          50: "#66FF75",
          75: "#57FF68",
          100: "#4CFF5E",
        },
      },
      fontFamily: {
        oswald: ["var(--font-oswald)", "sans-serif"],
        playfairDisplay: ["var(--font-playfair-display)", "serif"],
      },
    },
  },
  plugins: [],
};
