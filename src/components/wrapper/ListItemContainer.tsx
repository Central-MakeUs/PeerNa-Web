import { HTMLAttributes, ReactNode } from 'react';

interface ListItemContainerProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export default function ListItemContainer({
  children,
  ...props
}: ListItemContainerProps) {
  return (
    <div
      {...props}
      className={`flex justify-between items-center w-full px-5 py-4 rounded-xl ${props.className}`}
    >
      {children}
    </div>
  );
}
