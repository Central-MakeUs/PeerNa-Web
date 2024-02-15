import Button from '@components/common/atom/Button';
import IconButton from '@components/common/atom/IconButton';
import Typography from '@components/common/atom/Typography';
import BottomNavigation from '@components/common/molecule/BottomNavigation';
import ButtonContainer from '@components/common/molecule/ButtonContainer';
import RadioTabs from '@components/common/molecule/RadioTabs';
import AppScreenContainer from '@components/wrapper/AppScreenContainter';
import Content from '@components/wrapper/Content';
import ErrorBoundaryWithSuspense from '@components/wrapper/ErrorBoundaryWithSuspense';
import Footer from '@components/wrapper/Footer';
import Header from '@components/wrapper/Header';
import { PEER_TEST_REQUEST } from '@constants/share';
import useGetMyPageInfo from '@hooks/api/member/index/useGetMypageInfo';
import useSendKakaoMessage, {
  PEER_TEST_URL,
} from '@hooks/common/useSendKakoMessage';
import { useFlow } from '@hooks/common/useStackFlow';
import useModal from '@hooks/store/useModal';
import { Spacer, Tab } from '@nextui-org/react';
import CardTestResult from '@pages/mypage/index/molecule/CardTestResult';
import ProfileCard from '@pages/mypage/index/molecule/ProfileCard';
import SelfTestModal from '@pages/mypage/index/molecule/SelfTestModal';
import CardContent from '@pages/mypage/index/organism/CardContent';
import KeywordContent from '@pages/mypage/index/organism/KeywordContent';
import Layout from '@pages/mypage/index/organism/Layout';
import ShareDrawer from '@pages/review/result/molecule/ShareDrawer';
import { ActivityComponentType } from '@stackflow/react';
import { useEffect, useState } from 'react';

const MyPage: ActivityComponentType = () => {
  const { data } = useGetMyPageInfo();

  console.log(data);
  const [openBottomSheet, setOpenBottomSheet] = useState<boolean>(false);

  const { memberMyPageInfoDto, peerTestCount, peerTestType } = data;

  const { handleClickShareLink, handleSendKakaoMessage } =
    useSendKakaoMessage();

  const { openModal } = useModal('selfTest');

  const { push } = useFlow();
  const selfTestType = memberMyPageInfoDto.testType;
  const uuid = memberMyPageInfoDto.uuid;

  const handleMoreFeedback = () => {
    push('MoreFeedbackPage', {});
  };

  const handleSetting = () => {
    push('SettingPage', {});
  };

  const handleKakaoShare = () => {
    handleSendKakaoMessage({
      ...PEER_TEST_REQUEST,
      url: PEER_TEST_URL(uuid),
    });
  };

  const handleCopyLink = () => {
    handleClickShareLink({
      type: 'peerTest',
      uuid: uuid,
    });
  };

  useEffect(() => {
    if (!selfTestType) {
      openModal();
    }
  }, []);

  const handleClickShare = () => setOpenBottomSheet(true);
  return (
    <AppScreenContainer>
      <Content>
        <div className="w-full bg-gray07">
          <Header>
            <Header.TopBar>
              <Typography variant="header01" as="h1" fontColor="white">
                마이페이지
              </Typography>
              <IconButton
                onClick={handleSetting}
                iconProps={{
                  id: 'Menu',
                  color: 'white',
                }}
              ></IconButton>
            </Header.TopBar>
          </Header>
          <ErrorBoundaryWithSuspense>
            {memberMyPageInfoDto && (
              <ProfileCard memberInfo={memberMyPageInfoDto} />
            )}
          </ErrorBoundaryWithSuspense>
          <Layout>
            <ErrorBoundaryWithSuspense>
              <CardTestResult
                peerTestCount={peerTestCount}
                peerTestType={peerTestType}
                selfTestType={selfTestType}
              />
            </ErrorBoundaryWithSuspense>
            <RadioTabs>
              <Tab key="me" title="카드 비교">
                <CardContent data={data} handleClick={handleMoreFeedback} />
              </Tab>
              <Tab key="peer" title="키워드 비교">
                <KeywordContent data={data} handleClick={handleMoreFeedback} />
              </Tab>
            </RadioTabs>
            <Spacer y={6} />
            <ButtonContainer direction="row">
              <Button
                buttonVariant="primary"
                className="px-4"
                onClick={handleClickShare}
              >
                동료에게 물어보기
              </Button>
              <ShareDrawer
                openBottomSheet={openBottomSheet}
                setOpenBottomSheet={setOpenBottomSheet}
                handleClickShareLink={handleCopyLink}
                handleClickKakaoShare={handleKakaoShare}
              />
            </ButtonContainer>
            <SelfTestModal />
          </Layout>
        </div>
        <Spacer y={24} />
      </Content>
      <Footer>
        <BottomNavigation />
      </Footer>
    </AppScreenContainer>
  );
};

export default MyPage;
