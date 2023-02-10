/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        bgColor:
          "linear-gradient(90deg, #1B1B1B 17.28%, rgba(0, 0, 0, 0) 100%)",
        bgColor2: "linear-gradient(270deg, #FFF6F7 0%, #1B693A 100%)",
        bgColor3: "linear-gradient(180deg, #1B693A 33.33%, #FFF6F7 100%)",
      },
      colors: {
        white1: "#FDFDFD",
        green1: "#14A800",
        green2: "#1B5713",
        green3: "#39868D",
        green4: "#055F5B",
        green5: "#C2FBD8",
        green6: "#4D8A63",
        black1: "#12141D",
        black2: "#150A29",
        black3: "#181818",
        black4: "#2e3a59",
        black5: "#1A2129",
        blue1: "#1D2F6F",
        blue2: "#2563EB",
        blue3: "#080A47",
        blue4: "#4352C9",
        gray1: "#434D56",
        gray2: "#f3f4f6",
        gray3: "#FEFBFC",
        brown1: "#333215",
        yellow1: "#FFFAF5",
        violet1: "#E7D5FE",
        violet2: "#6D2FFD",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        plus: ["Plus Jakarta Sans", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        grotesk: ["Space Grotesk", "sans-serif"],
        DM: ["DM Serif Text", "serif"],
        "public-sans": ["Public Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
