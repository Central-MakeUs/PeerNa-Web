import Button from '@components/common/atom/Button';
import SvgIcon from '@components/common/atom/SvgIcon';
import Typography from '@components/common/atom/Typography';
import usePostPeerInviteProject from '@hooks/api/project/projectId/usePostPeerInviteProject';
import { useFlow } from '@hooks/common/useStackFlow';
import useModal from '@hooks/store/useModal';
import { Modal, ModalContent, ModalFooter } from '@nextui-org/react';
import { useActivity } from '@stackflow/react';
import { projectIdState } from '@store/projectId';
import { useEffect } from 'react';
import toast from 'react-hot-toast';
import { useRecoilValue } from 'recoil';

export default function ProjectInviteModal() {
  const { isOpen, openModal, closeModal } = useModal('projectInvite');
  const { projectId } = useRecoilValue(projectIdState);

  const { mutate, isSuccess } = usePostPeerInviteProject();
  const { params } = useActivity();
  const memberId = parseInt(params?.memberId || '');

  const { replace } = useFlow();

  const handleOpenChange = (isOpen: boolean) => {
    if (isOpen) openModal();
    else closeModal();
  };

  const handleClickAgree = () => {
    if (projectId) {
      mutate({ projectId: projectId, peerId: memberId });
      toast.success('초대 완료!', {
        icon: <SvgIcon id="Complete" color="gray08" />,
      });
    }
  };
  const handleClickDisagree = () => {
    closeModal();
  };

  useEffect(() => {
    if (isSuccess) {
      closeModal();
      replace('ProjectPage', {});
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
            내 프로젝트에 초대할까요?
          </Typography>
          <Typography className="text-center" variant="body02">
            {`초대한 동료에게 프로젝트를 제안할게요\n 수락 여부는 알림 탭에서 확인할 수 있어요`}
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
