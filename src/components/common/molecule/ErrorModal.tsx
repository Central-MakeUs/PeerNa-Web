import Button from '@components/common/atom/Button';
import Typography from '@components/common/atom/Typography';
import useModal from '@hooks/store/useModal';
import {
  ModalContent,
  ModalFooter,
  Modal as ModalWithNextui,
} from '@nextui-org/react';
import SvgIcon from '../atom/SvgIcon';

export default function ErrorModal() {
  const { isOpen, openModal, closeModal } = useModal('error');

  const handleOpenChange = (isOpen: boolean) => {
    if (isOpen) openModal();
    else closeModal();
  };

  return (
    <>
      <ModalWithNextui
        backdrop="opaque"
        isOpen={isOpen}
        onOpenChange={handleOpenChange}
        hideCloseButton={true}
        classNames={{
          backdrop:
            'bg-gradient-to-t from-zinc-900 to-zinc-900/10 backdrop-opacity-20',
        }}
      >
        <ModalContent className="w-[310px] m-auto">
          <div className="pt-10 pb-4 flex flex-col items-center">
            <SvgIcon id="Error" color="danger01" />
            <Typography className="text-center mt-2 mb-2" variant={'header03'}>
              네트워크 에러
            </Typography>
            <Typography className="text-center" variant={'body04'}>
              {'네트워크 에러가 발생하였습니다.'}
            </Typography>
          </div>
          <ModalFooter>
            <Button>다시 시도</Button>
          </ModalFooter>
        </ModalContent>
      </ModalWithNextui>
    </>
  );
}
