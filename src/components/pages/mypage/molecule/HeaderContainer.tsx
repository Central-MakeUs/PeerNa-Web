interface HeaderContainerProps {
  size: 'md' | 'sm';
  children: React.ReactNode;
  arrow?: boolean;
  className?: string;
}

export default function HeaderContainer({
  size,
  children,
  arrow,
  className,
}: HeaderContainerProps) {
  const containerClassName = `pl-5 ${arrow ? 'flex justify-between' : ''} ${size === 'sm' ? 'pt-8 pb-3' : 'pt-10 pb-8'} ${className}`;

  return <section className={containerClassName}>{children}</section>;
}
