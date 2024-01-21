import Typography from '@components/common/atom/Typography';
import NavigationHeader from '@components/common/molecule/NavigationHeader';
import FixedBottomButton from '@components/wrapper/FixedBottomButton';
import { useFlow } from '@hooks/useStackFlow';
import { Fragment } from 'react';

export default function IntroPeerReview() {
  const { push } = useFlow();
  const handleClick = () => push('ReviewPeerPage', { step: '4' });
  return (
    <Fragment>
      <NavigationHeader
        bodyProps={{
          isShow: true,
          title: '잠깐!\n피어 테스트에 대해 소개할게요',
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
