import { ReactNode } from 'react';

interface FixedCenter {
  children: ReactNode;
}

export default function FixedCenter({ children }: FixedCenter) {
  return (
    <div className="w-full fixed left-2/4 translate-x-[-50%] top-2/4 translate-y-[-50%]">
      {children}
    </div>
  );
}
