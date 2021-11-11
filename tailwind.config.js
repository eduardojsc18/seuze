module.exports = {
  purge: {
    enabled: false,
    content: ['./resources/view/*.html'],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      'sm': '480px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
    },
    extend: {

      colors: {
        'banner': '#FEF3D7'
      },

      fontFamily: {
        'quicksand': ['"Quicksand"', 'sans-serif']
      },

      borderRadius: {
        'shapes-banner-main': '26% 10% 50% 16% / 28% 10% 30% 16%',
        'shapes-banner-main-lg': '15% 10% 100% 20% / 30% 20% 50% 35%',
        'shapes-banner-background': '10% 5% 14% 20% / 19% 9% 27% 35% '
      },

      animation: {
        shapeBg: 'shapeBg 5s ease-in-out infinite'
      },

      keyframes: {
        shapeBg: {
          '0%, 100%': { borderRadius: '10% 5% 14% 20% / 19% 9% 27% 35%' },
          '50%': { borderRadius: '7% 5% 13% 8% / 14% 9% 23% 16%' },
        }
      },

    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
