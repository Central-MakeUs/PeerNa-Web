import Typography from '@components/common/atom/Typography';
import {
  ModalContent,
  ModalFooter,
  ModalProps as ModalPropsWithNextui,
  Modal as ModalWithNextui,
} from '@nextui-org/react';
import { modalState } from '@store/modal';
import { useRecoilState } from 'recoil';
import SvgIcon from '../atom/SvgIcon';

interface ErrorModalProps extends ModalPropsWithNextui {
  modalHeader: string;
  modalBody: string;
  footer: React.ReactNode;
}

export default function ErrorModal({
  modalHeader,
  modalBody,
  footer,
  ...props
}: ErrorModalProps) {
  const [modal, setModal] = useRecoilState(modalState);

  const handleSetIsOpen = (isOpen: boolean) => {
    setModal({
      ...modal,
      isOpen: !isOpen,
      modalType: 'error',
    });
  };

  return (
    <>
      {modal.isOpen && (
        <ModalWithNextui
          {...props}
          backdrop="opaque"
          isOpen={modal.isOpen}
          onOpenChange={handleSetIsOpen}
          hideCloseButton={true}
          classNames={{
            backdrop:
              'bg-gradient-to-t from-zinc-900 to-zinc-900/10 backdrop-opacity-20',
          }}
        >
          <ModalContent className="w-[310px] m-auto">
            <div className="pt-10 pb-4 flex flex-col items-center">
              <SvgIcon id="Error" color="danger01" />
              <Typography
                className="text-center mt-2 mb-2"
                variant={'header03'}
              >
                {modalHeader}
              </Typography>
              <Typography className="text-center" variant={'body04'}>
                {modalBody}
              </Typography>
            </div>
            <ModalFooter>{footer}</ModalFooter>
          </ModalContent>
        </ModalWithNextui>
      )}
    </>
  );
}
