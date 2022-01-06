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

      zIndex: {
        '-1': '-1',
        '100': '100'
      },

      borderRadius: {
        'shapes-banner-main': '22% 26% 50% 25% / 12% 13% 24% 17%',
        'shapes-banner-main-lg': '16% 10% 36% 20% / 30% 20% 45% 35%',
        'shapes-banner-background': '10% 5% 14% 20% / 19% 9% 27% 35% ',
        
        'shapes-product': '8% 25% 6% 5% / 22% 32% 14% 15%'
      },

      opacity: {
        '6': '.06'
      },

      animation: {
        shapeBg: 'shapeBg 5s ease-in-out infinite',
        productBanner: 'productBanner 5s ease-in-out infinite both',
        productBannerReverse: 'productBanner 5s ease-in-out infinite reverse both '

      },

      keyframes: {
        shapeBg: {
          '0%, 100%': { borderRadius: '10% 5% 14% 20% / 19% 9% 27% 35%' },
          '50%': { borderRadius: '7% 5% 13% 8% / 14% 9% 23% 16%' },
        },

        productBanner: {
          '0%, 100%': { transform: 'translateX(0)' },
          '25%': { transform: 'translateX(10px)' },
          '75%': { transform: 'translateX(-10px)' },        
        },

      },

    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    // ...
    require('@tailwindcss/line-clamp'),
  ],
}
