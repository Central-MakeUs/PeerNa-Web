import Button from '@components/common/atom/Button';
import Spinner from '@components/common/atom/Spinner';
import Typography from '@components/common/atom/Typography';
import ProfileListItem from '@components/common/molecule/ProfileListItem';
import { useFlow } from '@hooks/common/useStackFlow';
import EmptyData from '@pages/home/index/atom/EmptyData';
import { PeerSimpleProfileType } from '@type/index';

type UserProfileListProps = {
  data?: PeerSimpleProfileType[];
  isLoading: boolean;
};

export default function UserProfileList({
  data,
  isLoading,
}: UserProfileListProps) {
  const { push } = useFlow();

  const handlePeerDetail = (memberId: string) => {
    push('PeerDetailPage', { memberId });
  };

  if (isLoading) return <Spinner />;

  if (data?.length === 0) {
    return <EmptyData />;
  }

  return (
    <ul className="w-full flex flex-col">
      {data?.map(user => {
        return (
          <li key={user.memberId}>
            <ProfileListItem
              isMyProfile={false}
              peerTestType={user.peerTestType}
              name={user.name}
              part={user.part}
              totalScore={user.totalScore}
              job={user.job}
              oneLiner={user.oneLiner}
            >
              <Button
                buttonSize="md"
                buttonVariant="tertiary"
                onClick={() => handlePeerDetail(user.memberId.toString())}
              >
                <Typography
                  variant="body03"
                  fontColor="gray08"
                  className="!whitespace-nowrap"
                >
                  자세히
                </Typography>
              </Button>
            </ProfileListItem>
          </li>
        );
      })}
    </ul>
  );
}
