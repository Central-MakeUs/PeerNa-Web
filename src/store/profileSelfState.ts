import { JobType, PartType } from '@type/enums';
import { atom } from 'recoil';

export type ProfileSelfStateType = {
  job: JobType | '';
  part: PartType | '';
  oneLiner: string;
};

export const profileSelfState = atom<ProfileSelfStateType>({
  key: 'profileState',
  default: {
    job: '',
    part: '',
    oneLiner: '',
  },
});
