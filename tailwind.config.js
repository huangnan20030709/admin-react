/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  // presets: [require("@huyafed/uikit/tailwind-presets")],
  theme: {
    extend: {
      colors: {
        bg1: "var(--color-bg-1)", // rgb(35, 35, 36)
        bg2: "var(--color-bg-2)", // rgb(41, 41, 42)
        bg3: "var(--color-bg-3)", // rgb(52, 52, 53)
        bg4: "var(--color-bg-4)", // rgb(71, 71, 73)

        text1: "var(--color-text-1)", // rgb(233, 233, 234)
        text2: "var(--color-text-2)", // rgb(191, 191, 192)
        text3: "var(--color-text-3)", // rgb(115, 115, 117)

        link: "var(--color-link)", // rgb(60, 125, 255)
        border: "var(--color-border)", // rgb(255, 168, 0)
      },
    },
  },
  plugins: [],
};
