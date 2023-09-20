/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "node_modules/preline/dist/*.js",
  ],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        twinkle: {
          "0%": {
            transform: "scale(1, 1)",
            background: "rgba(255, 255, 255, 0)",
            transitionTimingFunction: "linear",
          },
          "40%": {
            transform: "scale(0.8, 0.8)",
            background: "rgba(255, 255, 255, 1)",
            transitionTimingFunction: "cubic-bezier(0, 0, 0.2, 1)",
          },
          "80%": {
            background: "rgba(255, 255, 255, 0)",
            transform: "scale(1, 1)",
          },
          "100%": {
            background: "rgba(255, 255, 255, 0)",
            transform: "scale(1, 1)",
          },
        },
      },
      animation: {
        twinkle: `twinkle ${Math.random() * 5 + 5}s linear ${
          Math.random() * 1 + 1
        }s infinite `,
      },
    },
  },
  plugins: [require("preline/plugin")],
};
