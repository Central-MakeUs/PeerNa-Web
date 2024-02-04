import Button from '@components/common/atom/Button';
import ProfileListItem from '@components/common/molecule/ProfileListItem';
import { useFlow } from '@hooks/common/useStackFlow';

export default function UserProfileList({
  data,
}: {
  data: MemberSimpleDTOPage[];
}) {
  const { push } = useFlow();

  const handlePeerDetail = (memberId: string) => {
    push('PeerDetailPage', { memberId });
  };

  if (!data[0]) {
    return <h1>데이터가 없습니다</h1>;
  }

  return (
    <ul className="w-full flex flex-col">
      {data?.map(item =>
        item?.memberSimpleProfileDtoList?.map(user => (
          <li key={user.memberId}>
            <ProfileListItem
              isMyProfile={false}
              testType={user.peerTestType}
              username={user.name}
              part={user.part}
              score={user.totalScore}
              job={user.job}
              introduce={user.oneLiner}
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
        )),
      )}
    </ul>
  );
}