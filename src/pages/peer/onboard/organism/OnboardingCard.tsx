import Typography from '@components/common/atom/Typography';
import { ON_BOARDING_IMAGE_LIST } from '@constants/images';
import { ON_BOARDING_HEADER_TEXT } from '@constants/onBoard';
import { Fragment } from 'react';

interface OnboardingCarProps {
  step: number;
}

export default function OnboardingCard({ step }: OnboardingCarProps) {
  const index = step - 1;

  return (
    <Fragment>
      <div className="flex flex-col w-[350px] py-10 box-content text-center gap-2">
        <Typography variant="header01">
          {ON_BOARDING_HEADER_TEXT[index]}
        </Typography>
      </div>
      <div className="w-full flex justify-center max-w-[400px]">
        <img src={ON_BOARDING_IMAGE_LIST[index]} className="w-full" />
      </div>
    </Fragment>
  );
}
