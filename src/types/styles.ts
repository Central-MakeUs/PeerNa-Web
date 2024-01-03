import { FontSizes, FontVaraintsClassName, Palette } from '@constants/styles';

export type ColorTypes = keyof typeof Palette;
export type FontSizeTypes = keyof typeof FontSizes;
export type FontWeightTypes = 'bold' | 'semibold' | 'medium' | 'regular';
export type FontVaraintsClassNameType = keyof typeof FontVaraintsClassName;
