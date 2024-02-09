import { ReactNode } from 'react';

interface FixedCenter {
  children: ReactNode;
}

export default function FixedCenter({ children }: FixedCenter) {
  return (
    <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-full flex justify-center items-center">
      {children}
    </div>
  );
}
