import { FontVaraintsClassName } from '@constants/styles';
import { HTMLAttributes } from 'react';
import { FontVaraintsClassNameType } from 'types/styles';

export interface TypographyProps extends HTMLAttributes<HTMLDivElement> {
  variant: FontVaraintsClassNameType;
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
        ${FontVaraintsClassName[variant]} 
        leading-default 
        tracking-default 
        ${props.className}`}
    >
      {text}
    </p>
  );
};

export default Typography;
