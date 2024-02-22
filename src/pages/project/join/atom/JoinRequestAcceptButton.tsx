import Button from '@components/common/atom/Button';
import useModal from '@hooks/store/useModal';

export default function JoinRequestAcceptButton() {
  const { openModal: openModalProjectAccept } = useModal('projectJoinAccept');

  const handleClick = () => {
    openModalProjectAccept();
  };

  return (
    <Button buttonVariant="primary" onClick={handleClick}>
      수락
    </Button>
  );
}
