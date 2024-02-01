interface PeerGradeType {
  text: string;
  icon: string;
}

type PeerGradeKey =
  | 'OUTSTANDING'
  | 'EXCELLENT'
  | 'GOOD'
  | 'AVERAGE'
  | 'BELOW_AVERAGE'
  | 'POOR'
  | 'WORST';

type PeerGrade = {
  [key in PeerGradeKey]: PeerGradeType;
};

export const PeerGrade: PeerGrade = {
  OUTSTANDING: {
    text: '같이 일할 맛 나는 최고의 동료에요',
    icon: 'RibbonStar',
  },
  EXCELLENT: {
    text: '꼭 다시 함께 하고 싶은 동료에요',
    icon: 'HeartPulse',
  },
  GOOD: {
    text: '좋은 점이 많은 동료에요',
    icon: 'Lightbulb',
  },
  AVERAGE: {
    text: '좋은 점도 있고 아쉬운 점도 있는 동료에요',
    icon: 'ThumbLikeDislike',
  },
  BELOW_AVERAGE: {
    text: '아쉬운 점이 많은 동료에요',
    icon: 'CommentError',
  },
  POOR: {
    text: '더 이상 함께 하고 싶지 않은 동료에요',
    icon: 'PersonDelete',
  },
  WORST: {
    text: '같이 일 하기 힘든 최악의 동료에요',
    icon: 'ThumbDislike',
  },
};
