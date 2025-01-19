import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend:
   {

    colors:
    {
        tertiary:"#16b5c9",
        secondary:"#16b5c9",
        darkbg:"#12252b"
    },

      backgroundImage: {
          "gradient-cover":
          "linear-gradient(90.21deg, rgba(0, 51, 102, 0.5) -5.92%, rgba(0, 102, 204, 0.5) 111.58%)",
      },
    },
  },
  plugins: [],
};
export default config;
