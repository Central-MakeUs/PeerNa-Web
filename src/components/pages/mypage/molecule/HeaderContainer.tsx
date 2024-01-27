interface HeaderContainerProps {
  size: 'md' | 'sm';
  children: React.ReactNode;
  arrow?: boolean;
}

export default function HeaderContainer({
  size,
  children,
  arrow,
}: HeaderContainerProps) {
  const containerClassName = `pl-5 ${arrow ? 'flex justify-between' : ''} ${size === 'sm' ? 'pt-8 pb-3' : 'pt-10 pb-3'}`;

  return <section className={containerClassName}>{children}</section>;
}
