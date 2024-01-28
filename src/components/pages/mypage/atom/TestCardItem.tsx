import Typography from '@components/common/atom/Typography';
import { CardType, TestCardImage, TestCardKeyword } from '@constants/image';
import React from 'react';

interface TestCardItemProps {
  cardType: CardType;
}

type TestCardImageType = {
  [key in CardType]: string;
};

type TestCardKeywordType = {
  [key in CardType]: string;
};

export default function TestCardItem({ cardType }: TestCardItemProps) {
  return (
    <div className="flex flex-col items-center gap-2">
      <img
        src={(TestCardImage as TestCardImageType)[cardType]}
        className="w-[82px]"
        alt={cardType}
      />
      <Typography variant="body04" fontColor="gray08">
        {(TestCardKeyword as TestCardKeywordType)[cardType]}
      </Typography>
    </div>
  );
}
