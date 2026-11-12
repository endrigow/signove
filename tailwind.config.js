/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#ECFEFF',
          100: '#CFFAFE',
          200: '#A5F3FC',
          300: '#67E8F9',
          400: '#22D3EE',
          500: '#06B6D4',
          600: '#0891B2',
          700: '#0E7490',
          800: '#155E75',
          900: '#164E63',
          950: '#083344',
        },
        lifemed: {
          blue: '#00529B',
          navy: '#06192E',
          teal: '#00A896',
          emerald: '#02C39A',
          coral: '#F05D5E'
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'ecg-scan': 'scanline 2.5s linear infinite',
        'float-slow': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out 3s infinite',
        'glow-pulse': 'glow 2.5s ease-in-out infinite alternate',
        'ken-burns': 'kenburns 24s ease-in-out infinite alternate',
        'telemetry-pulse': 'telemetryPulse 4s ease-in-out infinite',
      },
      keyframes: {
        kenburns: {
          '0%': { transform: 'scale(1) translate(0, 0)' },
          '50%': { transform: 'scale(1.07) translate(-1%, -0.8%)' },
          '100%': { transform: 'scale(1.03) translate(0.5%, 0.5%)' },
        },
        telemetryPulse: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(0.98)' },
          '50%': { opacity: '0.8', transform: 'scale(1.02)' },
        },
        scanline: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%': { filter: 'drop-shadow(0 0 8px rgba(6, 182, 212, 0.3))' },
          '100%': { filter: 'drop-shadow(0 0 20px rgba(6, 182, 212, 0.7))' },
        }
      }
    },
  },
  plugins: [],
}
