import { AppScreen } from '@stackflow/plugin-basic-ui';
import { HTMLAttributes, ReactNode } from 'react';

interface AppScreenContainerProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export default function AppScreenContainer({
  children,
  ...props
}: AppScreenContainerProps) {
  return (
    <AppScreen>
      <div
        {...props}
        className={`${props?.className} w-screen min-h-screen flex justify-center px-5`}
      >
        <div className="w-full max-w-screen-md flex flex-col items-center mb-20">
          {children}
        </div>
      </div>
    </AppScreen>
  );
}
