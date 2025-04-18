/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
  "./**/*.{html,js,css}"
   ],
  theme: {
    screens: {
      'phone': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
    },
    extend: {
      animation: {
        // Animation Marquee
        marquee: "marquee 30s linear infinite",
      },
      keyframes: {
        // Animation MArquee
        marquee: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
    },
  },
  // Animation Marquee Start
  variants: {
    extend: {
      animation: ["hover", "focus"],
    },
  },
  // Animation Marquee End
  plugins: [require("flowbite/plugin")]
};
