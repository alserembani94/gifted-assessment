/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {},
  },
  plugins: [
    plugin(function ({ addBase, theme }) {
      // Standardizing font size across project
      addBase({
        body: {
          fontSize: theme("fontSize.base"),
          lineHeight: theme("lineHeight.base"),
        },
        h1: {
          fontSize: theme("fontSize.5xl"),
          fontWeight: theme("fontWeight.bold"),
          lineHeight: theme("lineHeight.tight"),
        },
        h2: {
          fontSize: theme("fontSize.4xl"),
          fontWeight: theme("fontWeight.bold"),
          lineHeight: theme("lineHeight.tight"),
        },
        h3: {
          fontSize: theme("fontSize.3xl"),
          fontWeight: theme("fontWeight.bold"),
          lineHeight: theme("lineHeight.tight"),
        },
        h4: {
          fontSize: theme("fontSize.2xl"),
          fontWeight: theme("fontWeight.bold"),
          lineHeight: theme("lineHeight.tight"),
        },
        h5: {
          fontSize: theme("fontSize.xl"),
          fontWeight: theme("fontWeight.bold"),
          lineHeight: theme("lineHeight.tight"),
        },
        h6: {
          fontSize: theme("fontSize.lg"),
          fontWeight: theme("fontWeight.bold"),
          lineHeight: theme("lineHeight.tight"),
        },
      });
    })
  ],
}
