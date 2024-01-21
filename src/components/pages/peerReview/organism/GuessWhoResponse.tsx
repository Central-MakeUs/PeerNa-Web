import Typography from '@components/common/atom/Typography';
import NavigationHeader from '@components/common/molecule/NavigationHeader';
import FixedBottomButton from '@components/wrapper/FixedBottomButton';
import { useFlow } from '@hooks/useStackFlow';
import { Fragment } from 'react';

export default function GuessWhoResponse() {
  const { push } = useFlow();
  const handleClick = () => push('PeerReviewPage', { step: '4' });
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
      <FixedBottomButton handleClick={handleClick}>
        <Typography variant="body02" fontColor="white">
          다음
        </Typography>
      </FixedBottomButton>
    </Fragment>
  );
}
