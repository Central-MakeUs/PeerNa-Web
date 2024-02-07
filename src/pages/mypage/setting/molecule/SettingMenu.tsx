import Typography from '@components/common/atom/Typography';

export default function SettingMenu() {
  const handleDelete = () => {
    console.log('탈퇴');
  };

  const link = [
    'https://peerna.notion.site/f04a7f6a06c64d81b6682e17c062d805',
    'https://peerna.notion.site/89daac4cb26342d5a4b6e3d660b22b5c',
    'https://peerna.notion.site/86e39990275648db952aeaf5197cbeba',
  ];

  const handleClick = (url: string) => {
    window.location.href = url;
  };

  const containerStyle = 'pt-[33px] pl-[28px] pb-[17px]';
  return (
    <ul className="w-full">
      <li className={containerStyle}>
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
    </ul>
  );
}
