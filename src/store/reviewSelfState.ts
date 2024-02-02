import { JobType, PartType } from '@constants/review';
import { persistAtom } from '@store/recoilPersist';
import { atom, selector } from 'recoil';

type ReviewSelfStateType = {
  name: string;
  job: JobType | '';
  part: PartType | '';
};

export const reviewSelfState = atom<ReviewSelfStateType>({
  key: 'selfTest',
  default: {
    name: '',
    job: '',
    part: '',
  },
  effects_UNSTABLE: [persistAtom],
});

export const nameSizeValidator = selector({
  key: 'nameSizeValidator',
  get: ({ get }) => {
    const selfTest = get(reviewSelfState);
    return selfTest.name.length > 0 && selfTest.name.length <= 5;
  },
});
