import Chip from '@components/common/atom/Chip';
import Typography from '@components/common/atom/Typography';
import { KEYWORD_MAPPER } from "@constants/mapper";
import { Spacer } from '@nextui-org/react';

interface KeywordCard {
  type: 'D' | 'I' | 'S' | 'C' | 'isDisabled';
  keywords: string[];
  title: string;
  subtitle: string;
  colorAnswerIdList: number[];
  selfTestIdList: number[];
}

export default function KeywordCard({
  type,
  keywords,
  title,
  subtitle,
  colorAnswerIdList,
  selfTestIdList,
}: KeywordCard) {
  return (
    <div className="w-full border-1 rounded-xl py-[24px] px-[20px]">
      <div className="flex flex-col gap-1">
        <Typography variant="header03">{title}</Typography>
        <Typography variant="body05" fontColor="gray05">
          {subtitle}
        </Typography>
      </div>
      <Spacer y={6} />
      <div className="flex flex-wrap gap-2">
        {keywords.map((keyword: string, index: number) => (
          <Chip
            key={index}
            chipType={
              !colorAnswerIdList.includes(selfTestIdList[index])
                ? 'isDisabled'
                : type
            }
            icon={KEYWORD_MAPPER[type].icons[selfTestIdList[index] - 1]}
          >
            {keyword}
          </Chip>
        ))}
      </div>
    </div>
  );
}
