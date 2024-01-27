import TopHeader from '@components/common/organism/TopHeader';
import AppScreenContainer from '@components/wrapper/AppScreenContainter';
import SettingMenu from '../molecule/SettingMenu';
import { useFlow } from '@hooks/useStackFlow';
import FixedButtonContainer from '@components/wrapper/FixedButtonContainer';
import FixedBottomButton from '@components/wrapper/FixedBottomButton';

export default function SettingPage() {
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
}
