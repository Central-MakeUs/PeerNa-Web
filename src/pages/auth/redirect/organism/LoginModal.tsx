import AppleLogin from '@components/common/atom/AppleLogin';
import KakaoLogin from '@components/common/atom/KakaoLogin';
import Typography from '@components/common/atom/Typography';
import useModal from '@hooks/store/useModal';
import { Modal, ModalContent, ModalFooter } from '@nextui-org/react';

export default function LoginModal() {
  const { isOpen, openModal, closeModal } = useModal('login');

  const handleOpenChange = (isOpen: boolean) => {
    if (isOpen) openModal();
    else closeModal();
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
        <div className="pt-10 pb-4">
          <Typography className="text-center mb-5" variant="header03">
            로그인
          </Typography>
          <Typography className="text-center" variant="body04">
            {
              '로그인 후 단계 별 결과 분석을 통해 \n 구성한 피어 카드를 확인하세요'
            }
          </Typography>
        </div>
        <ModalFooter>
          <div className="w-full h-full box-content flex flex-col gap-2">
            <KakaoLogin />
            <AppleLogin />
          </div>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
