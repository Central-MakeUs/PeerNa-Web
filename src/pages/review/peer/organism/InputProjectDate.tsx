import Button from '@components/common/atom/Button';
import DatePicker from '@components/common/atom/DatePicker';
import Typography from '@components/common/atom/Typography';
import Footer from '@components/wrapper/Footer';
import Header from '@components/wrapper/Header';
import { useFlow } from '@hooks/common/useStackFlow';
import { Divider, Spacer } from '@nextui-org/react';
import { differenceInDays } from 'date-fns';
import { Fragment } from 'react';

interface InputProjectDateProps {
  startDate: string;
  handleChangeStartDate: (newDate: Date | undefined) => void;
  endDate: string;
  handleChangeEndDate: (newDate: Date | undefined) => void;
}

export default function InputProjectDate({
  startDate,
  endDate,
  handleChangeStartDate,
  handleChangeEndDate,
}: InputProjectDateProps) {
  function isLessThan30Days(startDate: Date, endDate: Date) {
    const diffDays = differenceInDays(endDate, startDate);
    return diffDays >= 30;
  }

  // 30일보다 크면 4번(진행), 작으면 3번(에러)
  const isValidDate = isLessThan30Days(new Date(startDate), new Date(endDate));

  const { push } = useFlow();
  const handleClick = () =>
    push('ReviewPeerPage', { step: isValidDate ? '4' : '3' });

  return (
    <Fragment>
      <Header>
        <Header.TopBar />
        <Header.Body>
          <Typography variant="body01" fontColor="gray08">
            함께 프로젝트 한 기간을 알려주세요
          </Typography>
          <Typography variant="body01" fontColor="gray08">
            정확하지 않아도 괜찮아요
          </Typography>
        </Header.Body>
      </Header>

      <Spacer y={5} />
      <div className="w-full flex items-center gap-2 px-4">
        <DatePicker
          date={startDate === '' ? undefined : new Date(startDate)}
          handleDate={handleChangeStartDate}
          placeholder="시작일"
        />
        <Divider className="w-[10px]" />
        <DatePicker
          date={endDate === '' ? undefined : new Date(endDate)}
          handleDate={handleChangeEndDate}
          placeholder="종료일"
        />
      </div>

      <Footer bottom={5} className="p-4">
        <Button
          isDisabled={startDate === '' || endDate === ''}
          onClick={handleClick}
        >
          다음
        </Button>
      </Footer>
    </Fragment>
  );
}
