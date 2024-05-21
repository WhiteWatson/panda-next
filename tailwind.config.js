const { nextui } = require("@nextui-org/react");
/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gradientColor: (theme) => ({
        "left-to-right": ["#3F3DFF", "#8B8BFF"],
      }),
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        gradient: "linear-gradient(90deg,#8B8BFF,#3F3DFF)",
        gradientR: "linear-gradient(90deg,#3F3DFF,#8B8BFF)",
        gradientAbout: "linear-gradient(90deg,#4DA8FF,#8073F7)",
      },
    },
  },
  plugins: [nextui()],
};
