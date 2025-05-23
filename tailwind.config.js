/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: {
        'custom-all-sides': '4px 4px 10px rgba(0, 0, 0, 0.1), -4px -4px 5px rgba(0, 0, 0, 0.05)',
      },
      colors: {
        sky: "#036AE6", // Your desired color hex code
        black: "#000000",
        brandColor: '#5488c4'
      },
      screens: {
        mf: "1200px",
      },
      fontFamily: {
        futura: ['var(--font-futura)'],
        futura_light: ['var(--font-futura_light)'],
        sacramento : ['var(--font-sacramento)']
      }
    },
  },
  plugins: [],
};
