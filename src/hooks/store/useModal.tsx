import { modalState, ModalStateType, ModalType } from '@store/modal';
import { useRecoilState } from 'recoil';

export default function useModal(modalType: ModalType) {
  const [modal, setModal] = useRecoilState<ModalStateType>(modalState);
  const isOpen = modal[modalType];

  const openModal = () => {
    setModal(prevModal => ({
      ...prevModal,
      [modalType]: true,
    }));
  };

  const closeModal = () => {
    setModal(prevModal => ({
      ...prevModal,
      [modalType]: false,
    }));
  };

  return {
    isOpen,
    openModal,
    closeModal,
  };
}
