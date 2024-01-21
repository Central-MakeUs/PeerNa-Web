import SvgIcon from '@components/common/atom/SvgIcon';
import Typography from '@components/common/atom/Typography';
import NavigationHeader from '@components/common/molecule/NavigationHeader';
import FixedBottomButton from '@components/wrapper/FixedBottomButton';
import FixedCenter from '@components/wrapper/FixedCenter';
import { useFlow } from '@hooks/useStackFlow';
import { Fragment } from 'react';

export default function ThanksReview() {
  const { push } = useFlow();
  const handleClick = () => push('ReviewPeerPage', { step: '6' });
  return (
    <Fragment>
      <NavigationHeader
        bodyProps={{
          isShow: true,
          title: '소중한 응답 감사해요!',
          subtitle: 'username님도 매우 고마워할 거에요!',
        }}
      />
      <FixedCenter>
        <div className="w-[124px] h-[124px] bg-primary100 rounded-full flex justify-center items-center">
          <SvgIcon id="CheckboxPerson" color="primary" width={64} height={64} />
        </div>
      </FixedCenter>
      <FixedBottomButton handleClick={handleClick}>
        <Typography variant="body02" fontColor="white">
          확인
        </Typography>
      </FixedBottomButton>
    </Fragment>
  );
}
