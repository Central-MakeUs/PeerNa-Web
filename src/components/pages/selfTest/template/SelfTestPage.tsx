import Button from '@components/common/atom/Button';
import Typography from '@components/common/atom/Typography';
import InputName from '@components/pages/selfTest/organism/InputName';
import SelectJob from '@components/pages/selfTest/organism/SelectJob';
import SelectPosition from '@components/pages/selfTest/organism/SelectPosition';
import { selfTestTitle } from '@constants/selfTest';
import useSelfTestInformation from '@hooks/useSelfTestInformation';
import { useFlow } from '@hooks/useStackFlow';
import { AppScreen, IconBack } from '@stackflow/plugin-basic-ui';
import { ActivityComponentType } from '@stackflow/react';
import { useEffect } from 'react';

type OnboardParams = {
  step: string;
};

const SelfTestPage: ActivityComponentType<OnboardParams> = ({ params }) => {
  const { selfTest, isValidName } = useSelfTestInformation();

  const curStep = parseInt(params.step ?? 1);
  const nextStep = String(curStep + 1);
  const lastStep = selfTestTitle.length;

  const { push, pop, replace } = useFlow();
  const handleClickStepPush = () => {
    if (curStep === lastStep) {
      push('CommonTestPage', { type: 'self' });
      return;
    }

    replace('SelfTestPage', { step: nextStep }, { animate: true });
  };

  const stepValidation = () => {
    if (curStep === 1) return !isValidName;
    if (curStep === 2) return selfTest.job === '';
    if (curStep === 3) return selfTest.position === '';
  };

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    if (selfTest.job !== '' && curStep === 2) {
      timeout = setTimeout(() => {
        push('SelfTestPage', { step: nextStep });
      }, 500);
    }
    return () => clearTimeout(timeout);
  }, [selfTest]);

  return (
    <AppScreen>
      <div className="flex flex-col px-5">
        <div className="box-border w-full h-[68px] px-2 py-[18px] flex items-center justify-between bg-transparent">
          <button onClick={() => pop()}>
            <IconBack />
          </button>
        </div>
        <div className="flex flex-col mt-6 gap-4">
          <div className="py-4">
            <Typography variant="header01">
              {selfTestTitle[curStep - 1]}
            </Typography>
          </div>
        </div>
        {curStep === 1 && <InputName />}
        {curStep === 2 && <SelectJob />}
        {curStep === 3 && <SelectPosition />}
      </div>
      <div className="absolute bottom-5 w-full px-5">
        <Button onClick={handleClickStepPush} isDisabled={stepValidation()}>
          {curStep === lastStep ? '시작하기' : '다음'}
        </Button>
      </div>
    </AppScreen>
  );
};

export default SelfTestPage;
