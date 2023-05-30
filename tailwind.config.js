/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      'xxl': '1400px',
      'xl': "1200px",
      'lg': "992px",
      "md": "768px",
      'sm': "576px",
      'xs': "360px"
     
    },
    extend: {
      fontFamily:{
       sans: "var(--font-poppins)"
      },
      backgroundColor:{
       green:{
         100: "#1ed760"
      }
      },
      keyframes: {
        wiggle: {
          '0%': { transform: 'translatey(-50px)', opacity: "0" },
          '100%': { transform: 'translate(0)', opacity: "1" },
        },
      }
    },
  },
  plugins: [],
}
