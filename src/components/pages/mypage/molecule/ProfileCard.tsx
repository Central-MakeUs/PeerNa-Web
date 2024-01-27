import { useFlow } from '@hooks/useStackFlow';
import ProfileListItem from '@components/common/molecule/ProfileListItem';
import Button from '@components/common/atom/Button';
import Typography from '@components/common/atom/Typography';
import { JobList } from '@constants/member';
import { PartList } from '@constants/member';
import { CardType } from '@constants/card';

export interface ProfileCardInfo {
  name: string;
  testType: CardType;
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

  return (
    <article className="pb-10">
      <ProfileListItem
        username={memberInfo.name}
        position={
          PartList.find(item => item.key === memberInfo.part)?.text as string
        }
        information={
          JobList.find(item => item.key === memberInfo.job)?.text as string
        }
        testType={memberInfo.testType}
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
