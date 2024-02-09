import Button from '@components/common/atom/Button';
import Typography from '@components/common/atom/Typography';
import { UtilityKeys } from '@constants/localStorage';
import usePostPushAgree from '@hooks/api/member/index/usePostPushAgree';
import useModal from '@hooks/store/useModal';
import { Modal, ModalContent, ModalFooter, Spacer } from '@nextui-org/react';
import { useEffect } from 'react';

export default function PushModal() {
  const { isOpen, openModal, closeModal } = useModal('push');
  const { mutate, isSuccess } = usePostPushAgree();

  const handleOpenChange = (isOpen: boolean) => {
    if (isOpen) openModal();
    else closeModal();
  };

  const handleClickAgree = () => {
    mutate(true);
    localStorage.setItem(UtilityKeys.IS_PUSH_AGREE, 'false');
  };
  const handleClickDisagree = () => {
    mutate(false);
    localStorage.setItem(UtilityKeys.IS_PUSH_AGREE, 'true');
  };

  useEffect(() => {
    if (isSuccess) closeModal();
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
            {'PeerNa에서\n알림을 보내고자 합니다'}
          </Typography>
          <Typography className="text-center" variant="body02">
            {
              '해당 기기로 피어 테스트 응답 요청 및 프로젝트 제안 등 서비스 이용에 필요한 안내사항을 푸시 알림으로 알려드릴게요'
            }
          </Typography>
          <Spacer y={2} />
          <Typography className="text-center" variant="body02">
            앱 푸시에 수신 동의 하시겠습니까?
          </Typography>
        </div>
        <ModalFooter>
          <div className="w-full h-full box-content flex gap-2">
            <Button buttonVariant="tertiary" onClick={handleClickDisagree}>
              <Typography variant="body01" fontColor="gray08">
                허용 안함
              </Typography>
            </Button>
            <Button onClick={handleClickAgree}>
              <Typography variant="body01" fontColor="white">
                허용
              </Typography>
            </Button>
          </div>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
