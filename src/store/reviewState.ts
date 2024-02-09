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
  uuid?: string;
  targetId?: string;
  peerName?: string;
};

export const REVIEW_INITIAL_STATE: ReviewStateTypes = {
  answers: [],
  peerGrade: 'AVERAGE',
  feedback: '',
};

export const reviewState = atom<ReviewStateTypes>({
  key: 'reviewState',
  default: REVIEW_INITIAL_STATE,
  effects_UNSTABLE: [persistAtom],
});
