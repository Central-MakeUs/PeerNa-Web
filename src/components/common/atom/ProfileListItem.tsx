import SvgIcon from '@assets/SvgIcon';
import Button from '@components/common/atom/Button';
import Typography from '@components/common/atom/Typography';
import { IconId } from '@constants/icons';
import { Palette } from '@constants/styles';

interface ProfileListItemProps {
  bezeled: Extract<
    IconId,
    | 'AlertFill'
    | 'NotepadPerson'
    | 'AddCircle'
    | 'ColorLine'
    | 'DocumentText'
    | 'Person'
  >;
  isGrayIcon?: boolean;
  username: string;
  position: string;
  information: string;
  introduce: string;
}

export default function ProfileListItem({
  bezeled,
  isGrayIcon = false,
  username,
  position,
  information,
  introduce,
}: ProfileListItemProps) {
  return (
    <div className="flex justify-between items-center w-[350px] h-[44px] px-5 py-4 box-content">
      <div className="flex gap-3">
        <div
          className={`w-[24px] h-[24px] p-3 box-content rounded-full ${
            isGrayIcon ? 'bg-gray01' : 'bg-primary100'
          }`}
        >
          <SvgIcon id={bezeled} color={isGrayIcon ? 'gray04' : 'primary400'} />
        </div>
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-1">
            <Typography variant="body01">{username}</Typography>
            <Typography
              variant="caption01"
              className={`text-[${Palette.primary500}]`}
            >
              {position}
            </Typography>
          </div>
          <Typography variant="body05" className={`text-[${Palette.gray07}]`}>
            {information}
          </Typography>
          <Typography variant="body05" className={`text-[${Palette.gray05}]`}>
            {introduce}
          </Typography>
        </div>
      </div>
      <div className="h-full">
        <Button
          buttonVariant="tertiary"
          className="!w-[36px] !h-[20px] !px-5 !py-2.5 flex-1 !min-w-min"
        >
          <Typography variant="body03" className={`text-[${Palette.gray08}]`}>
            자세히
          </Typography>
        </Button>
      </div>
    </div>
  );
}
