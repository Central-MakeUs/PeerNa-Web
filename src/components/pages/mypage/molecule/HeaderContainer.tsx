interface HeaderContainerProps {
  size: 'md' | 'sm';
  children: React.ReactNode;
}

export default function HeaderContainer({
  size,
  children,
}: HeaderContainerProps) {
  const containerClassName = `pl-5 ${size === 'sm' ? 'pt-8 pb-3' : 'pt-10 pb-3'}`;

  return <section className={containerClassName}>{children}</section>;
}
