import Analytical from '@assets/common/analytical.png';
import CardLocked from '@assets/common/card_locked.png';
import Cautious from '@assets/common/cautious.png';
import Challenging from '@assets/common/challenging.png';
import Comprehensive from '@assets/common/comprehensive.png';
import Cooperative from '@assets/common/cooperative.png';
import Driving from '@assets/common/driving.png';
import FutureOriented from '@assets/common/future_oriented.png';
import TypeC from '@assets/common/icon_C.png';
import TypeD from '@assets/common/icon_D.png';
import TypeI from '@assets/common/icon_I.png';
import TypeS from '@assets/common/icon_S.png';
import Multidimensional from '@assets/common/multidimensional.png';
import Pragmatic from '@assets/common/pragmatic.png';
import TypeUnknwon from '@assets/common/unknown.png';
import Warmhearted from '@assets/common/warmhearted.png';
import KakaoShare from '@assets/link/kakao.png';
import Onboarding1 from '@assets/onboarding/onboarding1.png';
import Onboarding2 from '@assets/onboarding/onboarding2.png';
import Onboarding3 from '@assets/onboarding/onboarding3.png';
import Onboarding4 from '@assets/onboarding/onboarding4.png';
import Lottie1 from '@assets/review/01성향.json';
import Lottie2 from '@assets/review/02사고방식.json';
import Lottie3 from '@assets/review/03소통방식.json';
import Lottie4 from '@assets/review/04결정방식.json';
import self_bouvardia from '@assets/review/card/self_bouvardia.png';
import self_daisy from '@assets/review/card/self_daisy.png';
import self_mimosa from '@assets/review/card/self_mimosa.png';
import self_violet from '@assets/review/card/self_violet.png';
import Peer1 from '@assets/review/peer/peer1.png';
import Peer2 from '@assets/review/peer/peer2.png';
import Peer3 from '@assets/review/peer/peer3.png';
import bouvardia from '@assets/review/self/bouvardia.png';
import daisy from '@assets/review/self/daisy.png';
import mimosa from '@assets/review/self/mimosa.png';
import violet from '@assets/review/self/violet.png';

export const REVIEW_LOTTIES = [Lottie1, Lottie2, Lottie3, Lottie4];
export const KAKAO_SHARE = KakaoShare;
export const ON_BOARDING_IMAGE_LIST = [
  Onboarding1,
  Onboarding2,
  Onboarding3,
  Onboarding4,
];
export const PEER_REVIEW_IMAGE_LIST = [Peer1, Peer2, Peer3];

export const FLOWER_CARDS = {
  D: bouvardia,
  I: daisy,
  S: violet,
  C: mimosa,
  UNKNOWN: '',
};

export const REVIEW_SELF_INTRODUCE_IMAGE_LIST = [
  self_bouvardia,
  self_daisy,
  self_mimosa,
  self_violet,
];

export const KEYWORD_IMAGE_MAPPER = {
  ANALYTICAL: Analytical,
  CAUTIOUS: Cautious,
  CHALLENGING: Challenging,
  COMPREHENSIVE: Comprehensive,
  COOPERATIVE: Cooperative,
  DRIVING: Driving,
  FUTURE_ORIENTED: FutureOriented,
  MULTI_DIMENSIONAL: Multidimensional,
  PRAGMATIC: Pragmatic,
  WARMHEARTED: Warmhearted,
  CARD_LOCKED: CardLocked,
};

export const PEER_ICON_LIST = {
  D: TypeD,
  I: TypeI,
  S: TypeS,
  C: TypeC,
  UNKNOWN: TypeUnknwon,
};
