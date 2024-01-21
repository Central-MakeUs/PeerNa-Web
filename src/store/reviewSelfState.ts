import { atom, selector } from 'recoil';

type ReviewSelfStateType = {
  name: string;
  job: string;
  part: string;
};

export const reviewSelfState = atom<ReviewSelfStateType>({
  key: 'selfTest',
  default: {
    name: '',
    job: '',
    part: '',
  },
});

export const nameSizeValidator = selector({
  key: 'nameSizeValidator',
  get: ({ get }) => {
    const selfTest = get(reviewSelfState);
    return selfTest.name.length > 0 && selfTest.name.length <= 5;
  },
});
