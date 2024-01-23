import { persistAtom } from '@store/recoilPersist';
import { atom } from 'recoil';

export type PeerGradeTypes =
  | 'OUTSTANDING'
  | 'EXCELLENT'
  | 'GOOD'
  | 'AVERAGE'
  | 'BELOW_AVERAGE'
  | 'POOR'
  | 'WORST';

type ReviewStateTypes = {
  answers: number[];
  peerGrade: PeerGradeTypes;
  feedback: string;
};

export const reviewState = atom<ReviewStateTypes>({
  key: 'reviewState',
  default: {
    answers: [],
    peerGrade: 'AVERAGE',
    feedback: '',
  },
  effects_UNSTABLE: [persistAtom],
});
