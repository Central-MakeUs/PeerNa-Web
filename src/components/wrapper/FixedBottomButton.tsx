import Button, { ButtonProps } from '@components/common/atom/Button';
import { ReactNode } from 'react';
import ReactDOM from 'react-dom';

interface FixedBottomButton extends ButtonProps {
  children: ReactNode;
  handleClick: () => void;
}

export default function FixedBottomButton({
  children,
  handleClick,
  ...props
}: FixedBottomButton) {
  return ReactDOM.createPortal(
    <div className="fixed z-50 left-2/4 translate-x-[-50%] bottom-5 w-full flex justify-center">
      <div className="w-full max-w-screen-md px-5 sm:px-0">
        <Button onClick={handleClick} {...props}>
          {children}
        </Button>
      </div>
    </div>,
    document.body,
  );
}
