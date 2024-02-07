import LoginModal from '@pages/auth/redirect/organism/LoginModal';
import { ModalType, modalState } from '@store/modal';
import { ReactNode } from 'react';
import { useRecoilValue } from 'recoil';

interface SwitchModals {
  modals: Record<ModalType, ReactNode>;
}

const SwitchModals = ({ modals }: SwitchModals) => {
  const modalKeys = useRecoilValue(modalState);
  const openedModal = Object.keys(modalKeys).find(
    key => modalKeys[key as ModalType] === true,
  );

  return modals[openedModal as ModalType];
};

export default function Modals() {
  return (
    <SwitchModals
      modals={{
        login: <LoginModal />,
      }}
    />
  );
}
