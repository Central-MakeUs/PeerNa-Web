import { IconKeyType } from '@constants/icons';
import { PeerGradeTypes } from '@store/reviewState';

export type PeerTypeArrayType = {
  type: PeerGradeTypes;
  iconId: IconKeyType;
  title: string;
};

export const PeerTypeArray: PeerTypeArrayType[] = [
  {
    type: 'OUTSTANDING',
    iconId: 'RibbonStar',
    title: '같이 일 할 맛 나는 최고의 동료에요!',
  },
  {
    type: 'EXCELLENT',
    iconId: 'HeartPulse',
    title: '꼭 다시 함께 하고 싶은 동료에요!',
  },
  {
    type: 'GOOD',
    iconId: 'LightBulb',
    title: '좋은 점이 많은 동료에요',
  },
  {
    type: 'AVERAGE',
    iconId: 'ThumbLikeDisLike',
    title: '좋은 점도 있고 아쉬운 점도 있는 동료에요',
  },
  {
    type: 'BELOW_AVERAGE',
    iconId: 'CommentError',
    title: '아쉬운 점이 많은 동료에요',
  },
  {
    type: 'POOR',
    iconId: 'PersonDelete',
    title: '더 이상 함께 하고 싶지 않은 동료에요',
  },
  {
    type: 'WORST',
    iconId: 'ThumbDown',
    title: '같이 일 하기 힘든 최악의 동료에요',
  },
];
