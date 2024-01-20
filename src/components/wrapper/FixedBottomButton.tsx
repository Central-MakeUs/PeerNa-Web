import Button from '@components/common/atom/Button';
import { ReactNode } from 'react';
import ReactDOM from 'react-dom';

interface FixedBottomButton {
  children: ReactNode;
  handleClick: () => void;
}

export default function FixedBottomButton({
  children,
  handleClick,
}: FixedBottomButton) {
  return ReactDOM.createPortal(
    <div className="w-full flex justify-center">
      <div className="fixed z-20 left-2/4 translate-x-[-50%] bottom-5 w-full max-w-[600px] px-5">
        <Button onClick={handleClick}>{children}</Button>
      </div>
    </div>,
    document.body,
  );
}
