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
        skooliPurpleLight: "#894de4",
        skooliPurple: "#363398",
        skooliPurp: "#7629ca",
        skooliPurpLight: "#f1e7ff",
        skooliOrange: "#ff8633",
        skooliOrangeLight: "#ffefe7",
        skooliLightBlue: "#e5f5ff",
        skooliBlue: "#74cbff",
        skooliGreen: "#74cbff",
        skooliLightGreen: "#eafcee",
        lamaSky: "#C3EBFA",
        lamaSkyLight: "#EDF9FD",
        lamaPurple: "#CFCEFF",
        lamaPurpleLight: "#F1F0FF",
        lamaYellow: "#FAE27C",
        lamaYellowLight: "#FEFCE8",
      },
    },
  },
  plugins: [],
};
export default config;
