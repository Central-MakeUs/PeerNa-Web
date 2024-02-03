import Button from '@components/common/atom/Button';
import ButtonContainer from '@components/common/molecule/ButtonContainer';
import Modal from '@components/common/molecule/Modal';
import FixedButtonContainer from '@components/wrapper/FixedButtonContainer';
import {
  RespondType,
  usePostProjectRespondInvitation,
} from '@hooks/api/project/[project-id]/usePostProjectRespondInvitation';
import { useGetProjectById } from '@hooks/api/project/useGetProjectById';
import useModal from '@hooks/useModal';
import { useFlow } from '@hooks/useStackFlow';
import ProjectInformation from '@pages/project/[id]/organism/ProjectInformation';
import { Fragment, useState } from 'react';

interface DecideProposeProps {
  projectId: string;
}

export default function DecidePropose({ projectId }: DecideProposeProps) {
  const { data: projectInformation } = useGetProjectById(Number(projectId));
  const { mutate } = usePostProjectRespondInvitation();

  const { replace } = useFlow();
  const { openModal, closeModal } = useModal();

  const [modalType, setModalType] = useState<RespondType>(RespondType.ACCEPT);

  const handleClickOpenModal = (modalType: RespondType) => {
    openModal('default');
    setModalType(modalType);
  };

  const handleClickProposeAccept = () => {
    if (modalType === RespondType.ACCEPT)
      mutate({ projectId: parseInt(projectId), type: RespondType.ACCEPT });

    if (modalType === RespondType.DECLINE)
      mutate({ projectId: parseInt(projectId), type: RespondType.DECLINE });

    replace('ProjectPage', {});
    closeModal();
  };

  const handleClickProposeDecline = () => closeModal();

  return (
    <Fragment>
      <ProjectInformation projectInformation={projectInformation} />
      <FixedButtonContainer direction="row">
        <Button
          buttonVariant="tertiary"
          onClick={() => handleClickOpenModal(RespondType.DECLINE)}
        >
          거절
        </Button>
        <Button onClick={() => handleClickOpenModal(RespondType.ACCEPT)}>
          수락
        </Button>
      </FixedButtonContainer>
      {modalType === RespondType.ACCEPT ? (
        <Modal
          modalHeader="프로젝트 제안을 수락할까요?"
          modalBody="수락하면 해당 프로젝트의 팀원으로 참여할 수 있어요"
          footer={
            <ButtonContainer direction="row">
              <Button
                buttonVariant="tertiary"
                onClick={handleClickProposeDecline}
              >
                아니오
              </Button>
              <Button onClick={handleClickProposeAccept}>네</Button>
            </ButtonContainer>
          }
        />
      ) : (
        <Modal
          modalHeader="프로젝트 제안을 거절할까요?"
          modalBody="거절하면 해당 프로젝트의 팀원으로 참여할 수 없어요"
          footer={
            <ButtonContainer direction="row">
              <Button
                buttonVariant="tertiary"
                onClick={handleClickProposeDecline}
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
