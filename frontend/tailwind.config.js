/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        colors: {
        // Main brand color (Lime Green)
        brand: {
          50:  '#F7FFE5',
          100: '#E6F9B6',
          200: '#D4F38C',
          300: '#C2FF49',
          400: '#AEE63F',
          500: '#9AD936',
          DEFAULT: '#C2FF49',
        },
        
        // Dark backgrounds
        dark: {
          50: '#2A2A2A',
          100: '#1F1F1F',
          200: '#171717',
          300: '#0F0F0F',
          DEFAULT: '#0F0F0F',
        },
        
        // Light backgrounds
        light: {
          50: '#FFFFFF',
          100: '#FDFDFD',
          200: '#F5F5F5',
          300: '#EEEEEE',
          DEFAULT: '#FDFDFD',
        },

      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Poppins', 'system-ui', 'sans-serif'],
      },
      // Extra large spacing (for hero sections, big layouts)
      spacing: {
        '128': '32rem',   // 512px
        '144': '36rem',   // 576px
      },
      
      // Extra border radius (modern design trend)
      borderRadius: {
        '4xl': '2rem',    // 32px - for big cards
        '5xl': '2.5rem',  // 40px - for hero sections
      },
      
      // Container max widths (optional but useful)
      maxWidth: {
        '8xl': '88rem',   // 1408px
        '9xl': '96rem',   // 1536px
      },
      
      // Box shadows (for depth/elevation)
      boxShadow: {
        'glow': '0 0 20px rgba(194, 255, 73, 0.3)',  // Neon glow effect
        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.3), 0 2px 4px -1px rgba(0, 0, 0, 0.2)',
      },

      animation: {
        'scroll': 'scroll 30s linear infinite',
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },

    },
  },
  plugins: [],
}