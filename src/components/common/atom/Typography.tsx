import { FontVariantsClassName } from '@constants/styles';
import { HTMLAttributes } from 'react';
import { FontVariantsKeys } from '@type/styles';

export interface TypographyProps extends HTMLAttributes<HTMLDivElement> {
  variant: FontVariantsKeys;
  children: string;
}

const Typography = ({
  variant = 'body01',
  children,
  ...props
}: TypographyProps) => {
  return (
    <p
      className={`
        ${FontVariantsClassName[variant]} 
        leading-default 
        tracking-default 
        ${props.className}`}
    >
      {children}
    </p>
  );
};

export default Typography;
