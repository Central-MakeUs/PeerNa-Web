import Typography from '@components/common/atom/Typography';
import { Drawer, DrawerContent } from '@components/ui/drawer';
import { bottomSheetState } from '@store/bottomSheet';
import { useRecoilState } from 'recoil';

const BottomSheet = () => {
  const [open, setOpen] = useRecoilState(bottomSheetState);
  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerContent>
        <div className="p-4">
          <div className="w-full max-w-[350px] h-[40px] flex items-center py-3 box-content">
            <Typography variant="body01">평판요청</Typography>
          </div>
          <div className="w-full max-w-[350px] h-[40px] flex items-center py-3 box-content gap-3">
            <Typography variant="body01">평판작성</Typography>
            <Typography
              variant="caption01"
              className="!font-normal text-gray06"
            >
              원하는 동료들과 함께해요.
            </Typography>
          </div>
          <div className="w-full max-w-[350px] h-[40px] flex items-center py-3 box-content">
            <Typography variant="body01">프로젝트 제안</Typography>
          </div>
          <div className="w-full max-w-[350px] h-[40px] flex items-center py-3 box-content">
            <Typography variant="body01">오픈 카톡 링크 복사</Typography>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default BottomSheet;
