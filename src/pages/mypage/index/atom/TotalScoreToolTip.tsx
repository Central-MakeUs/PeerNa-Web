import { Button, Tooltip } from '@nextui-org/react';
import { useState } from 'react';

type TotalScoreToolTipProps = {
  totalScore: number;
  children: React.ReactNode;
};

export default function TotalScoreToolTip({
  totalScore,
  children,
}: TotalScoreToolTipProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <Tooltip
      content={`${totalScore}점`}
      showArrow
      isOpen={isOpen}
      className="bg-gray07 text-white"
      classNames={{
        base: ['before:bg-gray07'],
      }}
    >
      <Button
        className="bg-transparent !min-w-unit-0 !px-unit-0 !hover:bg-transparent !focus:bg-transparent"
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
        onPress={() => setIsOpen(!isOpen)}
      >
        {children}
      </Button>
    </Tooltip>
  );
}
