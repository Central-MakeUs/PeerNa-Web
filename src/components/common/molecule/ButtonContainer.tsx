import { ReactNode } from 'react';

interface ButtonContainer {
  direction: 'row' | 'col';
  children: ReactNode;
  className?: string;
}

export default function ButtonContainer({
  direction = 'row',
  children,
  className,
}: ButtonContainer) {
  const flexDirection = `flex-${direction}`;

  return (
    <div
      className={`w-full h-full px-4 flex justify-center gap-2 ${flexDirection} ${className ?? ''}`}
    >
      {children}
    </div>
  );
}
