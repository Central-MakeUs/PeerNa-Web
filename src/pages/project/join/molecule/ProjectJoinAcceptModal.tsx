import Button from '@components/common/atom/Button';
import SvgIcon from '@components/common/atom/SvgIcon';
import Typography from '@components/common/atom/Typography';
import usePostProjectRequestJoinAccept from '@hooks/api/project/projectId/requestJoin/usePostProjectRequestJoinAccept';
import { useFlow } from '@hooks/common/useStackFlow';
import useModal from '@hooks/store/useModal';
import { Modal, ModalContent, ModalFooter } from '@nextui-org/react';
import { useActivity } from '@stackflow/react';
import { useEffect } from 'react';
import toast from 'react-hot-toast';

export default function ProjectJoinAcceptModal() {
  const { isOpen, openModal, closeModal } = useModal('projectJoinAccept');
  const { mutate, isSuccess } = usePostProjectRequestJoinAccept();

  const { params } = useActivity();
  const { push } = useFlow();
  const projectId = params.id ?? '';
  const memberId = params.subTargetId ?? '';

  const handleOpenChange = (isOpen: boolean) => {
    if (isOpen) openModal();
    else closeModal();
  };

  const handleClickAgree = () => {
    mutate({ peerId: memberId, projectId: projectId });
    toast.success('수락 완료!', {
      icon: <SvgIcon id="Complete" color="gray08" />,
    });
  };
  const handleClickDisagree = () => {
    closeModal();
  };

  useEffect(() => {
    if (isSuccess) {
      closeModal();
      push('NotificationPage', {});
    }
  }, [isSuccess]);

  return (
    <Modal
      isOpen={isOpen}
      backdrop="opaque"
      onOpenChange={handleOpenChange}
      hideCloseButton={true}
      classNames={{
        wrapper: 'z-[100]',
        backdrop:
          'z-[99] bg-gradient-to-t from-zinc-900 to-zinc-900/10 backdrop-opacity-20',
      }}
    >
      <ModalContent className="w-[310px] m-auto">
        <div className="pt-10 pb-4 px-4">
          <Typography className="text-center mb-5" variant="header03">
            프로젝트 참여 신청을 수락할까요?
          </Typography>
          <Typography className="text-center" variant="body02">
            {`신청을 수락하면\n 해당 동료와 프로젝트를 함께 하게 돼요`}
          </Typography>
        </div>
        <ModalFooter>
          <div className="w-full h-full box-content flex gap-2">
            <Button buttonVariant="tertiary" onClick={handleClickDisagree}>
              <Typography variant="body01" fontColor="gray08">
                아니오
              </Typography>
            </Button>
            <Button onClick={handleClickAgree}>
              <Typography variant="body01" fontColor="white">
                네
              </Typography>
            </Button>
          </div>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
