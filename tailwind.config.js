/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        hotpink: {
          DEFAULT: '#E23F84',
          dark: '#C42C6C',
          light: '#F0699F',
        },
        blush: {
          DEFAULT: '#FBD3E4',
          light: '#FDEAF1',
        },
        purple: {
          DEFAULT: '#4B2E72',
          deep: '#3A2259',
        },
        lavender: {
          DEFAULT: '#F1ECFB',
          deep: '#E3D6F7',
        },
        ink: '#3B2A4A',
        cream: '#FFFBFE',
      },
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'serif'],
        body: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        script: ['Caveat', 'cursive'],
      },
      boxShadow: {
        soft: '0 10px 30px -10px rgba(75, 46, 114, 0.18)',
        card: '0 6px 20px -6px rgba(75, 46, 114, 0.14)',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      backgroundImage: {
        gingham:
          'repeating-linear-gradient(0deg, rgba(226,63,132,0.10) 0px, rgba(226,63,132,0.10) 10px, transparent 10px, transparent 20px), repeating-linear-gradient(90deg, rgba(226,63,132,0.10) 0px, rgba(226,63,132,0.10) 10px, transparent 10px, transparent 20px)',
      },
      animation: {
        sparkle: 'sparkle 2.2s ease-in-out infinite',
        'fade-up': 'fadeUp 0.6s ease-out both',
      },
      keyframes: {
        sparkle: {
          '0%, 100%': { opacity: 0.4, transform: 'scale(0.85) rotate(0deg)' },
          '50%': { opacity: 1, transform: 'scale(1.1) rotate(8deg)' },
        },
        fadeUp: {
          '0%': { opacity: 0, transform: 'translateY(12px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
