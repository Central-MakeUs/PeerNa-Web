import Typography from '@components/common/atom/Typography';
import { Drawer, DrawerContent } from '@components/shadcn/drawer';
import { JOB_LIST } from "@constants/list";
import { profileSelfState } from '@store/profileSelfState';
import { useRecoilState } from 'recoil';
import SelectListItem from './SelectListItem';

interface JobDrawerProps {
  openJobBottomSheet: boolean;
  setOpenJobBottomSheet: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function JobDrawer({
  openJobBottomSheet,
  setOpenJobBottomSheet,
}: JobDrawerProps) {
  const [profileSelf, setProfileSelf] = useRecoilState(profileSelfState);
  const handleChangeJob = (newJob: string) => {
    setProfileSelf(prev => ({
      ...prev,
      job: newJob,
    }));
    setOpenJobBottomSheet(false);
  };
  return (
    <Drawer open={openJobBottomSheet} onOpenChange={setOpenJobBottomSheet}>
      <DrawerContent>
        <Typography
          variant="header02"
          color="gray08"
          className="pt-[24px] pl-[20px] pb-[16px]"
        >
          직업
        </Typography>
        {Object.values(JOB_LIST).map(job => (
          <SelectListItem
            title={job.text}
            isSelect={profileSelf.job === job.key}
            onClick={() => handleChangeJob(job.text)}
          />
        ))}
      </DrawerContent>
    </Drawer>
  );
}
