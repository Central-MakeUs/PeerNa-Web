import BottomSheetListItem from '@components/common/molecule/BottomSheetListItem';
import { Drawer, DrawerContent } from '@components/shadcn/drawer';
import { bottomSheetState } from '@store/bottomSheet';
import { useRecoilState } from 'recoil';

export default function BottomSheet() {
  const [bottomSheet, setBottomSheet] = useRecoilState(bottomSheetState);

  return (
    <Drawer
      open={bottomSheet.isOpen}
      onOpenChange={open =>
        setBottomSheet(prev => ({
          ...prev,
          isOpen: open,
        }))
      }
    >
      <DrawerContent>
        <div className="p-4">
          {bottomSheet.contents.map(({ title, subtitle, onClick }) => (
            <BottomSheetListItem
              key={title}
              title={title}
              subtitle={subtitle}
              onClick={onClick}
            />
          ))}
        </div>
      </DrawerContent>
    </Drawer>
  );
}
