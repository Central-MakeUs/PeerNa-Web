import Typography from '@components/common/atom/Typography';

export default function SettingMenu() {
  const handleDelete = () => {
    console.log('탈퇴');
  };

  const containerStyle = 'pt-[33px] pl-[28px] pb-[17px]';
  return (
    <ul className="w-full">
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
          개인정보처리방침
        </Typography>
      </li>
      <li className={containerStyle}>
        <Typography variant="body01" fontColor="gray08">
          마케팅 정보 활용 동의약관
        </Typography>
      </li>
      <li className={containerStyle} onClick={handleDelete}>
        <Typography variant="body01" fontColor="gray08">
          회원 탈퇴
        </Typography>
      </li>
    </ul>
  );
}
