import Button from '@components/common/atom/Button';
import Typography from '@components/common/atom/Typography';
import ProfileListItem from '@components/common/molecule/ProfileListItem';
import { useFlow } from '@hooks/common/useStackFlow';
import { ProfileCardInfo } from '@type/index';

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
    <article className="pb-10">
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
          className="!w-[103px] !h-[40px] !px-5 !py-2.5 flex-1 !min-w-min"
          onClick={handleProfileEdit}
        >
          <Typography variant="body03" className="text-gray08">
            프로필 수정
          </Typography>
        </Button>
      </ProfileListItem>
    </article>
  );
}
