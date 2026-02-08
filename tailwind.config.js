/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand': {
          50: '#F0F7FA',  // Very light baby blue
          100: '#E1F0F5',
          200: '#BFE0EB',
          300: '#9BCDE1', // Baby Blue Main
          400: '#7BAEC2',
          500: '#64748B', // Cool Gray (Text)
          600: '#475569',
          700: '#334155',
          800: '#1E293B',
          900: '#0F172A',
        },
        'warm': {
          50: '#FDFBF7',
          100: '#F7F5EB', // Soft Beige (Backgrounds)
          200: '#EBE8D8',
          300: '#D6D3C0',
          500: '#A8A29E', // Warm Gray accent
        },
        'accent': {
          light: '#9BCDE1', // Reuse baby blue for softness
          DEFAULT: '#7BAEC2', // Muted Blue/Gray for primary actions instead of harsh coral
          dark: '#5B8699',
        },
        'soft-bg': '#FDFBF7', // Warm off-white
        'glass-border': 'rgba(255, 255, 255, 0.7)',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['"Playfair Display"', 'serif'],
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(112, 128, 144, 0.1)',
        'soft-xl': '0 20px 40px -10px rgba(0, 0, 0, 0.05)',
      },
      animation: {
        'blob': 'blob 10s infinite',
        'pulse-subtle': 'pulse-subtle 3s infinite',
      },
      keyframes: {
        blob: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' },
        },
        'pulse-subtle': {
          '0%, 100%': { opacity: 1, transform: 'scale(1)' },
          '50%': { opacity: .90, transform: 'scale(0.98)' },
        },
      }
    },
  },
  plugins: [],
}
