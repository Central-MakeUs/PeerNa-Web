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
        className={`${props.className ?? ''} w-screen h-full max-h-screen flex justify-center`}
      >
        <div className="w-full h-full max-w-md flex flex-col items-center mb-20 relative">
          {children}
        </div>
      </div>
    </AppScreen>
  );
}
