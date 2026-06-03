/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ivory: '#fffaf0',
        pearl: '#f8f3e7',
        champagne: '#ead8ad',
        gold: '#c89d42',
        deepGold: '#8a6426',
        ink: '#2f2922',
      },
      fontFamily: {
        display: ['Cormorant Garamond', 'Georgia', 'serif'],
        script: ['Great Vibes', 'Brush Script MT', 'cursive'],
        body: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 24px 80px rgba(200, 157, 66, 0.22)',
        soft: '0 18px 60px rgba(47, 41, 34, 0.10)',
      },
      backgroundImage: {
        radialGold:
          'radial-gradient(circle at top, rgba(234,216,173,0.4), transparent 42%)',
      },
    },
  },
  plugins: [],
};
