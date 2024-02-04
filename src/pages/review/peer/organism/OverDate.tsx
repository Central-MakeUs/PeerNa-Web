import SvgIcon from '@components/common/atom/SvgIcon';
import Typography from '@components/common/atom/Typography';
import NavigationHeader from '@components/common/molecule/NavigationHeader';
import FixedBottomButton from '@components/wrapper/FixedBottomButton';
import FixedCenter from '@components/wrapper/FixedCenter';
import { useFlow } from '@hooks/common/useStackFlow';
import { Fragment } from 'react';

export default function OverDate() {
  const { push } = useFlow();
  const handleClick = () => push('HomePage', {});
  return (
    <Fragment>
      <NavigationHeader
        bodyProps={{
          isShow: true,
          title: '30일 이상 함께한 경험이 없어\n 테스트에 참여할 수 없어요.',
        }}
      />
      <FixedCenter>
        <div className="w-[124px] h-[124px] bg-primary100 rounded-full flex justify-center items-center">
          <SvgIcon id="CalendarError" color="primary" width={64} height={64} />
        </div>
      </FixedCenter>
      <FixedBottomButton handleClick={handleClick}>
        <Typography variant="body02" fontColor="white">
          다음에 다시 올게요
        </Typography>
      </FixedBottomButton>
    </Fragment>
  );
}
