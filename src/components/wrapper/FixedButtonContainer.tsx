import SingleChildPortal from '@utils/SingleChildPortal';
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
    <SingleChildPortal>
      <div className="fixed z-50 left-2/4 translate-x-[-50%] bottom-5 w-full flex justify-center">
        <div
          className={` w-full max-w-screen-md px-5 flex ${flexDirection} gap-2`}
        >
          {children}
        </div>
      </div>
    </SingleChildPortal>
  );
}
