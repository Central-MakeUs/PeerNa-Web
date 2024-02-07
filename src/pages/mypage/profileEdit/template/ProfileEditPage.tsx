import Button from '@components/common/atom/Button';
import AppScreenContainer from '@components/wrapper/AppScreenContainter';
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
  const [isModified, setIsModified] = useState<boolean>(false);

  useEffect(() => {
    if (myProfileInfo) {
      setProfileSelf({
        job: myProfileInfo.job,
        part: myProfileInfo.part,
        oneLiner: myProfileInfo.oneLiner,
      });
    }
  }, [myProfileInfo]);
  console.log(myProfileInfo);

  function handleProfileChange() {
    return JSON.stringify(myProfileInfo) !== JSON.stringify(profileSelf);
  }

  useEffect(() => {
    const isProfileModified = handleProfileChange();
    setIsModified(isProfileModified);
  }, [profileSelf, myProfileInfo]);

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
      <main>
        <PositionDrawer
          openPartBottomSheet={openPartBottomSheet}
          setOpenPartBottomSheet={setOpenPartBottomSheet}
        />
        <JobDrawer
          openJobBottomSheet={openJobBottomSheet}
          setOpenJobBottomSheet={setOpenJobBottomSheet}
        />
        {myProfileInfo && (
          <ProfileEditList
            profileSelf={profileSelf}
            myProfileInfo={myProfileInfo}
            handleClickJob={handleClickJob}
            handleClickPart={handleClickPart}
            handleChangeOneLiner={handleChangeOneLiner}
          />
        )}
      </main>
      <Footer bottom={3}>
        <Button onClick={handleProfile} isDisabled={!isModified}>
          저장
        </Button>
      </Footer>
    </AppScreenContainer>
  );
};

export default ProfileEditPage;
