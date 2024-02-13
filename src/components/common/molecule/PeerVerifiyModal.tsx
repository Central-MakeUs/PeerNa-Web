import Button from '@components/common/atom/Button';
import Typography from '@components/common/atom/Typography';
import usePostRequestPeerTest from '@hooks/api/review/peerId/usePostRequestPeerTest';
import useModal from '@hooks/store/useModal';
import { Modal, ModalContent, ModalFooter } from '@nextui-org/react';
import { useEffect } from 'react';
import toast from 'react-hot-toast';

export default function PeerVerifyModal({ memberId }: { memberId: number }) {
  const {
    isOpen,
    openModal: peerVerifyOpen,
    closeModal,
  } = useModal('peerVerify');
  const { mutate, isSuccess } = usePostRequestPeerTest();
  const { openModal: peerRequestCompleteOpen } = useModal(
    'peerRequestComplete',
  );

  const handleOpenChange = (isOpen: boolean) => {
    if (isOpen) peerVerifyOpen();
    else closeModal();
  };

  const handleClickAgree = () => {
    mutate({ peerId: memberId });
  };

  const handleClickDisagree = () => {
    closeModal();
    toast.error(`함께 한 경험이 있는 동료만 \n 피어테스트 요청이 가능합니다`);
  };

  useEffect(() => {
    if (isSuccess) {
      peerRequestCompleteOpen();
      closeModal();
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
            함께 한 경험이 있는 동료인가요?
          </Typography>
          <Typography className="text-center" variant="body02">
            {
              '신뢰도 높은 분석 결과를 위해 \n 함께 한 동료에게만 응답을 요청해주세요.'
            }
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
