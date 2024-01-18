import { atom } from 'recoil';

export type PeerTypes =
  | 'Excellent'
  | 'Great'
  | 'Good'
  | 'Fair'
  | 'Poor'
  | 'Bad';

type CommonTestStateTypes = {
  answers: number[];
  peerType: PeerTypes;
  oneLineReview: string;
};

export const commonTestState = atom<CommonTestStateTypes>({
  key: 'commonTestState',
  default: {
    answers: [],
    peerType: 'Fair',
    oneLineReview: '',
  },
});
