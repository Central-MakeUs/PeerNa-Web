import Typography from '@components/common/atom/Typography';
import NavigationHeader from '@components/common/molecule/NavigationHeader';
import FixedBottomButton from '@components/wrapper/FixedBottomButton';
import { PEER_REVIEW_IMAGE_LIST } from '@constants/onboard';
import { useFlow } from '@hooks/common/useStackFlow';
import { Fragment } from 'react';

export default function GuessWhoResponse() {
  const { push } = useFlow();

  const handleClick = () => push('ReviewPage', { type: 'peer', step: '1' });
  return (
    <Fragment>
      <NavigationHeader
        bodyProps={{
          isShow: true,
          title: '내가 응답한 것인 줄 알면 어떡하지?',
          subtitle:
            '최소 3개의 응답이 모였을 때부터 평균 값을\n분석하여 00님께 결과를 제공해요.',
        }}
      />
      <img
        src={PEER_REVIEW_IMAGE_LIST[2]}
        className="max-w-md"
        alt="3개 이상 리뷰가 있어야 볼 수 있어요."
      />

      <FixedBottomButton handleClick={handleClick}>
        <Typography variant="body02" fontColor="white">
          다음
        </Typography>
      </FixedBottomButton>
    </Fragment>
  );
}
