import { HTMLAttributes, PropsWithChildren } from 'react';

interface ContentProps
  extends PropsWithChildren<HTMLAttributes<HTMLDivElement>> {}

export default function Content({ children, ...props }: ContentProps) {
  return (
    <div
      {...props}
      id="content_wrapper"
      className={`min-h-[100vh-96px] w-full h-full flex flex-col overflow-y-scroll ${props.className ?? ''}`}
    >
      {children}
    </div>
  );
}
