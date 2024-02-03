import { modalState, ModalStateType } from '@store/modal';
import { useRecoilState } from 'recoil';

export default function useModal() {
  const [modal, setModal] = useRecoilState<ModalStateType>(modalState);

  const openModal = (modalType: 'default' | 'error' | 'login') => {
    setModal(prevModal => ({
      ...prevModal,
      isOpen: true,
      modalType,
    }));
  };

  const closeModal = () => {
    setModal(prevModal => ({
      ...prevModal,
      isOpen: false,
    }));
  };

  return {
    isOpen: modal.isOpen,
    modalType: modal.modalType,
    openModal,
    closeModal,
  };
}
