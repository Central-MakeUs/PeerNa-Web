import { atom } from 'recoil';

// 추후에 모달이 추가되면 모달 타입에 따른 [key: ModalType]: boolean을 추가해주면 됨.
export interface ModalStateType {
  login: boolean;
  push: boolean;
  projectAccept: boolean;
  projectDecline: boolean;
}

export type ModalType = 'login' | 'push' | 'projectAccept' | 'projectDecline';

export const modalState = atom<ModalStateType>({
  key: 'modalState',
  default: {
    login: false,
    push: false,
    projectAccept: false,
    projectDecline: false,
  },
});
