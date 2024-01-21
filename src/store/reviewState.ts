import { atom } from 'recoil';

export type PeerTypes =
  | 'Excellent'
  | 'Great'
  | 'Good'
  | 'Fair'
  | 'Poor'
  | 'Bad';

type ReviewStateTypes = {
  answers: number[];
  peerType: PeerTypes;
  oneLineReview: string;
};

export const reviewState = atom<ReviewStateTypes>({
  key: 'reviewState',
  default: {
    answers: [],
    peerType: 'Fair',
    oneLineReview: '',
  },
});
