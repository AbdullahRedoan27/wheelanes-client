/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  daisyui: {
    themes: [
      {
        wheelanesThemeDark: {
          primary: "#1d4ed8",

          secondary: "#3b82f6",

          accent: "#14b8a6",

          neutral: "#1f2937",

          "base-100": "#111827",

          info: "#1e3a8a",

          success: "#16a34a",

          warning: "#FBBD23",

          error: "#b91c1c",
        },
      },
    ],
  },

  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
};
