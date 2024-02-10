/** @type {import('tailwindcss').Config} */
import { nextui } from '@nextui-org/react';
import tailwindAnimate from 'tailwindcss-animate';
import { FontSizes, Height, Palette, Width } from './src/constants/styles';

export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  prefix: '',
  theme: {
    screens: {
      tablet: '768px',
      mobile: '390px',
    },
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        ...Palette,
      },
      card: {
        DEFAULT: 'hsl(var(--card))',
        foreground: 'hsl(var(--card-foreground))',
      },
      fontFamily: { Pretendard: 'Pretendard' },
      fontSize: { ...FontSizes },
      lineHeight: { default: '1.4' },
      letterSpacing: { default: '-0.02rem' },
      width: { ...Width },
      height: { ...Height },

      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      boxShadow: {
        default: '0 0 0 2.94px #E3E6E8',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
      backgroundImage: {
        'peer-bg': 'url("@assets/common/bg_gradient.png")',
        unknown_bg: 'url("@assets/common/whats_my_type_bg.png")',
        'home-icon': 'url("@assets/common/home_peer.png")',
        D: 'url("@assets/common/icon_D.png")',
        I: 'url("@assets/common/icon_I.png")',
        S: 'url("@assets/common/icon_S.png")',
        C: 'url("@assets/common/icon_C.png")',
        UNKNOWN: 'url("@assets/common/unknown.png")',
      },
      backgroundSize: {
        icon: '218px 180px',
        32: '32px 32px',
        44: '44px 44px',
        68: '68px 68px',
        100: '100px 100px',
      },
    },
  },
  plugins: [nextui(), tailwindAnimate],
};
