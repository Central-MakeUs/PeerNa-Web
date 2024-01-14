import { FontVariantsClassName } from '@constants/styles';
import {
  TooltipProps as TooltipPropsWithNextui,
  Tooltip as TooltipWithNextui,
} from '@nextui-org/react';
import { ReactNode } from 'react';

interface TooltipProps extends TooltipPropsWithNextui {
  children: ReactNode;
}

export default function Tooltip({ children, ...props }: TooltipProps) {
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
}
