import { JobType, PartType } from '@constants/review';
import { persistAtom } from '@store/recoilPersist';
import { atom, selector } from 'recoil';

type ReviewSelfStateType = {
  name: string;
  job: JobType | '';
  part: PartType | '';
};

export const REVIEW_SELF_INITIAL_STATE: ReviewSelfStateType = {
  name: '',
  job: '',
  part: '',
};

export const reviewSelfState = atom<ReviewSelfStateType>({
  key: 'REVIEW_SELF',
  default: REVIEW_SELF_INITIAL_STATE,
  effects_UNSTABLE: [persistAtom],
});

export const nameSizeValidator = selector({
  key: 'nameSizeValidator',
  get: ({ get }) => {
    const selfTest = get(reviewSelfState);
    return selfTest.name.length > 0 && selfTest.name.length <= 5;
  },
});
