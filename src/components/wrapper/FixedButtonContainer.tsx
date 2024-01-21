import { ReactNode } from 'react';
import ReactDOM from 'react-dom';

interface FixedButtonContainerProps {
  direction: 'row' | 'col';
  children: ReactNode;
}

export default function FixedButtonContainer({
  direction = 'row',
  children,
}: FixedButtonContainerProps) {
  const flexDirection = `flex-${direction}`;

  return ReactDOM.createPortal(
    <div className="fixed z-20 left-2/4 translate-x-[-50%] bottom-5 w-full box-content">
      <div className={` w-full max-w-[600px] px-5 flex ${flexDirection} gap-2`}>
        {children}
      </div>
    </div>,
    document.body,
  );
}
