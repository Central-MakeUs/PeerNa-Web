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
