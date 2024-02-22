import { persistAtom } from '@store/recoilPersist';
import { atom } from 'recoil';

export type ReviewHistory = {
  uuidList: string[];
};

export const reviewHistoryState = atom<ReviewHistory>({
  key: 'reviewHistoryState',
  default: {
    uuidList: [],
  },
  effects_UNSTABLE: [persistAtom],
});
