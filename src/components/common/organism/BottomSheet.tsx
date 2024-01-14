import BottomSheetListItem from '@components/common/molecule/BottomSheetListItem';
import { Drawer, DrawerContent } from '@components/shadcn/drawer';
import { bottomSheetState } from '@store/bottomSheet';
import { useRecoilValue } from 'recoil';

const BottomSheet = () => {
  const bottomSheet = useRecoilValue(bottomSheetState);

  return (
    <Drawer open={bottomSheet.isOpen}>
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
};

export default BottomSheet;
