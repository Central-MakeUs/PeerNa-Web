import Typography from '@components/common/atom/Typography';
import { StackModals } from '@components/common/molecule/Modals';
import useModal from '@hooks/store/useModal';
import toast from 'react-hot-toast';

export default function SettingMenu() {
  const link = [
    'https://peerna.notion.site/f04a7f6a06c64d81b6682e17c062d805',
    'https://peerna.notion.site/89daac4cb26342d5a4b6e3d660b22b5c',
    'https://peerna.notion.site/86e39990275648db952aeaf5197cbeba',
  ];

  const { openModal: pushAlarmOpen } = useModal('push');
  const { openModal: withdrawalOpen } = useModal('withdrawal');

  const handlePushAlarm = () => {
    const isMobile =
      navigator.userAgent.includes('iPhone') ||
      navigator.userAgent.includes('Android');
    if (isMobile) pushAlarmOpen();
    else toast.error('알림 설정은 앱에서만 가능합니다');
  };

  const handleWithdrawal = () => {
    withdrawalOpen();
  };

  const containerStyle = 'pt-[33px] pl-[28px] pb-[17px] cursor-pointer';
  return (
    <ul className="w-full">
      <li className={containerStyle} onClick={handlePushAlarm}>
        <Typography variant="body01" fontColor="gray08">
          알림 허용
        </Typography>
      </li>

      <li className={containerStyle}>
        <Typography variant="body01" fontColor="gray08" href={link[0]}>
          서비스 이용약관
        </Typography>
      </li>
      <li className={containerStyle}>
        <Typography variant="body01" fontColor="gray08" href={link[1]}>
          개인정보 처리방침
        </Typography>
      </li>
      <li className={containerStyle}>
        <Typography variant="body01" fontColor="gray08" href={link[2]}>
          마케팅 정보 수신 동의
        </Typography>
      </li>
      <li className={containerStyle} onClick={handleWithdrawal}>
        <Typography variant="body01" fontColor="gray08">
          회원 탈퇴
        </Typography>
      </li>
      <StackModals />
    </ul>
  );
}
