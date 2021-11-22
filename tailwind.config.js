const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  purge: {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    options: {
      safelist: [/grid\-cols\-/],
    },
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      ...defaultTheme.screens,
      hero: "1350px",
    },
    extend: {
      colors: {
        primarybg: "#5BB543",
        secondarybg: "#F0F8ED",
        primarytext: "#2C2E47",
        darkbg: "#2C2E47",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
}
