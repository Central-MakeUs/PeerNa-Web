import { AppScreen } from '@stackflow/plugin-basic-ui';
import { getPadding } from '@utils';
import { HTMLAttributes, ReactNode } from 'react';

interface AppScreenContainerProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export default function AppScreenContainer({
  children,
  ...props
}: AppScreenContainerProps) {
  const { top, bottom } = getPadding();
  return (
    <AppScreen>
      <div
        {...props}
        className={`${props.className ?? ''} w-screen h-full max-h-screen flex justify-center bg-white box-border`}
        style={{ paddingTop: top, paddingBottom: bottom }}
      >
        <div className="w-full h-full max-w-md flex flex-col items-center mb-20 relative">
          {children}
        </div>
      </div>
    </AppScreen>
  );
}
