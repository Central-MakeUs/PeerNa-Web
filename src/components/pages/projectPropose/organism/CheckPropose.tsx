import SvgIcon from '@components/common/atom/SvgIcon';
import FixedBottomButton from '@components/wrapper/FixedBottomButton';
import FixedCenter from '@components/wrapper/FixedCenter';
import { useFlow } from '@hooks/useStackFlow';
import { Fragment } from 'react';

interface CheckPropose {
  nextStep: string;
}

export default function CheckPropose({ nextStep }: CheckPropose) {
  const { push } = useFlow();
  const handleClickNextStep = () =>
    push('ProjectProposePage', { step: nextStep });
  return (
    <Fragment>
      <FixedCenter>
        <div className="w-[124px] h-[124px] bg-primary100 rounded-full flex justify-center items-center">
          <SvgIcon id="Shape" color="primary" width={64} height={64} />
        </div>
      </FixedCenter>
      <FixedBottomButton handleClick={handleClickNextStep}>
        자세히 알아보기
      </FixedBottomButton>
    </Fragment>
  );
}
