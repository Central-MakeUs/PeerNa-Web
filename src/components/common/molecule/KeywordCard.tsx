import Chip from '@components/common/atom/Chip';
import SvgIcon from '@components/common/atom/SvgIcon';
import Typography from '@components/common/atom/Typography';
import { Palette } from '@constants/styles';
import { Spacer } from '@nextui-org/react';

interface KeywordCard {
  title: string;
  subtitle: string;
  // TODO) keyword 타입 추가 예정
  keywords: string[];
}

export default function KeywordCard({
  title,
  subtitle,
  keywords,
}: KeywordCard) {
  return (
    <div className="w-[350px] h-[200px] border-1 rounded-xl py-[24px] px-[18px]">
      <div className="flex flex-col gap-1">
        <Typography variant="header03">{title}</Typography>
        <Typography variant="body05" className={`text-[${Palette.gray05}]`}>
          {subtitle}
        </Typography>
      </div>
      <Spacer y={6} />
      <div className="flex flex-wrap gap-2">
        {keywords.map((keyword, index) => (
          <Chip key={index} type="I">
            {keyword}
          </Chip>
        ))}
        {keywords.length === 0 && (
          <div className="w-[310px] h-[80px] bg-gray01 py-[14px] px-[58px] flex flex-col gap-1 items-center rounded-xl">
            <SvgIcon id="LockClosed" width={28} height={28} color="gray04" />
            <Typography variant="body04" className={`text-[${Palette.gray04}]`}>
              평판이 3개 이상이여야 볼 수 있어요.
            </Typography>
          </div>
        )}
      </div>
    </div>
  );
}
