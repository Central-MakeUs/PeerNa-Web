import { ReactNode } from 'react';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="w-full flex-1 bg-white h-[2000px] overflow-y-auto rounded-tl-3xl rounded-tr-3xl">
      {children}
    </div>
  );
}
