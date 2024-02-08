import Button from '@components/common/atom/Button';
import AppScreenContainer from '@components/wrapper/AppScreenContainter';
import Content from '@components/wrapper/Content';
import ErrorBoundaryWithSuspense from '@components/wrapper/ErrorBoundaryWithSuspense';
import Footer from '@components/wrapper/Footer';
import Header from '@components/wrapper/Header';
import useGetMe from '@hooks/api/member/index/useGetMe';
import usePatchMyProfile from '@hooks/api/member/mypage/usePatchMyProfile';
import { useFlow } from '@hooks/common/useStackFlow';
import JobDrawer from '@pages/mypage/profileEdit/molecule/JobDrawer';
import PositionDrawer from '@pages/mypage/profileEdit/molecule/PosititonDrawer';
import ProfileEditList from '@pages/mypage/profileEdit/organism/ProfileEditList';
import { ActivityComponentType } from '@stackflow/react';
import { profileSelfState } from '@store/profileSelfState';
import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';

const ProfileEditPage: ActivityComponentType = () => {
  const { pop, replace } = useFlow();
  const { data: myProfileInfo } = useGetMe();
  const [profileSelf, setProfileSelf] = useRecoilState(profileSelfState);
  const [openJobBottomSheet, setOpenJobBottomSheet] = useState<boolean>(false);
  const [openPartBottomSheet, setOpenPartBottomSheet] =
    useState<boolean>(false);

  useEffect(() => {
    if (myProfileInfo) {
      setProfileSelf({
        job: myProfileInfo.job,
        part: myProfileInfo.part,
        oneLiner: myProfileInfo.oneLiner,
      });
    }
  }, [myProfileInfo]);

  const isValidProfileChange =
    myProfileInfo &&
    (myProfileInfo.job !== profileSelf.job ||
      myProfileInfo.part !== profileSelf.part ||
      myProfileInfo.oneLiner !== profileSelf.oneLiner);

  const { mutate } = usePatchMyProfile();

  const handleClickJob = () => {
    setOpenJobBottomSheet(true);
  };

  const handleClickPart = () => {
    setOpenPartBottomSheet(true);
  };

  const handleProfile = () => {
    mutate(profileSelf);

    replace('MyPage', {});
  };

  const handleChangeOneLiner = (newLiner: string) => {
    setProfileSelf(prev => ({
      ...prev,
      oneLiner: newLiner,
    }));
  };

  const handleBack = () => pop();

  return (
    <AppScreenContainer>
      <Header>
        <Header.TopBar>
          <Header.BackIcon handleClick={handleBack} />
          <Header.Title className="mx-auto">프로필 수정</Header.Title>
        </Header.TopBar>
      </Header>
      <Content>
        <PositionDrawer
          openPartBottomSheet={openPartBottomSheet}
          setOpenPartBottomSheet={setOpenPartBottomSheet}
        />
        <JobDrawer
          openJobBottomSheet={openJobBottomSheet}
          setOpenJobBottomSheet={setOpenJobBottomSheet}
        />
        <ErrorBoundaryWithSuspense>
          {myProfileInfo && (
            <ProfileEditList
              profileSelf={profileSelf}
              myProfileInfo={myProfileInfo}
              handleClickJob={handleClickJob}
              handleClickPart={handleClickPart}
              handleChangeOneLiner={handleChangeOneLiner}
            />
          )}
        </ErrorBoundaryWithSuspense>
      </Content>
      <Footer bottom={3} className="px-3">
        <Button onClick={handleProfile} isDisabled={!isValidProfileChange}>
          저장
        </Button>
      </Footer>
    </AppScreenContainer>
  );
};

export default ProfileEditPage;
