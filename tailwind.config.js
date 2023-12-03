/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#67d4a5",
      },
      backgroundImage: {
        banner: "url(/1.jpg)",
      },
    },
  },
  plugins: [require("daisyui")],
};
