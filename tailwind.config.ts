import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      "bgcbody": "#EDF1F5",
      "graynav": "#2b2d42",
      "txnav": "#bbbedc",
      "hovnav":"#d3d5f3",
      "sgbg": "#3577FF",
      "sgtxcol": "#ffffff",
      "ringblue": "#0896e699",
      "placeh": "#b1c3d4",
      "txtcard": "#748899",
      "txtcatg": "#647380",
      "viewall": "#8ba0b2",
      "txtfilter": "#516170",
      "hview": "#516170",
      "bglanding": "#0a1625",
      "mjtitleldg": "#f0f3f6",
      "titleldg": "#ecf6fe",
      "spanldg": "#acd5f2;",
      "white": "#ffffff"
    },
    extend: {
      boxShadow: {
        'filter': '0 14px 30px rgba(103,132,187,.1), 0 4px 4px rgba(103,132,187,.04)',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
