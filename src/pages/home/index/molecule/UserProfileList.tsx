import Button from '@components/common/atom/Button';
import ProfileListItem from '@components/common/molecule/ProfileListItem';
import { useFlow } from '@hooks/common/useStackFlow';
import { PeerSimpleProfileType } from '@type/index';

export default function UserProfileList({
  data,
}: {
  data: PeerSimpleProfileType[];
}) {
  const { push } = useFlow();

  const handlePeerDetail = (memberId: string) => {
    push('PeerDetailPage', { memberId });
  };

  if (!data || data.length === 0 || !data[0]) {
    return <h1>데이터가 없습니다</h1>;
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
