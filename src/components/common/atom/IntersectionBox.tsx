import { forwardRef } from 'react';

const IntersectionBox = forwardRef<HTMLDivElement>((_, ref) => {
  return <div ref={ref} className="h-3" />;
});

export default IntersectionBox;
