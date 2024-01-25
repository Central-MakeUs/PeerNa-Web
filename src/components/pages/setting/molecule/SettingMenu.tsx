import Typography from '@components/common/atom/Typography';

export default function SettingMenu() {
  const containerStyle = 'pt-[33px] pl-[28px] pb-[17px]';
  return (
    <ul>
      <li className={containerStyle}>
        <Typography variant="body01" fontColor="gray08">
          알림 허용
        </Typography>
      </li>
      <li className={containerStyle}>
        <Typography variant="body01" fontColor="gray08">
          서비스 이용약관
        </Typography>
      </li>
      <li className={containerStyle}>
        <Typography variant="body01" fontColor="gray08">
          탈퇴
        </Typography>
      </li>
    </ul>
  );
}
