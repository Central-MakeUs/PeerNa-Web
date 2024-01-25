import HeaderContainer from '@components/pages/mypage/molecule/HeaderContainer';
import Talk from '@components/common/atom/Talk';
import Typography from '@components/common/atom/Typography';
import FullBleed from '@components/common/atom/FullBleed';
import { useFlow } from '@hooks/useStackFlow';

export default function Feedback({
  peerFeedbackList,
}: {
  peerFeedbackList: string[];
}) {
  const { push } = useFlow();
  const handleMoreFeedback = () => {
    push('MoreFeedbackPage', {});
  };
  return (
    <>
      <HeaderContainer size="md">
        <Typography variant="header03" fontColor="gray08">
          한 줄 피드백
        </Typography>
      </HeaderContainer>
      <ul className="flex flex-col gap-3 mb-6">
        {peerFeedbackList.map((item, index) => (
          <li key={index}>
            <Talk type="dimed">{item}</Talk>
          </li>
        ))}
      </ul>
      <FullBleed type="showMore" onClick={handleMoreFeedback} />
    </>
  );
}
