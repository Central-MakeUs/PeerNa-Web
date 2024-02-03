import IconButton from '@components/common/atom/IconButton';
import Typography from '@components/common/atom/Typography';
import { useFlow } from '@hooks/common/useStackFlow';

export default function Header() {
  const { push } = useFlow();
  const handleSetting = () => {
    push('SettingPage', {});
  };
  return (
    <header className="flex justify-between items-center pl-5 pr-3 pt-10 pb-4">
      <Typography variant="header01" as="h1" fontColor="white">
        마이페이지
      </Typography>
      <IconButton
        onClick={handleSetting}
        iconProps={{
          id: 'Menu',
          color: 'white',
        }}
      ></IconButton>
    </header>
  );
}
