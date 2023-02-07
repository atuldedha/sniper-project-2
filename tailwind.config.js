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
        white1: "#FDFDFD",
        green1: "#14A800",
        green2: "#1B5713",
        green3: "#39868D",
        black1: "#12141D",
        black2: "#150A29",
        black3: "#181818",
        blue1: "#1D2F6F",
        blue2: "#2563EB",
        gray1: "#434D56",
        gray2: "#f3f4f6",
        gray3: "#FEFBFC",
        brown1: "#333215",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        plus: ["Plus Jakarta Sans", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
