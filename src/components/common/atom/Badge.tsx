import Typography from '@components/common/atom/Typography';
import { Code, CodeProps } from '@nextui-org/react';

interface BadgeProps extends CodeProps {
  type: 'primary' | 'default';
  children: string;
}

export default function Badge({ type = 'default', children }: BadgeProps) {
  const badgeVariantClassed = `font-Pretendard !px-1 !py-[2px] 
  ${type === 'default' ? 'text-gray07 bg-gray02' : 'text-gray01 bg-primary100'}`;
  const fontStyle = type === 'default' ? 'gray07' : 'primary500';

  return (
    <Code className={badgeVariantClassed}>
      <Typography as="span" variant="caption01" fontColor={fontStyle}>
        {children}
      </Typography>
    </Code>
  );
}
