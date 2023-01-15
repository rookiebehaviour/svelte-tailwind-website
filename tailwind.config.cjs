/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/routes/**/*.{svelte,js,css}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  /* Optional daisyUI plugin */
  daisyui: {
    styled: true,
    themes: true,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    darkTheme: "dark",
  },
};
