import Typography from '@components/common/atom/Typography';
import NavigationHeader from '@components/common/molecule/NavigationHeader';
import FixedBottomButton from '@components/wrapper/FixedBottomButton';
import FixedCenter from '@components/wrapper/FixedCenter';
import { PEER_REVIEW_IMAGE_LIST } from '@constants/onboard';
import { useFlow } from '@hooks/common/useStackFlow';
import { Fragment } from 'react';

export default function IsOffendedResponse() {
  const { push } = useFlow();
  const handleClick = () => push('ReviewPeerPage', { step: '6' });
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
          src={PEER_REVIEW_IMAGE_LIST[1]}
          className="max-w-md"
          alt="피어 테스트는 긍정과 부정으로 나뉘지 않는
          문항들로 구성되어 있어요."
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
