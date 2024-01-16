import Button from '@components/common/atom/Button';
import Typography from '@components/common/atom/Typography';
import InputName from '@components/pages/selfTest/organism/InputName';
import { selfTestTitle } from '@constants/testTitle';
import useSelfTestInformation from '@hooks/useSelfTestInformation';
import { useFlow } from '@hooks/useStackFlow';
import { AppScreen, IconBack } from '@stackflow/plugin-basic-ui';
import { ActivityComponentType } from '@stackflow/react';

type OnboardParams = {
  step: string;
};

const SelfTestPage: ActivityComponentType<OnboardParams> = ({ params }) => {
  const { isValidName } = useSelfTestInformation();

  const curStep = parseInt(params.step ?? 1);
  const nextStep = String(curStep + 1);
  const lastStep = selfTestTitle.length;

  const { replace } = useFlow();
  const handleClickStepPush = () => {
    if (curStep === lastStep) {
      replace('SelfTestPage', { step: nextStep }, { animate: true });
      localStorage.setItem('OnBoard', 'true');
      return;
    }
    replace('SelfTestPage', { step: nextStep }, { animate: true });
  };

  return (
    <AppScreen>
      <div className="flex flex-col px-5">
        <div className="box-border w-full h-[68px] px-2 py-[18px] flex items-center justify-between bg-transparent">
          <IconBack />
        </div>
        <div className="flex flex-col mt-6 gap-4">
          <div className="py-4">
            <Typography variant="header01">
              {selfTestTitle[curStep - 1]}
            </Typography>
          </div>
        </div>
        {curStep === 1 && <InputName />}
        {curStep === 2 && <InputName />}
        {curStep === 3 && <InputName />}
      </div>
      <div className="absolute bottom-5 w-full px-5">
        <Button onClick={handleClickStepPush} isDisabled={!isValidName}>
          {curStep === lastStep ? '시작하기' : '다음'}
        </Button>
      </div>
    </AppScreen>
  );
};

export default SelfTestPage;
