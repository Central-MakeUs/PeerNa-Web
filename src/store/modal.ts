import { atom } from 'recoil';

// 추후에 모달이 추가되면 모달 타입에 따른 [key: ModalType]: boolean을 추가해주면 됨.
export interface ModalStateType {
  login: boolean;
  push: boolean;
  projectAccept: boolean;
  projectDecline: boolean;
  projectInvite: boolean;
  projectJoin: boolean;
  peerVerify: boolean;
  peerRequestComplete: boolean;
  error: boolean;
  selfTest: boolean;
  withdrawal: boolean;
  projectJoinAccept: boolean;
  projectJoinDecline: boolean;
  projectJoinRequest: boolean;
  alreadyReview: boolean;
}

export type ModalType =
  | 'login'
  | 'push'
  | 'projectAccept'
  | 'projectDecline'
  | 'projectJoinAccept'
  | 'projectJoinDecline'
  | 'projectInvite'
  | 'projectJoin'
  | 'peerVerify'
  | 'peerRequestComplete'
  | 'error'
  | 'selfTest'
  | 'withdrawal'
  | 'projectJoinAccept'
  | 'projectJoinDecline'
  | 'projectJoinRequest'
  | 'alreadyReview';

export const modalState = atom<ModalStateType>({
  key: 'modalState',
  default: {
    login: false,
    push: false,
    projectAccept: false,
    projectDecline: false,
    projectJoinAccept: false,
    projectJoinDecline: false,
    projectInvite: false,
    projectJoin: false,
    peerVerify: false,
    peerRequestComplete: false,
    error: false,
    selfTest: false,
    withdrawal: false,
    projectJoinRequest: false,
    alreadyReview: false,
  },
});
