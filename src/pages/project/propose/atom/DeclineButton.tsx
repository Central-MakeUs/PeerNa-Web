import Button from '@components/common/atom/Button';
import useHistory from '@hooks/common/useHistory';
import useModal from '@hooks/store/useModal';
import { useActivity } from '@stackflow/react';
import { getAccessToken } from '@utils/token';

export default function DeclineButton() {
  const history = useHistory();
  const { params } = useActivity();
  const { openModal: openModalLogin } = useModal('login');
  const { openModal: openModalProjectDecline } = useModal('projectDecline');

  const handleClick = () => {
    if (!getAccessToken()) {
      history.handleChangeHistory('ProjectProposePage', {
        id: params.id!,
        step: '2',
      });
      openModalLogin();
    }
    openModalProjectDecline();
  };

  return (
    <Button buttonVariant="tertiary" onClick={handleClick}>
      거절
    </Button>
  );
}
