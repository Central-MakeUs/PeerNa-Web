import { FontVariantsClassName } from '@constants/styles';
import {
  Tooltip as TooltipWithNextui,
  TooltipProps as TooltipPropsWithNextui,
} from '@nextui-org/react';
import { ReactNode } from 'react';

interface TooltipProps extends TooltipPropsWithNextui {
  children: ReactNode;
}

const Tooltip = ({ children, ...props }: TooltipProps) => {
  return (
    <TooltipWithNextui
      {...props}
      showArrow
      content={props.content}
      className={`bg-gray07 text-white ${FontVariantsClassName.body01}`}
      classNames={{
        base: 'before:bg-gray07',
      }}
    >
      {children}
    </TooltipWithNextui>
  );
};

export default Tooltip;
