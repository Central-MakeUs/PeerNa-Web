import analyical from '@assets/image/ANALYICAL.png';
import cautious from '@assets/image/CAUTIOUS.png';
import challenging from '@assets/image/CHALLENGING.png';
import {
  default as comprehensive,
  default as cooperative,
} from '@assets/image/COOPERATIVE.png';
import driving from '@assets/image/DRIVING.png';
import future_oriented from '@assets/image/FUTURE_ORIENTED.png';
import multidimensional from '@assets/image/MULTIDIMENSIONAL.png';
import pragmative from '@assets/image/PRAGMATIC.png';
import warmhearted from '@assets/image/WARMHEARTED.png';
import card_locked from '@assets/image/card_locked.png';
import card_result from '@assets/image/userType.png';

export const TestCardImage = {
  DRIVING: driving,
  COOPERATIVE: cooperative,
  ANALYTICAL: analyical,
  COMPREHENSIVE: comprehensive,
  FUTURE_ORIENTED: future_oriented,
  PRAGMATIC: pragmative,
  MULTIDIMENSIONAL: multidimensional,
  WARMHEARTED: warmhearted,
  CAUTIOUS: cautious,
  CHALLENGING: challenging,
  LOCKED: card_locked,
  RESULT: card_result,
};

export const TestCardKeyword = {
  DRIVING: '추진하는',
  COOPERATIVE: '협조하는',
  ANALYTICAL: '분석적인',
  COMPREHENSIVE: '종합적인',
  FUTURE_ORIENTED: '미래지향적인',
  PRAGMATIC: '냉철한',
  MULTIDIMENSIONAL: '입체적인',
  WARMHEARTED: '따뜻한',
  CAUTIOUS: '신중한',
  CHALLENGING: '도전적인',
};

export const TestResultCardDescription = {
  DRIVING: '팀을 이끈느 배의 선장 같은 동료에요',
  COOPERATIVE: '팀을 든든히 받쳐주는 버팀목 같은 동료에요',
  ANALYTICAL: '목표 실현 가능성을 높이는 동료에요',
  COMPREHENSIVE: '현실과 이상을 두루 고려하는 동료에요',
  FUTURE_ORIENTED: '넓은 시야로 큰 그림을 그리는 동료에요',
  PRAGMATIC: '솔직한 대화를 이끌어 내는 동료에요',
  MULTIDIMENSIONAL: '안정적이고 견고한 외유내강의 동료에요',
  WARMHEARTED: '힘과 용기를 불어넣는 동료에요',
  CAUTIOUS: '위험성과 변수를 줄여 줄 동료에요',
  CHALLENGING: '팀에게 새로운 길을 열어 줄 동료에요',
};

export type CardType = keyof typeof TestCardKeyword;

export const Value = {
  CardPurple: '가치관',
  CardOrange: '사고 방식',
  CardPink: '소통 방식',
  CardYellow: '결정 방식',
};

export const Keyword = {
  CardPurple: '추진하는',
  CardOrange: '분석적인',
  CardPink: '따듯한',
  CardYellow: '도전적인',
};

export const Description = {
  CardPurple:
    '추진력 있는 모습으로 팀을 이끌어갈 분이군요! 고민보다 GO! 실행력은 좋은 결과를 만들어내죠.',
  CardOrange:
    '분석적인 사고 방식으로 상황을 다각적으로 파악하여 최선의 결과를 도출하려고 하는군요!',
  CardPink:
    '동료들에게 힘을 불어 넣는 따뜻한 화법을 갖고 계시는군요! 칭찬은 고래도 춤 추게 하는 법이죠',
  CardYellow:
    '해보자 해보자 후회하지 말고! 결정을 내려야 하는 순간에는 새로운 것을 시도할 줄 아는군요!',
};

export const CardDescription = {
  DRIVING: '팀을 이끄는 배의 선장 같은 동료에요',
  COOPERATIVE: '팀을 든든히 받쳐주는 버팀목 같은 동료에요',
  ANALYTICAL: '목표 실현 가능성을 높이는 동료에요',
  COMPREHENSIVE: '현실과 이상을 두루 고려하는 동료에요',
  FUTURE_ORIENTED: '넓은 시야로 큰 그림을 그리는 동료에요',
  PRAGMATIC: '솔직한 대화를 이끌어 내는 동료에요',
  MULTIDIMENSIONAL: '안정적이고 견고한 외유내강의 동료에요',
  WARMHEARTED: '힘과 용기를 불어넣는 동료에요',
  CAUTIOUS: '위험성과 변수를 줄여 줄 동료에요',
  CHANLLANGE: '팀에게 새로운 길을 열어 줄 동료에요',
};

export type PeerCardType =
  | 'DRIVING'
  | 'COOPERATIVE'
  | 'ANALYTICAL'
  | 'COMPREHENSIVE'
  | 'FUTURE_ORIENTED'
  | 'PRAGMATIC'
  | 'MULTIDIMENSIONAL'
  | 'WARMHEARTED'
  | 'CAUTIOUS'
  | 'CHANLLANGE';
export const CardInformation: Record<
  PeerCardType,
  {
    image: string;
    caption: string;
    title: string;
    content: string;
  }
> = {
  DRIVING: {
    image: TestCardImage.DRIVING,
    caption: '가치관',
    title: '추진하는',
    content: '팀을 이끄는 배의 선장 같은 동료에요',
  },
  COOPERATIVE: {
    image: TestCardImage.COOPERATIVE,
    caption: '가치관',
    title: '협조하는',
    content: '팀을 든든히 받쳐주는 버팀목 같은 동료에요',
  },
  ANALYTICAL: {
    image: TestCardImage.ANALYTICAL,
    caption: '사고 방식',
    title: '분석적인',
    content: '목표 실현 가능성을 높이는 동료에요',
  },
  COMPREHENSIVE: {
    image: TestCardImage.COMPREHENSIVE,
    caption: '사고 방식',
    title: '종합적인',
    content: '현실과 이상을 두루 고려하는 동료에요',
  },
  FUTURE_ORIENTED: {
    image: TestCardImage.FUTURE_ORIENTED,
    caption: '사고 방식',
    title: '미래지향적인',
    content: '넓은 시야로 큰 그림을 그리는 동료에요',
  },
  PRAGMATIC: {
    image: TestCardImage.PRAGMATIC,
    caption: '소통 방식',
    title: '냉철한',
    content: '솔직한 대화를 이끌어 내는 동료에요',
  },
  MULTIDIMENSIONAL: {
    image: TestCardImage.MULTIDIMENSIONAL,
    caption: '소통 방식',
    title: '입체적인',
    content: '안정적이고 견고한 외유내강의 동료에요',
  },
  WARMHEARTED: {
    image: TestCardImage.WARMHEARTED,
    caption: '소통 방식',
    title: '따듯한',
    content: '힘과 용기를 불어넣는 동료에요',
  },
  CAUTIOUS: {
    image: TestCardImage.CAUTIOUS,
    caption: '결정 방식',
    title: '신중한',
    content: '위험성과 변수를 줄여 줄 동료에요',
  },
  CHANLLANGE: {
    image: TestCardImage.CHALLENGING,
    caption: '결정 방식',
    title: '신중한',
    content: '팀에게 새로운 길을 열어 줄 동료에요',
  },
};
