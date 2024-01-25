import { useFlow } from '@hooks/useStackFlow';
import ProfileListItem from '@components/common/molecule/ProfileListItem';
import Button from '@components/common/atom/Button';
import Typography from '@components/common/atom/Typography';

export interface ProfileCardInfo {
  name: string;
  testType: string;
  part: string;
  job: string;
  totalScore: number;
  oneLiner: string;
}

export default function ProfileCard({
  memberInfo,
}: {
  memberInfo: ProfileCardInfo;
}) {
  const { push } = useFlow();
  const handleProfileEdit = () => {
    push('ProfileEditPage', {});
  };

  console.log(memberInfo);

  return (
    <article className="pb-10">
      <ProfileListItem
        bezeled="Person"
        username={memberInfo.name}
        position={memberInfo.part}
        information={memberInfo.job}
        score={memberInfo.totalScore}
        introduce={memberInfo.oneLiner}
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
