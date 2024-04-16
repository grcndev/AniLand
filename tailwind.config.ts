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
      "white": "#ffffff",
      "blue": "#3DB4F2",
      "singletxt":'#7A858F',
      "addlist": "#3db4f2",
      "buttonfav": "#EC294B",
      "titlesec": "#5C728A",
      "footerbg" : "#11161d",
      "footertxt": "#A0B1C5",
      "bordersq" : "#46546b",
    },
    extend: {
      boxShadow: {
        'filter': '0 14px 30px rgba(103,132,187,.1), 0 4px 4px rgba(103,132,187,.04)',
        'sdcover':'rgba(0, 0, 0, 0.5)' ,
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
