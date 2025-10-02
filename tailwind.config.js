
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {50:"#f5e9ff",100:"#ecd6ff",200:"#d7adff",300:"#bf85ff",400:"#a963fb",500:"#9441f3",600:"#8a2be2",700:"#7123b8",800:"#591b8f",900:"#411366"}
      },
      borderRadius: { "4xl":"2rem" },
      boxShadow: { card:"0 10px 30px -8px rgba(15,23,42,.15)" }
    },
  },
  plugins: [],
}
