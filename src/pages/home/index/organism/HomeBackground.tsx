import { ReactNode } from 'react';

const backgroundStyle = {
  backgroundImage: "url('/src/assets/common/bg_gradient.png')",
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
};

export default function HomeBackground({ children }: { children: ReactNode }) {
  return (
    <div className="w-full flex flex-col" style={backgroundStyle}>
      {children}
    </div>
  );
}
