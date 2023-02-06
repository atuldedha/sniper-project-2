/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        bgColor:
          "linear-gradient(90deg, #1B1B1B 17.28%, rgba(0, 0, 0, 0) 100%)",
      },
      colors: {
        green1: "#14A800",
        green2: "#1B5713",
        black1: "#12141D",
        blue1: "#1D2F6F",
        blue2: "#2563EB",
        gray1: "#434D56",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        plus: ["Plus Jakarta Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
