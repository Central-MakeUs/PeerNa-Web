/** @type {import('tailwindcss').Config} */
import { Palette, FontSizes } from './src/constants/styles';
export default {
  important: true,
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: { ...Palette },
      fontFamily: { Pretendard: 'Pretendard' },
      fontSize: {
        ...FontSizes,
      },
      lineHeight: {
        default: '1.4',
      },
      letterSpacing: {
        default: '-0.02rem',
      },
    },
  },
  plugins: [],
};
