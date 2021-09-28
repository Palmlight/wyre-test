module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      width: {
        "10vw": "10vw",
        "20vw": "20vw",
        "30vw": "30vw",
        "40vw": "40vw",
        "50vw": "50vw",
        "60vw": "60vw",
        "70vw": "70vw",
        "80vw": "80vw",
        "90vw": "90vw",
        "99vw": "96vw",
        "90%": "90%"
      },
      height: {
        "90vh": "90vh",
        "80vh": "80vh",
        "70vh": "70vh",
        "60vh": "60vh",
        "50vh": "50vh",
        "40vh": "40vh",
        "30vh": "30vh",
        "20vh": "20vh",
        "10vh": "10vh"
      },
      fontFamily: {
        Ciruclar: ["Circular", "sans-serif"]
      },
      colors: {
        wyPurple: "#660066",
        wyPurple2: "#4E004E",
        wyBlue: "#E5E5E5",
        wyLPurple: "#BB29BB"
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
