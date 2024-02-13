import Button from '@components/common/atom/Button';
import Typography from '@components/common/atom/Typography';
import { useFlow } from '@hooks/common/useStackFlow';
import useModal from '@hooks/store/useModal';
import { Modal, ModalContent, ModalFooter } from '@nextui-org/react';
import { useState } from 'react';

export default function SelfTestModal() {
  const { isOpen, openModal: selfTestOpen, closeModal } = useModal('selfTest');
  const { replace } = useFlow();
  const [preventClose, setPreventClose] = useState(false);

  const handleOpenChange = (isOpen: boolean) => {
    if (isOpen) selfTestOpen();
  };

  const handleClickSelfTest = () => {
    setPreventClose(true);
    replace('ReviewSelfPage', { step: '1' });
    closeModal();
  };

  const handleBackdropClick = () => {
    if (preventClose) return;
  };

  return (
    <Modal
      isOpen={isOpen}
      backdrop="opaque"
      onOpenChange={handleOpenChange}
      hideCloseButton={true}
      onClose={() => setPreventClose(false)}
      classNames={{
        wrapper: 'z-[100]',
        backdrop:
          'z-[99] bg-gradient-to-t from-zinc-900 to-zinc-900/10 backdrop-opacity-20',
      }}
    >
      <ModalContent
        className="w-[310px] m-auto"
        onClick={e => e.stopPropagation()}
      >
        <div className="pt-10 pb-4 px-4">
          <Typography className="text-center mb-5" variant="header03">
            {'셀프테스트를 해주세요'}
          </Typography>
          <Typography className="text-center" variant="body02">
            {
              '회원가입하고 동료들에게 링크를 공유하면 \n 나의 피어 카드와 유형을 확인할 수 있어요'
            }
          </Typography>
        </div>
        <ModalFooter>
          <div className="w-full h-full box-content flex gap-2">
            <Button onClick={handleClickSelfTest}>
              <Typography variant="body01" fontColor="white">
                셀프 테스트하러 가기
              </Typography>
            </Button>
          </div>
        </ModalFooter>
      </ModalContent>
      {isOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full"
          onClick={handleBackdropClick}
        />
      )}
    </Modal>
  );
}
