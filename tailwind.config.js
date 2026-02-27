/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      keyframes: {
        'slide-in': {
          from: {
            transform: 'translateX(100%)',
            opacity: '0',
          },
          to: {
            transform: 'translateX(0)',
            opacity: '1',
          },
        },
        'slide-down': {
          from: {
            opacity: '0',
            transform: 'translateY(-10px)',
          },
          to: {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        'slide-up': {
          from: {
            opacity: '0',
            transform: 'translateY(10px)',
          },
          to: {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        shimmer: {
          '0%': {
            backgroundPosition: '-200% 0',
          },
          '100%': {
            backgroundPosition: '200% 0',
          },
        },
        'fade-in': {
          from: {
            opacity: '0',
          },
          to: {
            opacity: '1',
          },
        },
        'scale-in': {
          from: {
            opacity: '0',
            transform: 'scale(0.95)',
          },
          to: {
            opacity: '1',
            transform: 'scale(1)',
          },
        },
      },
      animation: {
        'slide-in': 'slide-in 0.3s ease-out',
        'slide-down': 'slide-down 0.2s ease-out',
        'slide-up': 'slide-up 0.2s ease-out',
        shimmer: 'shimmer 2s infinite linear',
        'fade-in': 'fade-in 0.3s ease-out',
        'scale-in': 'scale-in 0.2s ease-out',
      },
    },
  },
  plugins: [
    function ({ addUtilities, addComponents, theme }) {
      // Scrollbar utilities
      const newUtilities = {
        '.scrollbar-thin': {
          '&::-webkit-scrollbar': {
            width: '8px',
            height: '8px',
          },
        },
        '.scrollbar-track-gray': {
          '&::-webkit-scrollbar-track': {
            background: '#1f2937',
            borderRadius: '4px',
          },
        },
        '.scrollbar-track-gray-light': {
          '&::-webkit-scrollbar-track': {
            background: '#e5e7eb',
            borderRadius: '4px',
          },
        },
        '.scrollbar-thumb-lime': {
          '&::-webkit-scrollbar-thumb': {
            background: '#84cc16',
            borderRadius: '4px',
          },
          '&::-webkit-scrollbar-thumb:hover': {
            background: '#65a30d',
          },
        },
        '.scrollbar-thumb-gray': {
          '&::-webkit-scrollbar-thumb': {
            background: '#6b7280',
            borderRadius: '4px',
          },
          '&::-webkit-scrollbar-thumb:hover': {
            background: '#4b5563',
          },
        },
        '.custom-scrollbar': {
          '&::-webkit-scrollbar': {
            width: '8px',
          },
          '&::-webkit-scrollbar-track': {
            background: '#1f2937',
            borderRadius: '4px',
          },
          '&::-webkit-scrollbar-thumb': {
            background: '#84cc16',
            borderRadius: '4px',
          },
          '&::-webkit-scrollbar-thumb:hover': {
            background: '#65a30d',
          },
        },
        '.custom-scrollbar-light': {
          '&::-webkit-scrollbar': {
            width: '8px',
          },
          '&::-webkit-scrollbar-track': {
            background: '#e5e7eb',
            borderRadius: '4px',
          },
          '&::-webkit-scrollbar-thumb': {
            background: '#84cc16',
            borderRadius: '4px',
          },
          '&::-webkit-scrollbar-thumb:hover': {
            background: '#65a30d',
          },
        },
      };
      addUtilities(newUtilities, ['responsive', 'hover']);

      // Number input components
      const numberInputComponents = {
        '.number-input-styled': {
          position: 'relative',
        },
        '.number-input-styled input[type="number"]': {
          paddingRight: '8px !important',
        },
        '.number-input-styled input[type="number"]::-webkit-inner-spin-button, .number-input-styled input[type="number"]::-webkit-outer-spin-button': {
          '-webkit-appearance': 'inner-spin-button',
          opacity: '1',
          cursor: 'pointer',
        },
      };
      addComponents(numberInputComponents);
    },
  ],
};
