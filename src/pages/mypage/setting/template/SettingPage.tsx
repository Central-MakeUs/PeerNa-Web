import TopHeader from '@components/common/organism/TopHeader';
import AppScreenContainer from '@components/wrapper/AppScreenContainter';
import FixedBottomButton from '@components/wrapper/FixedBottomButton';
import FixedButtonContainer from '@components/wrapper/FixedButtonContainer';
import { useFlow } from '@hooks/common/useStackFlow';
import { ActivityComponentType } from '@stackflow/react';
import SettingMenu from '../molecule/SettingMenu';

const SettingPage: ActivityComponentType = () => {
  const { pop } = useFlow();
  const handleClick = () => pop();
  const handleLogout = () => {
    console.log('로그아웃');
  };
  return (
    <>
      <AppScreenContainer>
        <TopHeader title="설정" onClick={handleClick} />
        <SettingMenu />
      </AppScreenContainer>
      <FixedButtonContainer direction="row">
        <FixedBottomButton buttonVariant="naked" handleClick={handleLogout}>
          로그아웃
        </FixedBottomButton>
      </FixedButtonContainer>
    </>
  );
};

export default SettingPage;
