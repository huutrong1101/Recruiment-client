const withMT = require("@material-tailwind/react/utils/withMT");

/** @type {import('tailwindcss').Config} */
const tailwindConfig = {
  content: ["./src/**/*.{tsx,jsx}", "./index.html"],
  theme: {
    extend: {},
  },
  plugins: [],
};

module.exports = withMT(tailwindConfig);
