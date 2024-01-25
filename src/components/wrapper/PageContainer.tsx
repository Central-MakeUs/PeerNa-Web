import { HTMLAttributes, ReactNode } from 'react';

interface PageContainerProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export default function PageContainer({
  children,
  ...props
}: PageContainerProps) {
  return (
    <div
      className={`${props.className} w-screen min-h-screen flex justify-center`}
    >
      <div className="w-full max-w-screen-md flex flex-col items-center px-5 mb-20">
        {children}
      </div>
    </div>
  );
}
