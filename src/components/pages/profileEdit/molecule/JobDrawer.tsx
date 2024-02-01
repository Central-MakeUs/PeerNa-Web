import { Drawer, DrawerContent } from '@components/shadcn/drawer';
import SelectListItem from './SelectListItem';
import { JobList } from '@constants/member';
import { profileSelfState } from '@store/profileSelfState';
import { useRecoilState } from 'recoil';
import Typography from '@components/common/atom/Typography';

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
        {Object.values(JobList).map(job => (
          <SelectListItem
            key={job.key}
            title={job.text}
            isSelect={profileSelf.job === job.key}
            onClick={() => handleChangeJob(job.text)}
          />
        ))}
      </DrawerContent>
    </Drawer>
  );
}
