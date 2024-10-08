import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "15px",
    },
    screens: {
      sm: "500px",
      md: "660px",
      lg: "1024px",
      xl: "1400px",
    },
    fontFamily: {
      oswald: "var(--font-oswald)",
      roboto: "var(--font-roboto)",
    },

    backgroundImage: {
      hero: "url(/assets/img/hero/bg.png)",
      membership: "url(/assets/img/membership/bg.jpg)",
    },
    extend: {
      colors: {
        primary: {
          DEFUALT: "#333",
          100: "#484848",
          200: "#151515",
          300: "#111",
        },
        accent: "#d4000d",
      },
    },
  },
  plugins: [],
};
export default config;
