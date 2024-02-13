import { ReactNode } from 'react';

export default function HomeBackground({ children }: { children: ReactNode }) {
  return (
    <div className="w-full bg-peer-bg bg-no-repeat bg-cover flex flex-col">
      {children}
    </div>
  );
}
