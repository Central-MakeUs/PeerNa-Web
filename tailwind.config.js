/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary01: '#475AFF',
        primary02: '#253AF4',
        'secondary-purple': '#A39EFF',
        'secondary-pink': '#FF92FC',
        'secondary-orange': '#FF6E22',
        'secondary-yellow': '#FFC31D',
        white: '#FFFFFF',
        gray01: '#E6E8EB',
        gray02: '#E6E8EB',
        gray03: '#C8CBD0',
        gray04: '#868C92',
        gray05: '#565D63',
        gray06: '#353D43',
        gray07: '#2C333A',
        gray08: '#0D1326',
        black: '#000000',
        danger01: '#FF7474',
        danger02: '#A64141',
      },
      fontFamily: { Pretendard: 'Pretendard' },
      fontSize: {
        header01: '24px',
        header02: '20px',
        header03: '18px',
        body01: '16px',
        body02: '14px',
        caption: '12px',
      },
    },
  },
  plugins: [],
};
