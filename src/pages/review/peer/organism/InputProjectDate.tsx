import DatePicker from '@components/common/atom/DatePicker';
import NavigationHeader from '@components/common/molecule/NavigationHeader';
import FixedBottomButton from '@components/wrapper/FixedBottomButton';
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
      <NavigationHeader
        bodyProps={{
          isShow: true,
          title: '함께 프로젝트 한 기간을 알려주세요',
          subtitle: '정확하지 않아도 괜찮아요',
        }}
      />
      <Spacer y={5} />
      <div className="w-full flex items-center gap-2">
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
      <FixedBottomButton
        isDisabled={startDate === '' || endDate === ''}
        handleClick={handleClick}
      >
        다음
      </FixedBottomButton>
    </Fragment>
  );
}
