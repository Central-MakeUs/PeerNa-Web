import Button from '@components/common/atom/Button';
import SvgIcon from '@components/common/atom/SvgIcon';
import FixedCenter from '@components/wrapper/FixedCenter';
import Footer from '@components/wrapper/Footer';
import Header from '@components/wrapper/Header';
import { useFlow } from '@hooks/common/useStackFlow';
import { Fragment } from 'react';

export default function OverDate() {
  const { push } = useFlow();
  const handleClick = () => push('HomePage', {});
  return (
    <Fragment>
      <Header>
        <Header.TopBar />
        <Header.Body>
          <Header.Title>
            {'30일 이상 함께한 경험이 없어\n 테스트에 참여할 수 없어요.'}
          </Header.Title>
        </Header.Body>
      </Header>
      <FixedCenter>
        <div className="w-[124px] h-[124px] bg-primary100 rounded-full flex justify-center items-center">
          <SvgIcon id="CalendarError" color="primary" width={64} height={64} />
        </div>
      </FixedCenter>
      <Footer bottom={3} className="px-4">
        <Button onClick={handleClick}>다음에 다시 올게요</Button>
      </Footer>
    </Fragment>
  );
}
