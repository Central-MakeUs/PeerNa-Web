import { HTMLAttributes, PropsWithChildren } from 'react';

interface FooterProps
  extends PropsWithChildren<HTMLAttributes<HTMLDivElement>> {
  bottom?: number;
}

export default function Footer({ bottom, children, ...props }: FooterProps) {
  return (
    <div
      {...props}
      className={`absolute w-full ${props.className ?? ''} ${!bottom ? 'bottom-0' : `bottom-${bottom}`}`}
    >
      {children}
    </div>
  );
}
