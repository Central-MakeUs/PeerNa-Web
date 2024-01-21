import Typography from '@components/common/atom/Typography';
import NavigationHeader from '@components/common/molecule/NavigationHeader';
import InputName from '@components/pages/selfTest/organism/InputName';
import SelectJob from '@components/pages/selfTest/organism/SelectJob';
import SelectPosition from '@components/pages/selfTest/organism/SelectPosition';
import AppScreenContainer from '@components/wrapper/AppScreenContainter';
import FixedBottomButton from '@components/wrapper/FixedBottomButton';
import { selfTestTitle } from '@constants/selfTest';
import useSelfTestInformation from '@hooks/useSelfTestInformation';
import { useFlow } from '@hooks/useStackFlow';
import { ActivityComponentType } from '@stackflow/react';

type OnboardParams = {
  step: string;
};

const SelfTestPage: ActivityComponentType<OnboardParams> = ({ params }) => {
  const { selfTest, isValidName } = useSelfTestInformation();

  const curStep = parseInt(params.step ?? 1);
  const nextStep = String(curStep + 1);
  const lastStep = selfTestTitle.length;

  const { push, pop } = useFlow();
  const handleClick = () => {
    if (curStep === lastStep) {
      push('CommonTestPage', { type: 'self', step: '1' });
      return;
    }

    push('SelfTestPage', { step: nextStep });
  };

  const stepValidation = () => {
    if (curStep === 1) return !isValidName;
    if (curStep === 2) return selfTest.job === '';
    if (curStep === 3) return selfTest.position === '';
  };

  const isValidPush = stepValidation();

  return (
    <AppScreenContainer>
      <NavigationHeader
        backIconProps={{
          isShow: true,
          handleClick: () => pop({ animate: true }),
        }}
        bodyProps={{
          isShow: true,
          title: selfTestTitle[curStep - 1],
          marginClass: 'mt-4',
        }}
      />
      {curStep === 1 && <InputName />}
      {curStep === 2 && <SelectJob />}
      {curStep === 3 && <SelectPosition />}

      <FixedBottomButton handleClick={handleClick} isDisabled={isValidPush}>
        <Typography variant="body02" fontColor="white">
          {curStep === lastStep ? '시작하기' : '다음'}
        </Typography>
      </FixedBottomButton>
    </AppScreenContainer>
  );
};

export default SelfTestPage;
