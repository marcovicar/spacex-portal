/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        primary: 'var(--primary)',
        accent: 'var(--accent)',
        'rocket-gray': '#1f1f1f'
      },
      fontFamily: {
        barlow: ['var(--font-barlow)', 'sans-serif'],
        bebas: ['var(--font-bebas)', 'sans-serif'],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};