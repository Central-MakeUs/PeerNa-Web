import Button from '@components/common/atom/Button';
import Typography from '@components/common/atom/Typography';
import ProfileListItem from '@components/common/molecule/ProfileListItem';
import { useFlow } from '@hooks/common/useStackFlow';
import { Spacer } from '@nextui-org/react';
import { ProfileCardInfo } from '@type/index';
import { Fragment } from 'react';

export default function ProfileCard({
  memberInfo,
}: {
  memberInfo: ProfileCardInfo;
}) {
  const { push } = useFlow();
  const handleProfileEdit = () => {
    push('ProfileEditPage', {});
  };

  return (
    <Fragment>
      <ProfileListItem
        isMyProfile={true}
        name={memberInfo.name}
        part={memberInfo.part}
        job={memberInfo.job}
        peerTestType={memberInfo.testType}
        totalScore={memberInfo.totalScore}
        oneLiner={memberInfo.oneLiner}
      >
        <Button
          buttonVariant="tertiary"
          className="!max-w-[103px] !h-[40px] !px-5 !py-2.5 flex-1 !min-w-min"
          onClick={handleProfileEdit}
        >
          <Typography
            variant="body03"
            fontColor="gray08"
            className="!whitespace-nowrap"
          >
            프로필 수정
          </Typography>
        </Button>
      </ProfileListItem>
      <Spacer y={8} />
    </Fragment>
  );
}
