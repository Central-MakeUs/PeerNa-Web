import { ReactNode } from 'react';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="w-full min-h-screen bg-white overflow-y-auto pb-20 rounded-tl-3xl rounded-tr-3xl">
      {children}
    </div>
  );
}
