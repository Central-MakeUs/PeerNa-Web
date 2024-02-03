import Button from '@components/common/atom/Button';
import ButtonContainer from '@components/common/molecule/ButtonContainer';
import Modal from '@components/common/molecule/Modal';
import { AUTH_URL } from '@constants/auth';
import useModal from '@hooks/store/useModal';

export default function LoginModal() {
  const { isOpen, modalType } = useModal();
  const modalBody =
    '회원가입 후 단계 별 결과 분석을 통해 \n 구성한 피어 카드를 확인하세요';

  const kakaoLogin = () => {
    window.location.href = AUTH_URL;
  };

  const modalFooter = (
    <ButtonContainer direction={'col'}>
      <Button
        className="flex-1 box-border bg-secondary-yellow"
        onClick={kakaoLogin}
      >
        카카오 회원가입
      </Button>
      <Button className="flex-1 box-border bg-gray07">Apple 회원가입</Button>
    </ButtonContainer>
  );

  return (
    <>
      {isOpen && modalType === 'login' && (
        <Modal
          modalHeader="회원가입"
          modalBody={modalBody}
          footer={modalFooter}
        />
      )}
    </>
  );
}
