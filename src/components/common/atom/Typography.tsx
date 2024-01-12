import { FontVariantsClassName } from '@constants/styles';
import { HTMLAttributes } from 'react';
import { FontVariantsKeys } from '@type/styles';

export interface TypographyProps extends HTMLAttributes<HTMLDivElement> {
  variant: FontVariantsKeys;
  children: string;
  as?: keyof JSX.IntrinsicElements;
}

const Typography = ({
  as: Typo = 'p',
  variant = 'body01',
  children,
  ...props
}: TypographyProps) => {
  return (
    <Typo
      className={`
        ${FontVariantsClassName[variant]} 
        leading-default 
        tracking-default 
        ${props.className}`}
    >
      {children}
    </Typo>
  );
};

export default Typography;
