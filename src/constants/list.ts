
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
