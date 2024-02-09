import Button from '@components/common/atom/Button';
import Typography from '@components/common/atom/Typography';
import ButtonContainer from '@components/common/molecule/ButtonContainer';
import Modal from '@components/common/molecule/LegacyModal';
import usePostPushAgree from '@hooks/api/member/index/usePostPushAgree';
import useModal from '@hooks/store/useModal';
import toast from 'react-hot-toast';

interface SettingProps {
  handleDelete: () => void;
}

export default function SettingMenu({ handleDelete }: SettingProps) {
  const link = [
    'https://peerna.notion.site/f04a7f6a06c64d81b6682e17c062d805',
    'https://peerna.notion.site/89daac4cb26342d5a4b6e3d660b22b5c',
    'https://peerna.notion.site/86e39990275648db952aeaf5197cbeba',
  ];

  const handleClick = (url: string) => {
    window.location.href = url;
  };

  const { openModal, closeModal } = useModal('alarm');

  const handlePushAlarm = () => {
    openModal();
  };

  const { mutate } = usePostPushAgree();

  const handleClickAlaramDecline = () => {
    mutate({ pushAgree: false });
    toast.success('푸시 알림 설정을 거부했습니다.');
    closeModal();
  };

  const handleClickAlarmAccept = () => {
    mutate({ pushAgree: true });
    toast.success('푸시 알림 설정이 완료되었습니다');
    closeModal();
  };

  const containerStyle = 'pt-[33px] pl-[28px] pb-[17px]';
  return (
    <ul className="w-full">
      <li className={containerStyle} onClick={handlePushAlarm}>
        <Typography variant="body01" fontColor="gray08">
          알림 허용
        </Typography>
      </li>

      <li className={containerStyle} onClick={() => handleClick(link[0])}>
        <Typography variant="body01" fontColor="gray08">
          서비스 이용약관
        </Typography>
      </li>
      <li className={containerStyle} onClick={() => handleClick(link[1])}>
        <Typography variant="body01" fontColor="gray08">
          개인정보 처리방침
        </Typography>
      </li>
      <li className={containerStyle} onClick={() => handleClick(link[2])}>
        <Typography variant="body01" fontColor="gray08">
          마케팅 정보 수신 동의
        </Typography>
      </li>
      <li className={containerStyle} onClick={handleDelete}>
        <Typography variant="body01" fontColor="gray08">
          회원 탈퇴
        </Typography>
      </li>
      <Modal
        type="alarm"
        modalHeader={`PeerNa에서 \n 알림을 보내고자 합니다`}
        modalBody={`해당 기기로 피어 테스트 응답 요청 및 \n 프로젝트 제안 등 서비스 이용에 필요한 \n 안내 사항을 푸시 알림으로 알려드릴게요 \n \n 앱 푸시에 수신 동의하시겠습니까?`}
        footer={
          <ButtonContainer direction="row">
            <Button buttonVariant="tertiary" onClick={handleClickAlaramDecline}>
              허용 안함
            </Button>
            <Button onClick={handleClickAlarmAccept}>허용</Button>
          </ButtonContainer>
        }
      />
    </ul>
  );
}
