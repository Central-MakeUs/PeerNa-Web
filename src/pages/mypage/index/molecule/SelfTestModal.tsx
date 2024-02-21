import Button from '@components/common/atom/Button';
import Typography from '@components/common/atom/Typography';
import { useFlow } from '@hooks/common/useStackFlow';
import useModal from '@hooks/store/useModal';
import { Modal, ModalContent, ModalFooter } from '@nextui-org/react';

export default function SelfTestModal() {
  const { isOpen, closeModal } = useModal('selfTest');
  const { replace } = useFlow();

  const handleClickSelfTest = () => {
    replace('ReviewSelfPage', { step: '1' });
    closeModal();
  };

  return (
    <Modal
      isOpen={isOpen}
      backdrop="opaque"
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
            {'셀프테스트를 해주세요'}
          </Typography>
          <Typography className="text-center" variant="body02">
            {
              '업무 성향을 자세히 분석하여 \n 꼭 맞는 동료를 만날 수 있도록 도와드릴게요'
            }
          </Typography>
        </div>
        <ModalFooter>
          <div className="w-full h-full box-content flex gap-2">
            <Button onClick={handleClickSelfTest}>
              <Typography variant="body01" fontColor="white">
                내 피어 유형 확인하러 가기
              </Typography>
            </Button>
          </div>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
