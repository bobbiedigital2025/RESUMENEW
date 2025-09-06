module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        pastelPink: '#FFD1DC',
        pastelBlue: '#AEEEEE',
        pastelPurple: '#C3B1E1',
        pastelGreen: '#B5EAD7',
        pastelYellow: '#FFFACD',
        sparkle: {
          DEFAULT: '#F3F3F3',
          light: '#F8F8FF',
        },
      },
      boxShadow: {
        sparkle: '0 0 20px 2px #F3F3F3, 0 0 40px 4px #AEEEEE',
      },
      backgroundImage: {
        'sparkle-gradient': 'linear-gradient(135deg, #FFD1DC 0%, #AEEEEE 100%)',
      },
      animation: {
        sparkle: 'sparkle 2s infinite linear',
      },
      keyframes: {
        sparkle: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.7 },
        },
      },
    },
    fontFamily: {
      inter: ['Inter', 'sans-serif'],
    },
    borderRadius: {
      DEFAULT: '8px',
      lg: '16px',
    },
  },
  plugins: [],
};
