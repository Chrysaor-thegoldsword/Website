/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite-react/lib/esm/**/*.js",
    "./node_modules/flowbite/**/*.js"

    // require(flowbite.content()),
  ],
  theme: {
    extend: {},
  },
  plugins: [
    // require('@tailwindcss/scrollbar'),
    // require("flowbite/plugin")
  ],
};

// // tailwind.config.js
// module.exports = {
//   content: [
//    "./src/**/*.{js,ts,jsx,tsx}",
//     "./node_modules/flowbite-react/lib/esm/**/*.js",
//     "./node_modules/flowbite/**/*.js"
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [
//     require('@tailwindcss/scrollbar'),
//   ],
// };

