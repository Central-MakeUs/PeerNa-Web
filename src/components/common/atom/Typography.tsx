import { FontVariantsClassName } from '@constants/styles';
import { HTMLAttributes } from 'react';
import { FontVariantsKeys } from '@type/styles';

export interface TypographyProps extends HTMLAttributes<HTMLDivElement> {
  variant: FontVariantsKeys;
  text: string;
}

const Typography = ({
  variant = 'body01',
  text,
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
      {text}
    </p>
  );
};

export default Typography;
