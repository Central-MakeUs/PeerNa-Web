import SvgIcon from '@components/common/atom/SvgIcon';
import { Button, Tooltip } from '@nextui-org/react';
import { useState } from 'react';

type PeerToolTipProps = {
  type: 'peer' | 'self';
};

export default function PeerToolTip({ type }: PeerToolTipProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toolTip =
    type === 'self'
      ? '셀프 테스트, 피어 테스트 문항의 \n 일치하는 선택지를 확인하세요'
      : '나와 동료의 협업 유형 분석 결과 \n 일치하는 선택지를 확인하세요';

  return (
    <Tooltip
      content={toolTip}
      isOpen={isOpen}
      className="bg-gray07 text-white !whitespace-pre-line"
    >
      <Button
        className="bg-transparent !min-w-unit-0 !px-unit-0"
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
        onPress={() => setIsOpen(!isOpen)}
      >
        <SvgIcon id="Help" color="gray04" width={16} height={16} />
      </Button>
    </Tooltip>
  );
}
