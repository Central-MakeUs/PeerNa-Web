import { persistAtom } from '@store/recoilPersist';
import { atom } from 'recoil';

export interface ModalStateType {
  isOpen: boolean;
  modalType: 'default' | 'error' | 'login';
}

export const modalState = atom<ModalStateType>({
  key: 'modalState',
  default: {
    isOpen: false,
    modalType: 'default',
  },
  effects_UNSTABLE: [persistAtom],
});
