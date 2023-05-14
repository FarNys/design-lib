/** @type {import('tailwindcss').Config} */

// import clamp from "@tailwindcss/line-clamp";

export default {
  mode: "jit",
  purge: [
    "./src/**/*.{js,jsx,ts,tsx}",
    // "./src/pages/**/*.{html,js,jsx,ts,tsx}",
    // "./src/components/**/*.{html,js,jsx,ts,tsx}",
    // "./src/layouts/**/*.{html,js,jsx,ts,tsx}",
    "./index.html",
  ],
  content: ["./src/**/*.{jsx,js,ts,tsx}"],
  theme: {
    extend: {
      spacing: {
        small: "0.62rem",
        med: "2rem",
      },
      fontSize: {
        ex: "1rem",
        mini: "0.6rem",
      },
      keyframes: {
        getfill: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(200%)" },
        },
        fadeInOut: {
          "0%": { opacity: "0" },
          "50%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
        fadeOut: {
          "0%": { opacity: "0", transform: "translate(-50%,0)" },
          "100%": { opacity: "1", transform: "translate(-50%,40px)" },
        },
        spring: {
          "0%": { transform: "translateX(100%)", opacity: "0" },
          "60%": { transform: "translateX(-4%)" },
          "80%": { transform: "translateX(2%)" },
          "100%": { transform: "translate(0%)", opacity: "1" },
        },
        springout: {
          "0%": { transform: "translateX(0%)", opacity: "1" },
          "40%": { transform: "translateX(2%)", opacity: "1" },
          "80%": { transform: "translateX(-5%)", opacity: "1" },
          "100%": { transform: "translate(100%)", opacity: "0" },
        },
      },
      animation: {
        getfill: "getfill 2s ease-in-out infinite",
        fadeInOut: "fadeInOut 2s ease-in-out infinite",
        fadeOut: "fadeOut 0.5s ease-in-out normal both",
        spring: "spring 0.8s ease-in-out normal both",
        springout: "springout 0.8s ease-in-out normal both",
      },
      // colors: {
      //   red: {
      //     500: "#fff",
      //   },
      // },
    },
  },
  plugins: [],
};
