import { atom } from 'recoil';

export type ProfileSelfStateType = {
  job: string;
  part: string;
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
