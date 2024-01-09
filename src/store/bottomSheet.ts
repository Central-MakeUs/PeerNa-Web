import { atom } from 'recoil';

export const bottomSheetState = atom<boolean>({
  key: 'bottomSheetState',
  default: false,
});
