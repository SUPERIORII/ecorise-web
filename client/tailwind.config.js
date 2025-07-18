/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  daisyui: {
    themes: [
      "light",
      "halloween",
      "dracula",
      "winter",
      "dark",
      "light",
      "cupcake",
      "cmyk",
      "business",
      "corporate",
      "synthwave",
      "retro",
      "cyberpunk",
      "valentine",
      "halloween",
      "garden",
      "forest",
      "aqua",
      "lofi",
      "synthwave",
      "bumblebee",
      "emerald",
      "retro",
      "pastel",
      "fantasy",
      "wireframe",
      "black",
      "luxury",
      "autumn",
      "lemonade",
      "night",
      "coffee",
      "dim",
      "nord",
      "sunset",
    ],
  },
};
