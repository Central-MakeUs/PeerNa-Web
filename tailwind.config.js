/** @type {import('tailwindcss').Config} */
import { Palette, FontSizes } from './src/constants/styles';
import { nextui } from '@nextui-org/react';
export default {
  important: true,
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
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
  plugins: [nextui()],
};
