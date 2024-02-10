import SvgIcon from '@components/common/atom/SvgIcon';
import Typography from '@components/common/atom/Typography';
import { IconKeyType } from '@type/key';
import { ReactNode } from 'react';

interface RequestListItemProps {
  bezeled: Extract<
    IconKeyType,
    | 'AlertFill'
    | 'NotepadPerson'
    | 'AddCircle'
    | 'ColorLine'
    | 'DocumentText'
    | 'Person'
  >;
  isGrayIcon?: boolean;
  title: string;
  subtitle: string;
  button: ReactNode;
}

export default function ProfileListItem({
  bezeled,
  isGrayIcon = false,
  title,
  subtitle,
  button,
}: RequestListItemProps) {
  return (
    <div className="flex justify-between items-center w-[350px] h-[66px] px-5 py-4 box-content">
      <div className="flex gap-3">
        <div
          className={`w-[24px] h-[24px] p-3 box-content rounded-full ${
            isGrayIcon ? 'bg-gray01' : 'bg-primary100'
          }`}
        >
          <SvgIcon id={bezeled} color={isGrayIcon ? 'gray04' : 'primary400'} />
        </div>
        <div className="w-[200px] flex flex-col gap-1">
          <Typography variant="body02" className="w-full">
            {title}
          </Typography>
          <Typography variant="body05" className="text-gray05">
            {subtitle}
          </Typography>
        </div>
      </div>
      <div>{button}</div>
    </div>
  );
}
