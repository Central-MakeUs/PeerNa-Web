import { persistAtom } from '@store/recoilPersist';
import { atom } from 'recoil';

export type BottomSheetListItem = {
  title: string;
  subtitle?: string;
  // TODO) BottonSheet 클릭 동작 파악시 타입 수정
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onClick: any;
};

type BottomSheetStateType = {
  isOpen: boolean;
  contents: BottomSheetListItem[];
};

export const bottomSheetState = atom<BottomSheetStateType>({
  key: 'bottomSheetState',
  default: {
    isOpen: false,
    contents: [],
  },
  effects_UNSTABLE: [persistAtom],
});
