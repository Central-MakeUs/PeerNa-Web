import { queryClient } from '@/main';
import Button from '@components/common/atom/Button';
import Typography from '@components/common/atom/Typography';
import usePostMemberWithdrawal from '@hooks/api/member/index/usePostMemberWithdrawal';
import { useFlow } from '@hooks/common/useStackFlow';
import useModal from '@hooks/store/useModal';
import { Modal, ModalContent, ModalFooter } from '@nextui-org/react';
import { http } from '@utils/API';
import { getRefreshToken } from '@utils/token';
import { useEffect } from 'react';
import toast from 'react-hot-toast';

export default function WithdrawalModal() {
  const {
    isOpen,
    openModal: withdrawalOpen,
    closeModal,
  } = useModal('withdrawal');

  const { mutate, isSuccess } = usePostMemberWithdrawal();

  const { replace } = useFlow();

  const handleOpenChange = (isOpen: boolean) => {
    if (isOpen) withdrawalOpen();
    else closeModal();
  };

  const handleClickDelete = () => {
    mutate(getRefreshToken() ?? '', {
      onSuccess: () => {
        toast.success('회원탈퇴 되었습니다');
        delete http.defaults.headers.common.Authorization;
        localStorage.clear();
        queryClient.clear();
        replace('OnboardingPage', { step: '1' });
      },
    });
  };

  const handleClickCancel = () => {
    closeModal();
  };

  useEffect(() => {
    if (isSuccess) {
      withdrawalOpen();
      closeModal();
    }
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
            {`정말 탈퇴하시겠어요?`}
          </Typography>
          <Typography className="text-center" variant="body02">
            {'탈퇴 시, 계정은 \n 삭제되며 복구되지 않습니다.'}
          </Typography>
        </div>
        <ModalFooter>
          <div className="w-full h-full box-content flex gap-2">
            <Button buttonVariant="tertiary" onClick={handleClickCancel}>
              <Typography variant="body01" fontColor="gray08">
                취소
              </Typography>
            </Button>
            <Button onClick={handleClickDelete}>
              <Typography variant="body01" fontColor="white">
                탈퇴
              </Typography>
            </Button>
          </div>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
