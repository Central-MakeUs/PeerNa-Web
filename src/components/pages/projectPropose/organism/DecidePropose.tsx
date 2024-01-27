import Button from '@components/common/atom/Button';
import ButtonContainer from '@components/common/molecule/ButtonContainer';
import Modal from '@components/common/molecule/Modal';
import ProjectInformation from '@components/pages/projectDetail/organism/ProjectInformation';
import FixedButtonContainer from '@components/wrapper/FixedButtonContainer';
import useModal from '@hooks/useModal';
import { useFlow } from '@hooks/useStackFlow';
import { Fragment, useState } from 'react';

export default function DecidePropose() {
  const { replace } = useFlow();
  const { openModal, closeModal } = useModal();
  const [modalType, setModalType] = useState<'accept' | 'reject' | ''>('');
  const handleClickOpenAcceptModal = () => {
    openModal('default');
    setModalType('accept');
  };
  const handleClickOpenRejectModal = () => {
    openModal('default');
    setModalType('reject');
  };

  const handleClickProposeAccept = () => {
    if (modalType === 'accept') null;
    else null;

    replace('ProjectPage', {});
    closeModal();
  };

  const handleClickProposeReject = () => {
    if (modalType === 'accept') null;
    else null;
    replace('ProjectPage', {});
    closeModal();
  };

  return (
    <Fragment>
      <ProjectInformation />
      <FixedButtonContainer direction="row">
        <Button buttonVariant="tertiary" onClick={handleClickOpenRejectModal}>
          거절
        </Button>
        <Button onClick={handleClickOpenAcceptModal}>수락</Button>
      </FixedButtonContainer>
      {modalType === 'accept' ? (
        <Modal
          modalHeader="프로젝트 제안을 수락할까요?"
          modalBody="수락하면 해당 프로젝트의 팀원으로 참여할 수 있어요"
          footer={
            <ButtonContainer direction="row">
              <Button
                buttonVariant="tertiary"
                onClick={handleClickProposeReject}
              >
                아니오
              </Button>
              <Button onClick={handleClickProposeAccept}>네</Button>
            </ButtonContainer>
          }
        />
      ) : (
        <Modal
          modalHeader="프로젝트 제안을 수락할까요?"
          modalBody="수락하면 해당 프로젝트의 팀원으로 참여할 수 있어요"
          footer={
            <ButtonContainer direction="row">
              <Button
                buttonVariant="tertiary"
                onClick={handleClickProposeReject}
              >
                아니오
              </Button>
              <Button onClick={handleClickProposeAccept}>네</Button>
            </ButtonContainer>
          }
        />
      )}
    </Fragment>
  );
}
