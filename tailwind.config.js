/** @type {import('tailwindcss').Config} */
export default {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'custom-dark': '#0d293d',
        'custom-light': '#629f87',
        'custom-tertiary': '#E89AC7',
        'custom-white': '#FAFBFB'
      },
      backgroundImage: {
        'center-gradient': 'radial-gradient(circle, var(--tw-gradient-stops))'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
