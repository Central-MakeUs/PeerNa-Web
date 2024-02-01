import HeaderContainer from '@components/pages/mypage/molecule/HeaderContainer';
import Talk from '@components/common/atom/Talk';
import Typography from '@components/common/atom/Typography';
import { useFlow } from '@hooks/useStackFlow';
import IconButton from '@components/common/atom/IconButton';

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
      <HeaderContainer size="md" arrow={true}>
        <Typography variant="header03" fontColor="gray08">
          한 줄 피드백
        </Typography>
        <IconButton
          iconProps={{
            id: 'ArrowRight',
            color: 'gray07',
            width: 10.5,
            height: 20,
          }}
          onClick={handleMoreFeedback}
        />
      </HeaderContainer>
      <ul className="flex flex-col gap-3 mb-6">
        {peerFeedbackList.map((item, index) => (
          <li key={index}>
            <Talk type="dimed">{item}</Talk>
          </li>
        ))}
      </ul>
    </>
  );
}
