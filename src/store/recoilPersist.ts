import { recoilPersist } from 'recoil-persist';

export const { persistAtom } = recoilPersist({
  key: 'history-persist',
  storage: localStorage,
});
