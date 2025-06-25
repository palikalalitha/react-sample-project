/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      spacing: {
        'xxs': '0.25rem', 
        'xs': '0.5rem',  
        'sm': '0.75rem', 
        'md': '1rem',    
        'lg': '1.5rem',  
        'xl': '2rem',    
        'xxl': '3rem',   
      },
      borderRadius: {
        'sm': '0.125rem', 
        'md': '0.375rem', 
        'lg': '0.5rem',   
        'xl': '0.75rem',  
      },
      colors: {
        "brand-purple": "#8F36FF",
        "brand-blue": "#3D9FFA",
      },
      fontFamily: {
        poppins: [
          "Poppins",
          "-apple-system",
          "Roboto",
          "Helvetica",
          "sans-serif",
        ],
      },
    },
  },
  plugins: [],
};
