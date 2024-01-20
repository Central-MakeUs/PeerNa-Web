import { atom, selector } from 'recoil';

type SelfTestInfomation = {
  name: string;
  job: string;
  position: string;
};

export const selfTestState = atom<SelfTestInfomation>({
  key: 'selfTest',
  default: {
    name: '',
    job: '',
    position: '',
  },
});

export const nameSizeValidator = selector({
  key: 'nameSizeValidator',
  get: ({ get }) => {
    const selfTest = get(selfTestState);
    return selfTest.name.length > 0 && selfTest.name.length <= 5;
  },
});
