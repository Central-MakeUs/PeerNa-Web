import {
  FontSizes,
  FontVariantsClassName,
  Palette,
  PickerSize,
} from '@constants/styles';

export type ColorTypes = keyof typeof Palette;
export type FontSizeTypes = keyof typeof FontSizes;
export type FontWeightTypes = 'bold' | 'semibold' | 'medium' | 'regular';
export type FontVariantsKeys = keyof typeof FontVariantsClassName;
export type PickerTypes = keyof typeof PickerSize;
