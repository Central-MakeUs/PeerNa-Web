import {
  Modal as ModalWithNextui,
  ModalProps as ModalPropsWithNextui,
  ModalContent,
  ModalFooter,
  useDisclosure,
} from '@nextui-org/react';
import Typography from '../atom/Typography';
import Button from '../atom/Button';

interface ModalProps extends ModalPropsWithNextui {
  modalHeader: string;
  modalBody: string;
  children: React.ReactNode;
}

const Modal = ({ modalHeader, modalBody, children, ...props }: ModalProps) => {
  /** Open Modal 버튼 삭제 & 해당 함수는 props로 사용할 예정 */
  const { isOpen, onOpenChange, onOpen } = useDisclosure();

  return (
    <>
      <Button onPress={onOpen}>Open Modal</Button>
      {isOpen && (
        <ModalWithNextui
          {...props}
          backdrop="opaque"
          isOpen={isOpen}
          onOpenChange={onOpenChange}
          hideCloseButton={true}
          classNames={{
            backdrop:
              'bg-gradient-to-t from-zinc-900 to-zinc-900/10 backdrop-opacity-20',
          }}
        >
          <ModalContent className="w-[310px] m-auto">
            <div className="pt-10 pb-4">
              <Typography className="text-center mb-2" variant={'header03'}>
                {modalHeader}
              </Typography>
              <Typography className="text-center" variant={'body04'}>
                {modalBody}
              </Typography>
            </div>
            <ModalFooter className="!px-5 m-auto">{children}</ModalFooter>
          </ModalContent>
        </ModalWithNextui>
      )}
    </>
  );
};

export default Modal;
