import { ReactNode } from 'react';

interface ButtonContainer {
  direction: 'row' | 'col';
  children: ReactNode;
}

export default function ButtonContainer({
  direction = 'row',
  children,
}: ButtonContainer) {
  const flexDirection = `flex-${direction}`;

  return (
    <div className={`w-full h-full flex gap-2 ${flexDirection}`}>
      {children}
    </div>
  );
}
