import card_D from '@assets/card_D.png';
import card_I from '@assets/card_I.png';
import card_S from '@assets/card_S.png';
import card_C from '@assets/card_C.png';

export const cardItem = {
  D: card_D,
  I: card_I,
  S: card_S,
  C: card_C,
};

export type CardType = keyof typeof cardItem;

export const cardText = {
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
  C: { title: '미모사', description: '신중하게 설계하며 \n 분석적인 동료' },
};
