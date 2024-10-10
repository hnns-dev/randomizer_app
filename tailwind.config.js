/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        headline: ['"Spicy Rice", serif'],
        main: ['"Oswald", sanserif'],
      },
      colors: {
        red_950: "#450c18",
        red_900: "#7c1f35",
        red_800: "#891f34",
        red_700: "#ac243a",
        red_600: "#cd3147",
        red_500: "#e1525f",
        red_400: "#ed7f86",
        red_300: "#f4adb0",
        red_200: "#f9d2d4",
        red_100: "#fce8e7",
        red_50: "#fef2f2",
        gold: "#FAA300",
        lightgold: "#F3B700",
      },
    },
  },
  plugins: [],
};
