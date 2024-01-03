import { FontSizes, FontVariantsClassName, Palette } from '@constants/styles';

export type ColorTypes = keyof typeof Palette;
export type FontSizeTypes = keyof typeof FontSizes;
export type FontWeightTypes = 'bold' | 'semibold' | 'medium' | 'regular';
export type FontVariantsClassName = keyof typeof FontVariantsClassName;
