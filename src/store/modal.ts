import { atom } from 'recoil';

// 추후에 모달이 추가되면 모달 타입에 따른 [key: ModalType]: boolean을 추가해주면 됨.
export interface ModalStateType {
  login: boolean;
  push: boolean;
}

export type ModalType = 'login' | 'push';

export const modalState = atom<ModalStateType>({
  key: 'modalState',
  default: {
    login: false,
    push: false,
  },
});
