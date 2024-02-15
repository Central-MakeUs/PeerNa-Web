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
import useGetMyPageInfo from '@hooks/api/member/index/useGetMypageInfo';
import useSendKakaoMessage from '@hooks/common/useSendKakoMessage';
import { useFlow } from '@hooks/common/useStackFlow';
import useModal from '@hooks/store/useModal';
import { Spacer, Tab } from '@nextui-org/react';
import ProfileCard from '@pages/mypage/index/molecule/ProfileCard';
import SelfTestModal from '@pages/mypage/index/molecule/SelfTestModal';
import CardContent from '@pages/mypage/index/organism/CardContent';
import KeywordContent from '@pages/mypage/index/organism/KeywordContent';
import Layout from '@pages/mypage/index/organism/Layout';
import { ActivityComponentType } from '@stackflow/react';
import { useEffect } from 'react';
import CardTestResult from '../molecule/CardTestResult';

const MyPage: ActivityComponentType = () => {
  const { data } = useGetMyPageInfo();

  const { memberMyPageInfoDto, peerTestCount, peerTestType } = data;

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

  useEffect(() => {
    if (!selfTestType) {
      openModal();
    }
  }, []);

  const handleSendKakaoMessage = useSendKakaoMessage();
  const title = '저는 어떤 동료인가요?';
  const description = '함께한 동료에 대해 알려주세요.';
  const buttonText = '피어 테스트 응답하기';
  const imagePath =
    'https://lh3.googleusercontent.com/u/0/drive-viewer/AEYmBYTMvDA1jejdkIRTg7jKQg9KDNB1yXAZ-zW7EOaTqlAjOsqxJlsG8PH9cSk5UOENxqdZzxVUdhTq8lOfccEjqeXKveLD=w1920-h868';
  const path = `/review/peer/?uuid=${uuid}`;

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
                onClick={() =>
                  handleSendKakaoMessage({
                    title,
                    description,
                    buttonText,
                    imagePath,
                    path,
                  })
                }
              >
                동료에게 물어보기
              </Button>
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
