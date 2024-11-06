import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        skooliBackground: "#FFFDF1",
        skooliBlue: "#1A237E",
        skooliBlueLight: "#5C6BC0",
        skooliPurple: "#00796B",
        skooliPurpleLight: "#4DB6AC",
        skooliYellow: "#FFC107",
        skooliYellowLight: "#FFE082",
        darkGray: "#424242",
        mediumGray: "#757575",
        lightGray: "#BDBDBD",
        paid: "#36CFC9",
        pending: "#FFA940",
        overdue: "#FF4D4F",
        skooliWhite: "#FFFFFF",
      },
    },
  },
  plugins: [],
};
export default config;
