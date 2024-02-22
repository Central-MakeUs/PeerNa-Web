import Button from '@components/common/atom/Button';
import Typography from '@components/common/atom/Typography';
import { useFlow } from '@hooks/common/useStackFlow';
import useModal from '@hooks/store/useModal';
import { Modal, ModalContent, ModalFooter } from '@nextui-org/react';

export default function AlreadyReviewModal() {
  const { isOpen, openModal, closeModal } = useModal('alreadyReview');

  const { push } = useFlow();

  const handleOpenChange = (isOpen: boolean) => {
    if (isOpen) openModal();
    else closeModal();
  };

  const handleClickAgree = () => {
    push('HomePage', {});
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
            이미 피어테스트를 진행한 경험이 있어요
          </Typography>
          <Typography className="text-center" variant="body02">
            {
              '이미 피어테스트를 진행한 유저인 경우\n 추가로 리뷰를 남길 수 없어요'
            }
          </Typography>
        </div>
        <ModalFooter>
          <div className="w-full h-full box-content flex gap-2">
            <Button onClick={handleClickAgree}>
              <Typography variant="body01" fontColor="white">
                홈으로 이동하기
              </Typography>
            </Button>
          </div>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
