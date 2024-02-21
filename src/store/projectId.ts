import { persistAtom } from '@store/recoilPersist';
import { atom } from 'recoil';

export type ProjectIdStateType = {
  projectId: number | null;
};

export const PROJECT_ID_INITIAL_STATE: ProjectIdStateType = {
  projectId: null,
};

export const projectIdState = atom<ProjectIdStateType>({
  key: 'PROJECT_ID',
  default: PROJECT_ID_INITIAL_STATE,
  effects_UNSTABLE: [persistAtom],
});
