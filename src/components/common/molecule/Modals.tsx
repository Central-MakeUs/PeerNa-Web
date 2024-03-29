import AlreadyReviewModal from '@components/common/molecule/AlreadyReviewModal';
import ErrorModal from '@components/common/molecule/ErrorModal';
import ProjectAcceptModal from '@components/common/molecule/ProjectAcceptModal';
import ProjectDeclineModal from '@components/common/molecule/ProjectDeclineModal';
import ProjectInviteModal from '@components/common/molecule/ProjectInviteModal';
import ProjectJoinAcceptModal from '@components/common/molecule/ProjectJoinAcceptModal';
import ProjectJoinDeclineModal from '@components/common/molecule/ProjectJoinDeclineModal';
import ProjectJoinRequestModal from '@components/common/molecule/ProjectJoinRequestModal';
import PushModal from '@components/common/molecule/PushModal';
import WithdrawalModal from '@components/common/molecule/WithdrawalModal';
import LoginModal from '@pages/auth/redirect/organism/LoginModal';
import SelfTestModal from '@pages/mypage/index/molecule/SelfTestModal';
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
        projectJoinAccept: <ProjectJoinAcceptModal />,
        projectJoinDecline: <ProjectJoinDeclineModal />,
        projectInvite: <ProjectInviteModal />,
        selfTest: <SelfTestModal />,
        withdrawal: <WithdrawalModal />,
        projectJoinRequest: <ProjectJoinRequestModal />,
        alreadyReview: <AlreadyReviewModal />,
      }}
    />
  );
}
