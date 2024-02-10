import { recoilPersist } from 'recoil-persist';

export const { persistAtom } = recoilPersist({
  key: 'recoil-persist',
  storage: localStorage,
});
