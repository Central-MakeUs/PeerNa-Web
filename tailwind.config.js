/** @type {import('tailwindcss').Config} */
import { Palette, FontSizes, Width, Height } from './src/constants/styles';
import { nextui } from '@nextui-org/react';
export default {
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
      borderRadius: {
        default: '12px',
      },
      width: { ...Width },
      height: { ...Height },
    },
  },
  plugins: [nextui({ prefix: 'nextui' })],
};
