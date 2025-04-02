/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1300px",
      },
      fontFamily: {
        sans: ["Montserrat", "sans-serif"],
      },
      colors: {
        primary: {
          DEFAULT: "#faf5ff",
        },
        secondary: "#8176AF",
        light: "#C0B7E8",
        bgColor: "#343045",
      },
      backgroundImage: {
        "gradient-radial":
          "radial-gradient(circle, rgba(58, 52, 86, 1) 34%, rgba(33, 30, 46, 1) 63%)",
        "hero-bg": "url('/hero-vector.png')",
        "hero-mobile": "url('/hero-bg-mobile.png')",
        "body-background": "url('/body-bg.png')",
      },
    },
  },
  plugins: [],
};
