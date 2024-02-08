import Button from '@components/common/atom/Button';
import useModal from '@hooks/store/useModal';
import { getAccessToken } from '@utils/token';

export default function AcceptButton() {
  const { openModal: openModalLogin } = useModal('login');
  const { openModal: openModalProjectAccept } = useModal('projectAccept');
  const handleClick = () => {
    if (!getAccessToken()) openModalLogin();
    openModalProjectAccept();
  };

  return <Button onClick={handleClick}>수락</Button>;
}
