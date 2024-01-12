import { FontVariantsClassName, Palette } from '@constants/styles';
import { HTMLAttributes } from 'react';
import { ColorTypes, FontVariantsKeys } from '@type/styles';

export interface TypographyProps extends HTMLAttributes<HTMLDivElement> {
  variant: FontVariantsKeys;
  children: string;
  fontColor?: ColorTypes;
  as?: keyof JSX.IntrinsicElements;
}

const Typography = ({
  as: Typo = 'p',
  variant = 'body01',
  fontColor = 'gray07',
  children,
  ...props
}: TypographyProps) => {
  return (
    <Typo
      className={`
        ${FontVariantsClassName[variant]}
        text-[${Palette[fontColor]}]
        leading-default 
        tracking-default 
        ${props.className}`}
    >
      {children}
    </Typo>
  );
};

export default Typography;
