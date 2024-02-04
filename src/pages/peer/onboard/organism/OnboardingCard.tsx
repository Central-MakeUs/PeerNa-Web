import Typography from '@components/common/atom/Typography';
import FixedCenter from '@components/wrapper/FixedCenter';
import { ON_BOARDING_IMAGE_LIST } from "@constants/images";
import { ON_BOARDING_HEADER_TEXT } from "@constants/onboard";
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
      <FixedCenter>
        <img src={ON_BOARDING_IMAGE_LIST[index]} className="max-w-[400px]" />
      </FixedCenter>
    </Fragment>
  );
}
