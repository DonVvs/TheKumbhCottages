/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '480px',
      },
      colors: {
        cream: {
          50: '#FDFBF7',  // Primary luminous soft alabaster canvas
          100: '#FAF7F2', // Warm soft linen surface
          200: '#EFE8DC', // Soft sandstone tone
          300: '#E3D7C5', // Subtle divider tone
          400: '#D5C4AC', // Border tone
          500: '#C2AD91',
        },
        espresso: {
          950: '#1A120B', // Primary headline deep rich espresso
          900: '#261B12',
          800: '#3A2B20', // Primary body text
          700: '#523F32', // Secondary body text
          600: '#6E5747', // Muted sandalwood subtext
          500: '#8C7260',
          400: '#AA917F',
        },
        swarna: {
          200: '#FDF3D6',
          300: '#F6E3AD',
          400: '#E7CA7B',
          500: '#C5A059', // Sovereign Warm Antique Gold
          600: '#B08842',
          700: '#8E6B2D',
          800: '#6C4F1C',
        },
        kesar: {
          100: '#FEF3E8',
          200: '#FDE1C8',
          400: '#F59E0B',
          500: '#D97706', // Sacred Saffron Amber
          600: '#B45309',
        },
        kumkum: {
          100: '#FCEBEB',
          500: '#8E2428', // Sacred Crimson Red
          600: '#74191D',
          700: '#5C1215',
        },
        sandstone: {
          50: '#FFFFFF',
          100: '#1A120B',
          200: '#3A2B20',
          300: '#6E5747',
          400: '#8C7260',
          500: '#C5A059',
        },
        mahogany: {
          950: '#FDFBF7',
          900: '#FAF7F2',
          850: '#EFE8DC',
        }
      },
      fontFamily: {
        cinzel: ['Cinzel', 'serif'],
        devanagari: ['Noto Serif Devanagari', 'Marcellus', 'serif'],
        marcellus: ['Marcellus', 'Georgia', 'serif'],
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'Outfit', 'Plus Jakarta Sans', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['Inter', 'Outfit', 'system-ui', '-apple-system', 'sans-serif'],
      },
      letterSpacing: {
        'traditional': '0.14em',
        'royal': '0.22em',
      }
    },
  },
  plugins: [],
}
