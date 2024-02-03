import IconButton from '@components/common/atom/IconButton';
import Talk from '@components/common/atom/Talk';
import Typography from '@components/common/atom/Typography';
import HeaderContainer from '@pages/mypage/index/molecule/HeaderContainer';
import { Fragment } from 'react';

interface FeedbackProps {
  peerFeedbackList: string[];
  handleClick: () => void;
}

export default function Feedback({
  peerFeedbackList,
  handleClick,
}: FeedbackProps) {
  return (
    <Fragment>
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
          onClick={handleClick}
        />
      </HeaderContainer>
      <ul className="flex flex-col gap-3 mb-6">
        {peerFeedbackList.map((item, index) => (
          <li key={index}>
            <Talk type="dimed">{item}</Talk>
          </li>
        ))}
      </ul>
    </Fragment>
  );
}
