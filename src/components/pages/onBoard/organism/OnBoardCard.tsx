import Typography from '@components/common/atom/Typography';
import { OnboardStep } from '@constants/onboard';
import { Fragment } from 'react';

interface OnBoardCardProps {
  step: number;
}

export default function OnBoardCard({ step }: OnBoardCardProps) {
  return (
    <Fragment>
      <div className="flex flex-col w-[350px] p-5 box-content text-center gap-2">
        <Typography variant="header01">{OnboardStep[step].title}</Typography>
      </div>
      <div className="h-[50%] flex items-center">
        <div className="w-[290px] h-[290px] bg-slate-100 rounded-full"></div>
      </div>
    </Fragment>
  );
}
