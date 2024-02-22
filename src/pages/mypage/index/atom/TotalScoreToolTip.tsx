import { Button, Tooltip } from '@nextui-org/react';
import { useEffect, useState } from 'react';

type TotalScoreToolTipProps = {
  totalScore: number;
  children: React.ReactNode;
};

export default function TotalScoreToolTip({
  totalScore,
  children,
}: TotalScoreToolTipProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    let focusTimeout: NodeJS.Timeout;
    if (isOpen) focusTimeout = setTimeout(() => setIsOpen(false), 3000);
    return () => clearTimeout(focusTimeout);
  }, [isOpen]);

  return (
    <Tooltip
      content={`${totalScore}점`}
      placement="top"
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
