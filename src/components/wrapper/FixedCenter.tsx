import { ReactNode } from 'react';

interface FixedCenter {
  children: ReactNode;
}

export default function FixedCenter({ children }: FixedCenter) {
  return (
    <div className="w-full flex justify-center items-center">{children}</div>
  );
}
