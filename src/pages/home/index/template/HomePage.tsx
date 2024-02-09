import Button from '@components/common/atom/Button';
import IntersectionBox from '@components/common/atom/IntersectionBox';
import Spinner from '@components/common/atom/Spinner';
import Typography from '@components/common/atom/Typography';
import BottomNavigation from '@components/common/molecule/BottomNavigation';
import ButtonContainer from '@components/common/molecule/ButtonContainer';
import Modal from '@components/common/molecule/LegacyModal';
import UnderlineTabs from '@components/common/molecule/UnderlineTabs';
import AppScreenContainer from '@components/wrapper/AppScreenContainter';
import Content from '@components/wrapper/Content';
import ErrorBoundaryWithSuspense from '@components/wrapper/ErrorBoundaryWithSuspense';
import Footer from '@components/wrapper/Footer';
import Header from '@components/wrapper/Header';
import useGetSearchPeerPart from '@hooks/api/home/search/useGetSearchPeerPart';
import usePostPushAgree from '@hooks/api/member/index/usePostPushAgree';
import useIntersection from '@hooks/common/useIntersection';
import useModal from '@hooks/store/useModal';
import { Tab } from '@nextui-org/react';
import HeaderContainer from '@pages/mypage/index/molecule/HeaderContainer';
import Layout from '@pages/mypage/index/organism/Layout';
import { ActivityComponentType } from '@stackflow/react';
import { ModalStateType, modalState } from '@store/modal';
import { PartType } from '@type/enums';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useRecoilState } from 'recoil';
import ReviewButton from '../atom/ReviewButton';
import PeerTypeAvatarList from '../molecule/PeerTypeAvatarList';
import UserProfileList from '../molecule/UserProfileList';

const HomePage: ActivityComponentType = () => {
  const [currentTab, setCurrentTab] = useState('ALL');

  const { data, refetch, isFetchingNextPage, fetchNextPage } =
    useGetSearchPeerPart(currentTab);

  const [modal, setModal] = useRecoilState<ModalStateType>(modalState);
  const { openModal, closeModal } = useModal('alarm');

  useEffect(() => {
    if (!modal['alarm']) {
      openModal();
      setModal(prevModal => ({
        ...prevModal,
        alaram: true,
      }));
    }
  }, []);

  const { mutate } = usePostPushAgree();

  useEffect(() => {
    refetch();
  }, [currentTab]);

  const handleClickAlaramDecline = () => {
    mutate({ pushAgree: false });
    toast.success('푸시 알림 설정을 거부했습니다.');
    closeModal();
  };

  const handleClickAlarmAccept = () => {
    mutate({ pushAgree: true });
    toast.success('푸시 알림 설정이 완료되었습니다');
    closeModal();
  };

  const intersectionRef = useIntersection(fetchNextPage);

  return (
    <AppScreenContainer>
      <div className="w-full bg-peer-bg bg-no-repeat bg-cover flex flex-col">
        <Header>
          <Header.Body className="flex pl-5 pt-10 pr-3 pb-4 mb-[163px] relative">
            <Header.Title>PeerNa</Header.Title>
          </Header.Body>
        </Header>
        <Content>
          <Layout>
            <HeaderContainer size="md">
              <Typography variant="header03">
                원하는 유형의 동료를 찾아보세요
              </Typography>
            </HeaderContainer>
            <PeerTypeAvatarList />
            <ReviewButton />
            <Modal
              type="alarm"
              modalHeader={`PeerNa에서 \n 알림을 보내고자 합니다`}
              modalBody={`해당 기기로 피어 테스트 응답 요청 및 \n 프로젝트 제안 등 서비스 이용에 필요한 \n 안내 사항을 푸시 알림으로 알려드릴게요 \n \n 앱 푸시에 수신 동의하시겠습니까?`}
              footer={
                <ButtonContainer direction="row">
                  <Button
                    buttonVariant="tertiary"
                    onClick={handleClickAlaramDecline}
                  >
                    허용 안함
                  </Button>
                  <Button onClick={handleClickAlarmAccept}>허용</Button>
                </ButtonContainer>
              }
            />
            <UnderlineTabs
              selectedKey={currentTab}
              onSelectionChange={key => setCurrentTab(key as PartType)}
            >
              <Tab key="ALL" title="전체" />,
              <Tab key="PLANNER" title="기획자" />,
              <Tab key="DESIGNER" title="디자이너" />,
              <Tab key="FRONT_END" title="FE 개발자" />,
              <Tab key="BACK_END" title="BE 개발자" />,
            </UnderlineTabs>
            <ErrorBoundaryWithSuspense>
              <UserProfileList
                data={data?.pages.flatMap(profile => profile.result)}
              />
            </ErrorBoundaryWithSuspense>
            <IntersectionBox ref={intersectionRef} />
            {isFetchingNextPage && <Spinner />}
          </Layout>
        </Content>
        <Footer bottom={0}>
          <BottomNavigation />
        </Footer>
      </div>
    </AppScreenContainer>
  );
};

export default HomePage;
