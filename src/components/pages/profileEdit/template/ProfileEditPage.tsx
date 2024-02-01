import Spinner from '@components/common/atom/Spinner';
import TopHeader from '@components/common/organism/TopHeader';
import AppScreenContainer from '@components/wrapper/AppScreenContainter';
import FixedBottomButton from '@components/wrapper/FixedBottomButton';
import FixedButtonContainer from '@components/wrapper/FixedButtonContainer';
import { JobList, PartList } from '@constants/member';

import { useGetMe } from '@hooks/api/useGetMe';
import { usePatchMyProfile } from '@hooks/api/usePatchMyProfile';
import { useFlow } from '@hooks/useStackFlow';
import { ActivityComponentType } from '@stackflow/react';
import { profileSelfState } from '@store/profileSelfState';
import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import JobDrawer from '../molecule/JobDrawer';
import PositionDrawer from '../molecule/PosititonDrawer';
import ProfileEditList from '../organism/ProfileEditList';

const ProfileEditPage: ActivityComponentType = () => {
  const { pop } = useFlow();
  const { data: myProfileInfo, isLoading, isError } = useGetMe();
  const [profileSelf, setProfileSelf] = useRecoilState(profileSelfState);
  const [openJobBottomSheet, setOpenJobBottomSheet] = useState<boolean>(false);
  const [openPartBottomSheet, setOpenPartBottomSheet] =
    useState<boolean>(false);
  const [isModified, setIsModified] = useState<boolean>(false);

  useEffect(() => {
    if (myProfileInfo) {
      setProfileSelf({
        job: JobList.find(job => job.key === myProfileInfo.job)?.text as string,
        part: PartList.find(part => part.key === myProfileInfo.part)
          ?.text as string,
        oneLiner: myProfileInfo.oneLiner,
      });
    }
  }, [myProfileInfo]);

  const profileData = {
    job: JobList.find(job => job.text === profileSelf.job)?.key as string,
    part: PartList.find(part => part.text === profileSelf.part)?.key as string,
    oneLiner: profileSelf?.oneLiner,
  };

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
    mutate(profileData);
  };

  const handleChangeOneLiner = (newLiner: string) => {
    setProfileSelf(prev => ({
      ...prev,
      oneLiner: newLiner,
    }));
    setIsModified(true);
  };

  const handleClick = () => pop();

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <p>에러 발생!</p>;
  }

  return (
    <AppScreenContainer>
      <TopHeader title="프로필 수정" onClick={handleClick} />
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
