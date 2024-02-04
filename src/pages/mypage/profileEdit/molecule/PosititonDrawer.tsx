import Typography from '@components/common/atom/Typography';
import { Drawer, DrawerContent } from '@components/shadcn/drawer';
import { PART_LIST } from "@constants/list";
import { profileSelfState } from '@store/profileSelfState';
import { useRecoilState } from 'recoil';
import SelectListItem from './SelectListItem';

interface PartDrawerProps {
  openPartBottomSheet: boolean;
  setOpenPartBottomSheet: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function PositionDrawer({
  openPartBottomSheet,
  setOpenPartBottomSheet,
}: PartDrawerProps) {
  const [profileSelf, setProfileSelf] = useRecoilState(profileSelfState);
  const handleChangePart = (newPart: string) => {
    setProfileSelf(prev => ({
      ...prev,
      part: newPart,
    }));
    setOpenPartBottomSheet(false);
  };

  return (
    <Drawer open={openPartBottomSheet} onOpenChange={setOpenPartBottomSheet}>
      <DrawerContent>
        <Typography
          variant="header02"
          color="gray08"
          className="pt-[24px] pl-[20px] pb-[16px]"
        >
          직무
        </Typography>
        {Object.values(PART_LIST).map(part => (
          <SelectListItem
            key={part.key}
            title={part.text}
            isSelect={profileSelf.part === part.key}
            onClick={() => handleChangePart(part.text)}
          />
        ))}
      </DrawerContent>
    </Drawer>
  );
}
