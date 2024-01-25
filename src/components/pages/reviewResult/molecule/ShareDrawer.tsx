import IconButton from '@components/common/atom/IconButton';
import SvgIcon from '@components/common/atom/SvgIcon';
import Typography from '@components/common/atom/Typography';
import { Drawer, DrawerContent } from '@components/shadcn/drawer';
import { KakaoShareImage } from '@constants/images';
import toast from 'react-hot-toast';

interface ShareDrawerProps {
  openBottomSheet: boolean;
  setOpenBottomSheet: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function ShareDrawer({
  openBottomSheet,
  setOpenBottomSheet,
}: ShareDrawerProps) {
  const handleClickShareLink = async () => {
    try {
      await navigator.clipboard.writeText('shareLink');
      toast.success('링크 복사 완료!', {
        icon: <SvgIcon id="Complete" color="gray08" />,
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Drawer
      open={openBottomSheet}
      onOpenChange={open => setOpenBottomSheet(open)}
    >
      <DrawerContent className="mx-auto max-w-screen-md">
        <div className="p-4 flex justify-center gap-4">
          <div className="flex flex-col gap-2 items-center">
            <IconButton
              iconProps={{
                id: 'Share',
                width: 36,
                height: 36,
                color: 'primary',
              }}
              onClick={handleClickShareLink}
            />
            <Typography variant="body03" className="text-center">
              링크복사
            </Typography>
          </div>
          <div className="flex flex-col gap-2 items-center">
            <button className="h-[36px]">
              <img src={KakaoShareImage} style={{ width: 36, height: 36 }} />
            </button>
            <Typography variant="body03" className="text-center">
              카카오톡
            </Typography>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
