import IconButton from '@components/common/atom/IconButton';
import Typography from '@components/common/atom/Typography';
import { Drawer, DrawerContent } from '@components/shadcn/drawer';
import { KAKAO_SHARE } from '@constants/images';

interface ShareDrawerProps {
  openBottomSheet: boolean;
  setOpenBottomSheet: React.Dispatch<React.SetStateAction<boolean>>;
  handleClickShareLink: () => void;
  handleClickKakaoShare: () => void;
}

export default function ShareDrawer({
  openBottomSheet,
  setOpenBottomSheet,
  handleClickShareLink,
  handleClickKakaoShare,
}: ShareDrawerProps) {
  return (
    <Drawer
      open={openBottomSheet}
      onOpenChange={open => setOpenBottomSheet(open)}
    >
      <DrawerContent className="z-50 mx-auto max-w-screen-md">
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
            <button className="h-[36px]" onClick={handleClickKakaoShare}>
              <img src={KAKAO_SHARE} style={{ width: 36, height: 36 }} />
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
