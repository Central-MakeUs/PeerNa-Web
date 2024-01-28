import { FontVariantsClassName, Palette } from '@constants/styles';
import { ColorTypes, FontVariantsKeys } from '@type/styles';
import { HTMLAttributes } from 'react';

export interface TypographyProps extends HTMLAttributes<HTMLDivElement> {
  variant: FontVariantsKeys;
  children: string | undefined;
  fontColor?: ColorTypes;
  as?: keyof JSX.IntrinsicElements;
}

export default function Typography({
  as: Typo = 'p',
  variant = 'body01',
  fontColor = 'gray07',
  children,
  ...props
}: TypographyProps) {
  return (
    <Typo
      className={`
        ${FontVariantsClassName[variant]}
        text-[${Palette[fontColor]}]
        leading-default 
        tracking-default
        break-all
        whitespace-pre-line
        ${props.className}`}
    >
      {children}
    </Typo>
  );
}
