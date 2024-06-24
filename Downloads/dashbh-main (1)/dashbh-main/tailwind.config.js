/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary:"#EF3A47", //rouge
        primaryHover:"#E52B39",
        secondary:"#D8D9D8", //gris
        secondaryHover:"#BCBCBC", //gris
        tertiary:"#224187", //bleu
        tertiaryHover:"#18326D", //bleu
      },
    },
  },
  plugins: [],
};
