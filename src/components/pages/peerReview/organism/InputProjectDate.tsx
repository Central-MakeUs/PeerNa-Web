import DatePicker from '@components/common/atom/DatePicker';
import NavigationHeader from '@components/common/molecule/NavigationHeader';
import FixedBottomButton from '@components/wrapper/FixedBottomButton';
import { useFlow } from '@hooks/useStackFlow';
import { Divider, Spacer } from '@nextui-org/react';
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
  const { push } = useFlow();
  const handleClick = () => push('PeerReviewPage', { step: '3' });
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
      <div className="flex items-center gap-2">
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
