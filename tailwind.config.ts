import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backdropBlur: {
        '5': '5px',
      },
      borderRadius: {
        "4xl": "1.875rem", // 30px
      },
      borderWidth: {
        "0.5": "0.5px", // 0.5px
      },
      fontSize: {
        "2.5xl": "1.75rem", // 28px
        "3.5xl": "2rem", // 32px
      },
      lineHeight: {
        "3.5": "0.875rem", // 14px
        "4.5": "1.125rem", // 18px
        "5.25": "21px", // 21px
        "5.5": "1.375rem", // 22px
        "6.5": "1.625rem", // 26px
        "7.5": "1.875rem", // 30px
        "9.5": "2.375rem", // 38px
        "13": "3.25rem", // 52px
      },
      gap: {
        "1.25": "0.313rem", // 5px
        "4.5": "1.125rem", // 18px
        "4.75": "1.188rem", // 19px
        "7.5": "1.875rem", // 30px
        "8.75": "35px", // 35px
      },
      colors: {
        background: "#FFFAF9",
        background2: "#FBF0EC",
        textColor: "#221C3D",
        btn1: "#6954D7",
        alertColor: "#FF5F6F",
        loadmorebtn: "#20A89E",
        success: "#20A89E",

        seashell: "#FBF0EC",
        indigo: "#6954D7",
        lavender: "#AA98FE",
        aquamarine: "#20A89E ",
        snow: "#FFFAF9",
        coral: "#FF5F6F",
        midnight: "#FF5F6F",
        "black-40": "rgba(0, 0, 0, 0.4)",
        "Lace-50": "rgba(251, 240, 236, 0.50)"
      },
      spacing: {
        "0.75": "0.188rem", // 3px
        "1.25": "0.313rem", // 5px
        "1.375": "0.344rem", // 5.5px
        "1.625": "0.406rem", // 6.5px
        "1.75": "0.438rem", // 7px
        "1.875": "0.469rem", // 7.5px
        "2.25": "0.563rem", // 9px
        "2.375": "0.594rem", // 9.5px
        "2.625": "0.656rem", // 10.5px
        "2.75": "0.688rem", // 11px
        "2.875": "0.719rem", // 11.5px
        "3.25": "0.813rem", // 13px
        "3.375": "0.844rem", // 13.5px
        "3.75": "0.938rem", // 15px
        "3.875": "0.969rem", // 15.5px
        "4.5": "1.125rem", // 18px
        "4.625": "1.156rem", // 18.5px
        "4.75": "1.188rem", // 19px
        "5.5": "1.375rem", // 22px
        "5.625": "1.406rem", // 22.5px
        "5.75": "1.438rem", // 23px
        "6.75": "1.688rem", // 27px
        "7.5": "1.875rem", // 30px
        "8.125": "2.031rem", // 32.5px
        "8.25": "2.063rem", // 33px
        "8.375": "2.094rem", // 33.5px
        "8.5": "2.125rem", // 34px
        "8.625": "2.156rem", // 34.5px
        "9.25": "2.313rem", // 37px
        "10.75": "2.688rem", // 43px
        "12.5": "3.125rem", // 50px
        "13": "3.25rem", // 52px
        "15": "3.75rem", // 60px
        "15.5": "3.875rem", // 62px
        "16.5": "4.125rem", // 66px
        "22": "5.5rem", // 88px
      },
    },
  },
  plugins: [],
};
export default config;
