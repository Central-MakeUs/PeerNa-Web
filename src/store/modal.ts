import { atom } from 'recoil';

interface ModalState {
  isOpen: boolean;
  modalType: 'default' | 'error';
}

export const modalState = atom<ModalState>({
  key: 'modalState',
  default: {
    isOpen: true,
    modalType: 'default',
  },
});
