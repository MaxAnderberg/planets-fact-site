/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'stars': "url('/stars.svg')",
      },
      fontFamily: {
        'spartan': ['Spartan', 'sans-serif'],
        'antonio': "var(--antonio-font)"
      },
    },
    plugins: [],
  }
}
