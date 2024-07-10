/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-purple": "#7950f2", // Vibrant purple
        "dark-gray": "#333333", // Dark gray for text
        "light-gray": "#f0f0f0", // Light gray background
      },
    },
  },
  plugins: [],
};
