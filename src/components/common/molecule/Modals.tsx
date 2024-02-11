import ErrorModal from '@components/common/molecule/ErrorModal';
import ProjectAcceptModal from '@components/common/molecule/ProjectAcceptModal';
import ProjectDeclineModal from '@components/common/molecule/ProjectDeclineModal';
import PushModal from '@components/common/molecule/PushModal';
import LoginModal from '@pages/auth/redirect/organism/LoginModal';
import { ModalType, modalState } from '@store/modal';
import { ReactNode } from 'react';
import { useRecoilValue } from 'recoil';

interface SwitchModals {
  modals: Partial<Record<ModalType, ReactNode>>;
}

const SwitchModals = ({ modals }: SwitchModals) => {
  const modalKeys = useRecoilValue(modalState);
  const openedModal = Object.keys(modalKeys).find(
    key => modalKeys[key as ModalType] === true,
  );

  return modals[openedModal as ModalType];
};

export function Modals() {
  return (
    <SwitchModals
      modals={{
        login: <LoginModal />,
        push: <PushModal />,
        error: <ErrorModal />,
      }}
    />
  );
}

export function StackModals() {
  return (
    <SwitchModals
      modals={{
        projectAccept: <ProjectAcceptModal />,
        projectDecline: <ProjectDeclineModal />,
      }}
    />
  );
}
