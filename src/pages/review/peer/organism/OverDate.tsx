import Button from '@components/common/atom/Button';
import SvgIcon from '@components/common/atom/SvgIcon';
import Typography from '@components/common/atom/Typography';
import FixedCenter from '@components/wrapper/FixedCenter';
import Footer from '@components/wrapper/Footer';
import Header from '@components/wrapper/Header';
import { useFlow } from '@hooks/common/useStackFlow';
import { Spacer } from '@nextui-org/react';
import { Fragment } from 'react';

export default function OverDate() {
  const { push } = useFlow();
  const handleClick = () => push('HomePage', {});
  return (
    <Fragment>
      <Header>
        <Spacer y={10} />
        <Header.Body>
          <Typography variant="header01" color="gray08">
            {'30일 이상 함께한 경험이 없어\n 테스트에 참여할 수 없어요.'}
          </Typography>
        </Header.Body>
      </Header>
      <FixedCenter>
        <div className="w-[124px] h-[124px] bg-primary100 rounded-full flex justify-center items-center">
          <SvgIcon id="CalendarError" color="primary" width={64} height={64} />
        </div>
      </FixedCenter>
      <Footer bottom={5} className="px-4">
        <Button onClick={handleClick}>다음에 다시 올게요</Button>
      </Footer>
    </Fragment>
  );
}
