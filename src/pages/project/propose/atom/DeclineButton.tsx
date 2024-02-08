import Button from '@components/common/atom/Button';
import useModal from '@hooks/store/useModal';
import { getAccessToken } from '@utils/token';

export default function DeclineButton() {
  const { openModal: openModalLogin } = useModal('login');
  const { openModal: openModalProjectDecline } = useModal('projectDecline');
  const handleClick = () => {
    if (!getAccessToken()) openModalLogin();
    openModalProjectDecline();
  };

  return (
    <Button buttonVariant="tertiary" onClick={handleClick}>
      거절
    </Button>
  );
}
