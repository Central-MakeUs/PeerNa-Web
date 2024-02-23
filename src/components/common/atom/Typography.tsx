import { FontVariantsClassName, Palette } from '@constants/styles';
import { ColorTypes, FontVariantsKeys } from '@type/styles';
import { HTMLAttributes } from 'react';

export interface TypographyProps extends HTMLAttributes<HTMLDivElement> {
  variant: FontVariantsKeys;
  children?: string;
  fontColor?: ColorTypes;
  as?: keyof JSX.IntrinsicElements;
  href?: string;
}

export default function Typography({
  as: Typo = 'p',
  variant = 'body01',
  fontColor = 'gray07',
  children,
  href,
  ...props
}: TypographyProps) {
  const Typography = href ? 'a' : Typo;
  return (
    <Typography
      className={`
        ${FontVariantsClassName[variant]}
        text-[${Palette[fontColor]}]
        leading-default 
        tracking-default
        break-all
        whitespace-pre-line
        ${props.className ?? ''}`}
      style={props.style}
      href={href}
      target={href ? '_blank' : ''}
    >
      {children}
    </Typography>
  );
}
