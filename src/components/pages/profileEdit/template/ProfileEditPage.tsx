import AppScreenContainer from '@components/wrapper/AppScreenContainter';
import TopHeader from '@components/common/organism/TopHeader';
import { useProfileInfo } from '@hooks/query/useProfileInfo';
import { useRecoilState } from 'recoil';
import { profileSelfState } from '@store/profileSelfState';
import PositionDrawer from '../molecule/PosititonDrawer';
import JobDrawer from '../molecule/JobDrawer';
import FixedButtonContainer from '@components/wrapper/FixedButtonContainer';
import FixedBottomButton from '@components/wrapper/FixedBottomButton';
import { useFlow } from '@hooks/useStackFlow';
import ProfileEditList from '../organism/ProfileEditList';
import { JobList } from '@constants/member';
import { PartList } from '@constants/member';
import { useProfileEdit } from '@hooks/query/useProfileEdit';
import Spinner from '@components/common/atom/Spinner';
import { useEffect, useState } from 'react';

export default function ProfileEditPage() {
  const { pop } = useFlow();
  const { data: myProfileInfo, isLoading, isError } = useProfileInfo();
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

  const { mutate } = useProfileEdit();

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
}
