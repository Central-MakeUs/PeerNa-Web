import { forwardRef } from 'react';

const IntersectionBox = forwardRef<HTMLDivElement>((_, ref) => {
  return <div ref={ref} className="w-full h-6" />;
});

export default IntersectionBox;
