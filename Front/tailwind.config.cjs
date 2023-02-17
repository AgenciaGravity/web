/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "image-header":
          "url('./src/assets/Agregados/fondo - agencia gravity - publicidad y marketing.jpg')",
      },
      height: {
        "alto-header": "calc(100vh - 70px)",
      },
      colors: {
        azul: "#0D2633",
        naranja: "#F5B45F",
        griss: "#F2F2F2",
        "modal-text": "#B5B4B4",
        "white-transparent": "rgba(255, 255, 255, 0.9)",
        "input-one": "rgba(255, 255, 255, 0.15)",
        "floating-color": "rgba(129, 122, 122, 0.3)",
        "backdrop-modal": "rgba(0, 0, 0, 0.5)"
      },
      fontFamily: {
        display: ["Nirmala UI"],
        body: ["Nirmala UI"],
      },
      boxShadow: {
        card: "-17px 11px 21px -1px rgba(87, 87, 87, 0.137)",
        "services-card": "0px 0px 10px rgba(0, 0, 0, 0.15)"
      },
    },
  },
  plugins: [],
};
