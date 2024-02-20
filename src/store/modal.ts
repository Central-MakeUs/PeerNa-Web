import { atom } from 'recoil';

// 추후에 모달이 추가되면 모달 타입에 따른 [key: ModalType]: boolean을 추가해주면 됨.
export interface ModalStateType {
  login: boolean;
  push: boolean;
  projectAccept: boolean;
  projectDecline: boolean;
  peerVerify: boolean;
  peerRequestComplete: boolean;
  error: boolean;
  selfTest: boolean;
  withdrawal: boolean;
  projectJoinAccept: boolean;
  projectJoinDecline: boolean;
}

export type ModalType =
  | 'login'
  | 'push'
  | 'projectAccept'
  | 'projectDecline'
  | 'peerVerify'
  | 'peerRequestComplete'
  | 'error'
  | 'selfTest'
  | 'withdrawal'
  | 'projectJoinAccept'
  | 'projectJoinDecline';

export const modalState = atom<ModalStateType>({
  key: 'modalState',
  default: {
    login: false,
    push: false,
    projectAccept: false,
    projectDecline: false,
    peerVerify: false,
    peerRequestComplete: false,
    error: false,
    selfTest: false,
    withdrawal: false,
    projectJoinAccept: false,
    projectJoinDecline: false,
  },
});
