
import { PeerGrade, ResultKeyword, TestType } from "@type/enums";
import { PeerGradeTest, PeerKeywordCard, PeerTestText } from "@type/value";

export const TEST_TYPE_INFO: Record<TestType, PeerTestText> = {
  D: {
    title: '부바르디아',
    description: '적극적으로 성취하며 \n 주도적인 동료',
  },
  I: {
    title: '데이지',
    description: '긍정적으로 소통하며 \n 사교적인 동료',
  },
  S: {
    title: '바이올렛',
    description: '화합을 도모하며 \n 협조적인 동료',
  },
  C: {  
    title: '미모사',
    description: '신중하게 설계하며 \n 분석적인 동료',
  },
  
}

export const PEER_GRADE_INFO: Record<PeerGrade, PeerGradeTest> = {
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
    icon: 'LightBulb',
  },
  AVERAGE: {
    text: '좋은 점도 있고 아쉬운 점도 있는 동료에요',
    icon: 'ThumbLikeDisLike',
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
    icon: 'ThumbDown',
  },
};


export const KEYWORD_CARD_INFO: Record<
  ResultKeyword, PeerKeywordCard
> = {
  DRIVING: {
    image: 'DRIVING',
    caption: '가치관',
    title: '추진하는',
    content: '팀을 이끄는 배의 선장 같은 동료에요',
  },
  COOPERATIVE: {
    image: 'COOPERATIVE',
    caption: '가치관',
    title: '협조하는',
    content: '팀을 든든히 받쳐주는 버팀목 같은 동료에요',
  },
  ANALYTICAL: {
    image: 'ANALYTICAL',
    caption: '사고 방식',
    title: '분석적인',
    content: '목표 실현 가능성을 높이는 동료에요',
  },
  COMPREHENSIVE: {
    image: 'COMPREHENSIVE',
    caption: '사고 방식',
    title: '종합적인',
    content: '현실과 이상을 두루 고려하는 동료에요',
  },
  FUTURE_ORIENTED: {
    image: 'FUTURE_ORIENTED',
    caption: '사고 방식',
    title: '미래지향적인',
    content: '넓은 시야로 큰 그림을 그리는 동료에요',
  },
  PRAGMATIC: {
    image: 'PRAGMATIC',
    caption: '소통 방식',
    title: '냉철한',
    content: '솔직한 대화를 이끌어 내는 동료에요',
  },
  MULTIDIMENSIONAL: {
    image: 'MULTI_DIMENSIONAL',
    caption: '소통 방식',
    title: '입체적인',
    content: '안정적이고 견고한 외유내강의 동료에요',
  },
  WARMHEARTED: {
    image: 'WARMHEARTED',
    caption: '소통 방식',
    title: '따듯한',
    content: '힘과 용기를 불어넣는 동료에요',
  },
  CAUTIOUS: {
    image: 'CAUTIOUS',
    caption: '결정 방식',
    title: '신중한',
    content: '위험성과 변수를 줄여 줄 동료에요',
  },
  CHALLENGING: {
    image: 'CHALLENGING',
    caption: '결정 방식',
    title: '신중한',
    content: '팀에게 새로운 길을 열어 줄 동료에요',
  },
};

export const REVIEW_PICKER: { [key: number]: string[] } = {
  1: [
    '좋은 리더',
    '좋은 팔로워',
    '과업 지향',
    '관계 지향',
    '자신감 있는',
    '겸손한',
    '자율 추구',
    '체계 추구',
    '활기 있는',
    '여유 있는',
  ],
  2: [
    '비판적',
    '낙관적',
    '나무를 보는',
    '숲을 보는',
    '계획적',
    '유연한',
    '확고한',
    '관대한',
  ],
  3: [
    '직설적',
    '우회적',
    '객관적인 피드백',
    '정서적인 피드백',
    '주관이 뚜렷한',
    '수용을 잘하는',
    '의논 후 고민',
    '고민 후 의논',
  ],
  4: [
    '수치에 의존하는',
    '직관에 의존하는',
    '신중한',
    '신속한',
    '원리원칙에 따르는',
    '융통성있는',
    '관습을 따르는',
    '도전하는',
    '보수적',
    '개방적',
  ],
};

export const REVIEW_SELF_TITLE = [
  '셀프 테스트를 통해\n 내 피어 카드와 유형을 확인해보세요',
  '이름을 알려주세요.',
  '현재 직업은 무엇인가요?',
  '어떤 역할을 맡고 있나요?',
];


export const REVIEW_TITLE = {
  self: [
    '업무 시 나의 성향은',
    '업무 시 나의 사고 방식은',
    '업무 시 나의 소통 방식은',
    '업무 시 나의 결정 방식은',
  ],
  peer: (peerName: string) => [
    `업무 시 ${peerName}님의 성향은`,
    `업무 시 ${peerName}님의 사고 방식은`,
    `업무 시 ${peerName}님의 소통 방식은`,
    `업무 시 ${peerName}님의 결정 방식은`,
  ],
  peerReviewPrompt: (peerName?: string) =>
    `동료들에게 ${peerName ? `${peerName}님은` : '나는'} 어떤 동료일까요?`,
  oneLineReviewPrompt: (
    peerName?: string,
  ) => `동료로서의 ${peerName ? `${peerName}님을` : '나를'}
    한 줄로 설명한다면?`,
};


export const ON_BOARDING_HEADER_TEXT = [
  '당신의 동료가 피어나는 곳',
  '동료가 직접 응답해서 \n 더 정확하고 객관적인 내 프로필',
  '나는 어떤 동료와 잘 맞을까? \n 동료와 나의 직관적인 비교!',
  '잘 맞는 동료와 성공적인 프로젝트 \n 피어나에서 시작하세요!',
];
