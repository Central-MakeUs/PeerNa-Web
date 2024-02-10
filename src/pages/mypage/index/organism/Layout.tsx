import { ReactNode } from 'react';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="w-full bg-white rounded-tl-3xl rounded-tr-3xl">
      {children}
    </div>
  );
}
