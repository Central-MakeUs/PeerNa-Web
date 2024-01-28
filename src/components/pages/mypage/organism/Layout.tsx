import { ReactNode } from 'react';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="w-full flex-1 h-[20000px] bg-white overflow-y-auto rounded-tl-3xl rounded-tr-3xl">
      {children}
    </div>
  );
}
