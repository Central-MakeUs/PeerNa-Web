import Button from '@components/common/atom/Button';
import useModal from '@hooks/store/useModal';

export default function JoinRequestDeclineButton() {
  const { openModal: openModalProjectDecline } = useModal('projectJoinDecline');

  const handleClick = () => {
    openModalProjectDecline();
  };

  return (
    <Button buttonVariant="tertiary" onClick={handleClick}>
      거절
    </Button>
  );
}
