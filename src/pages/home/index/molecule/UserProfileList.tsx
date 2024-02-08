import Button from '@components/common/atom/Button';
import ProfileListItem from '@components/common/molecule/ProfileListItem';
import { useFlow } from '@hooks/common/useStackFlow';
import EmptyData from '@pages/home/index/atom/EmptyData';
import { PeerSimpleProfileType } from '@type/index';

export default function UserProfileList({
  data = [],
}: {
  data?: PeerSimpleProfileType[];
}) {
  const { push } = useFlow();

  const handlePeerDetail = (memberId: string) => {
    push('PeerDetailPage', { memberId });
  };

  if (data.length === 0) {
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
                자세히
              </Button>
            </ProfileListItem>
          </li>
        );
      })}
    </ul>
  );
}
