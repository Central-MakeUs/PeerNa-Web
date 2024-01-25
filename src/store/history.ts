import { PageTypes } from '@constants/activities';
import { persistAtom } from '@store/recoilPersist';
import { atom } from 'recoil';

type HistoryStateType = {
  activity: PageTypes;
  params: Record<string, string>;
};

export const historyState = atom<HistoryStateType>({
  key: 'historyState',
  default: {
    activity: 'HomePage',
    params: {},
  },
  effects_UNSTABLE: [persistAtom],
});
