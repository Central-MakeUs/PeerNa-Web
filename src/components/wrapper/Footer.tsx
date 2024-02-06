import { HTMLAttributes, PropsWithChildren } from 'react';

interface FooterProps
  extends PropsWithChildren<HTMLAttributes<HTMLDivElement>> {
  bottom?: number;
}

export default function Footer({ bottom, children, ...props }: FooterProps) {
  return (
    <div
      {...props}
      className={`absolute w-full px-5 ${props.className} ${!bottom ? 'bottom-0' : `bottom-${bottom}`}`}
    >
      {children}
    </div>
  );
}
