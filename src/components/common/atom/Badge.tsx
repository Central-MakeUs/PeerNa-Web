import Typography from '@components/common/atom/Typography';
import { Code, CodeProps } from '@nextui-org/react';

interface BadgeProps extends CodeProps {
  type: 'primary' | 'default';
  children: string;
}

const Badge = ({ type = 'default', children }: BadgeProps) => {
  return (
    <Code
      className={`${
        type === 'default'
          ? 'text-gray07 bg-gray02'
          : 'text-primary500 bg-primary100'
      }`}
    >
      <Typography variant="caption01">{children}</Typography>
    </Code>
  );
};

export default Badge;
