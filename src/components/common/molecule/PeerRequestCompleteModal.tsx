import Button from '@components/common/atom/Button';
import Typography from '@components/common/atom/Typography';
import useModal from '@hooks/store/useModal';
import { Modal, ModalContent, ModalFooter } from '@nextui-org/react';

export default function PeerRequestCompleteModal() {
  const { isOpen, openModal, closeModal } = useModal('peerRequestComplete');

  const handleOpenChange = (isOpen: boolean) => {
    if (isOpen) openModal();
    else closeModal();
  };

  const handlePeerRequestComplete = () => {
    closeModal();
  };

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
            응답 요청 완료
          </Typography>
          <Typography className="text-center" variant="body02">
            {'동료의 응답에 따라 \n 마이페이지 분석 결과가 업데이트 돼요.'}
          </Typography>
        </div>
        <ModalFooter>
          <div className="w-full h-full box-content flex gap-2">
            <Button onClick={handlePeerRequestComplete}>
              <Typography variant="body01" fontColor="white">
                확인
              </Typography>
            </Button>
          </div>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
