import card_purple from '@assets/image/card_purple.png';
import card_orange from '@assets/image/card_orange.png';
import card_pink from '@assets/image/card_pink.png';
import card_yellow from '@assets/image/card_yellow.png';

export const Image = {
  CardPurple: card_purple,
  CardOrange: card_orange,
  CardPink: card_pink,
  CardYellow: card_yellow,
};

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

export type CardType = keyof typeof Image;
