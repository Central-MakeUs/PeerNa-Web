import SelectListItem from '@components/common/atom/SelectListItem';
import Typography from '@components/common/atom/Typography';
import { Drawer, DrawerContent } from '@components/shadcn/drawer';
import { JOB_LIST } from '@constants/list';
import { profileSelfState } from '@store/profileSelfState';
import { JobType } from '@type/enums';
import { useRecoilState } from 'recoil';

interface JobDrawerProps {
  openJobBottomSheet: boolean;
  setOpenJobBottomSheet: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function JobDrawer({
  openJobBottomSheet,
  setOpenJobBottomSheet,
}: JobDrawerProps) {
  const [profileSelf, setProfileSelf] = useRecoilState(profileSelfState);
  const handleChangeJob = (newJob: JobType) => {
    setProfileSelf(prev => ({
      ...prev,
      job: newJob,
    }));
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
            key={job.key}
            title={job.text}
            isSelect={profileSelf.job === job.key}
            onClick={() => handleChangeJob(job.key)}
          />
        ))}
      </DrawerContent>
    </Drawer>
  );
}
