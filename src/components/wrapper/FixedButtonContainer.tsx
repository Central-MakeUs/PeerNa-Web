import { ReactNode } from 'react';

interface FixedButtonContainerProps {
  direction: 'row' | 'col';
  children: ReactNode;
}

export default function FixedButtonContainer({
  direction = 'row',
  children,
}: FixedButtonContainerProps) {
  const flexDirection = `flex-${direction}`;

  return (
    <div className={`w-full h-full box-content flex gap-2 ${flexDirection}`}>
      {children}
    </div>
  );
}
