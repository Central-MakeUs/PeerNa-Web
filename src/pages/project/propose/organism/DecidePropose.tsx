import Button from '@components/common/atom/Button';
import ButtonContainer from '@components/common/molecule/ButtonContainer';
import Modal from '@components/common/molecule/LegacyModal';
import FixedButtonContainer from '@components/wrapper/FixedButtonContainer';
import useGetProjectById from '@hooks/api/project/index/useGetProjectById';
import usePostProjectRespondInvitation from '@hooks/api/project/projectId/usePostProjectRespondInvitation';
import { useFlow } from '@hooks/common/useStackFlow';
import useModal from '@hooks/store/useModal';
import ProjectInformation from '@pages/project/projectId/organism/ProjectInformation';
import { RespondType } from '@type/enums';
import { Fragment, useState } from 'react';

interface DecideProposeProps {
  projectId: string;
}

export default function DecidePropose({ projectId }: DecideProposeProps) {
  const { data: projectInformation } = useGetProjectById(Number(projectId));
  const { mutate } = usePostProjectRespondInvitation();

  const { replace } = useFlow();
  // TODO: 제안 모달 추가 필요
  const { openModal, closeModal } = useModal();

  const [modalType, setModalType] = useState<RespondType>(RespondType.ACCEPT);

  const handleClickOpenModal = (modalType: RespondType) => {
    openModal();
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
