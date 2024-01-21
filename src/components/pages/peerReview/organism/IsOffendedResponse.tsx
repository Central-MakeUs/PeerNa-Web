import Typography from '@components/common/atom/Typography';
import NavigationHeader from '@components/common/molecule/NavigationHeader';
import FixedBottomButton from '@components/wrapper/FixedBottomButton';
import FixedCenter from '@components/wrapper/FixedCenter';
import { OverThreeCheckReview } from '@constants/images';
import { useFlow } from '@hooks/useStackFlow';
import { Fragment } from 'react';

export default function IsOffendedResponse() {
  const { push } = useFlow();
  const handleClick = () => push('CommonTestPage', { type: 'peer', step: '1' });
  return (
    <Fragment>
      <NavigationHeader
        bodyProps={{
          isShow: true,
          title: '내 응답에 기분 나빠하진 않을까?',
          subtitle:
            '피어 테스트는 긍정과 부정으로 나뉘지 않는\n문항들로 구성되어 있어요.',
        }}
      />
      <FixedCenter>
        <img
          src={OverThreeCheckReview}
          className="max-w-none"
          alt="3개 이상 리뷰가 있어야 볼 수 있어요."
        />
      </FixedCenter>
      <FixedBottomButton handleClick={handleClick}>
        <Typography variant="body02" fontColor="white">
          다음
        </Typography>
      </FixedBottomButton>
    </Fragment>
  );
}
