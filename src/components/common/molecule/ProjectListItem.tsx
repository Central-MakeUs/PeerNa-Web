import Typography from '@components/common/atom/Typography';
import { ReactNode } from 'react';

interface ProjectListItemProps {
  title: string;
  subtitle: string;
  buttons: ReactNode;
}

export default function ProjectListItem({
  title,
  subtitle,
  buttons,
}: ProjectListItemProps) {
  return (
    <div className="flex justify-between items-center w-[350px] h-[44px] px-5 py-4 box-content">
      <div className="flex flex-col gap-1">
        <Typography variant="body01">{title}</Typography>
        <Typography variant="body05" className="text-gray05">
          {subtitle}
        </Typography>
      </div>
      <div className="w-[136px] h-full">{buttons}</div>
    </div>
  );
}
