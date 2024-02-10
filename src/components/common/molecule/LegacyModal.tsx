import {
  ModalContent,
  ModalFooter,
  ModalProps as ModalPropsWithNextui,
  Modal as ModalWithNextui,
} from '@nextui-org/react';

import useModal from '@hooks/store/useModal';
import { ModalType } from '@store/modal';
import { ReactNode } from 'react';
import Typography from '../atom/Typography';

interface ModalProps extends Omit<ModalPropsWithNextui, 'children'> {
  modalHeader: string;
  modalBody?: string;
  footer: ReactNode;
  type: ModalType;
}

export default function Modal({
  modalHeader,
  modalBody,
  footer,
  type,
  ...props
}: ModalProps) {
  const { isOpen, openModal, closeModal } = useModal(type);

  const handleOpenChange = (isOpen: boolean) => {
    if (isOpen) {
      openModal();
    } else {
      closeModal();
    }
  };

  return (
    <>
      {isOpen && (
        <ModalWithNextui
          {...props}
          backdrop="opaque"
          isOpen={isOpen}
          onOpenChange={handleOpenChange}
          hideCloseButton={true}
          classNames={{
            base: 'bg-white',
          }}
        >
          <ModalContent className="w-[310px] m-auto">
            <div className="pt-10 pb-4">
              <Typography className="text-center mb-5" variant="header03">
                {modalHeader}
              </Typography>
              <Typography className="text-center" variant="body02">
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
