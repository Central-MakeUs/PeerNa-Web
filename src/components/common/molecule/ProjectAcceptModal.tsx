import Button from '@components/common/atom/Button';
import SvgIcon from '@components/common/atom/SvgIcon';
import Typography from '@components/common/atom/Typography';
import usePostProjectRespondInvitation from '@hooks/api/project/projectId/usePostProjectRespondInvitation';
import { useFlow } from '@hooks/common/useStackFlow';
import useModal from '@hooks/store/useModal';
import { Modal, ModalContent, ModalFooter } from '@nextui-org/react';
import { useActivity } from '@stackflow/react';
import { RespondType } from '@type/enums';
import { useEffect } from 'react';
import toast from 'react-hot-toast';

export default function ProjectAcceptModal() {
  const { isOpen, openModal, closeModal } = useModal('projectAccept');
  const { mutate, isSuccess } = usePostProjectRespondInvitation();

  const { params } = useActivity();
  const { replace } = useFlow();

  const handleOpenChange = (isOpen: boolean) => {
    if (isOpen) openModal();
    else closeModal();
  };

  const handleClickAgree = () => {
    mutate({ projectId: params.id!, type: RespondType.ACCEPT });
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
      replace('NotificationPage', {});
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
            프로젝트 제안을 수락할까요?
          </Typography>
          <Typography className="text-center" variant="body02">
            {`수락한 프로젝트는\n 내 프로젝트 목록에서 확인할 수 있어요`}
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
