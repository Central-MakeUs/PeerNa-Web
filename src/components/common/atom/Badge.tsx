import Typography from '@components/common/atom/Typography';
import { Code, CodeProps } from '@nextui-org/react';

interface BadgeProps extends CodeProps {
  type: 'primary' | 'default';
  children: string;
}

export default function Badge({ type = 'default', children }: BadgeProps) {
  const badgeVariantClassed =
    type === 'default'
      ? 'text-gray07 bg-gray02'
      : 'text-primary500 bg-primary100';

  return (
    <Code className={badgeVariantClassed}>
      <Typography variant="caption01">{children}</Typography>
    </Code>
  );
}
