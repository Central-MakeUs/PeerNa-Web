import AppScreenContainer from '@components/wrapper/AppScreenContainter';
import TopHeader from '@components/common/organism/TopHeader';
import { useGetMe } from '@hooks/api/useGetMe';
import { usePatchMyProfile } from '@hooks/api/usePatchMyProfile';
import { useRecoilState } from 'recoil';
import { profileSelfState } from '@store/profileSelfState';
import PositionDrawer from '../molecule/PosititonDrawer';
import JobDrawer from '../molecule/JobDrawer';
import FixedButtonContainer from '@components/wrapper/FixedButtonContainer';
import FixedBottomButton from '@components/wrapper/FixedBottomButton';
import { useFlow } from '@hooks/useStackFlow';
import ProfileEditList from '../organism/ProfileEditList';
import { useEffect, useState } from 'react';
import { ActivityComponentType } from '@stackflow/react';

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

  const { mutate } = usePatchMyProfile();

  const handleClickJob = () => {
    setOpenJobBottomSheet(true);
    setIsModified(true);
  };

  const handleClickPart = () => {
    setOpenPartBottomSheet(true);
    setIsModified(true);
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
    setIsModified(true);
  };

  const handleBack = () => pop();

  return (
    <AppScreenContainer>
      <TopHeader title="프로필 수정" onClick={handleBack} />
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
      <FixedButtonContainer direction="row">
        <FixedBottomButton handleClick={handleProfile} isDisabled={!isModified}>
          저장
        </FixedBottomButton>
      </FixedButtonContainer>
    </AppScreenContainer>
  );
};

export default ProfileEditPage;
