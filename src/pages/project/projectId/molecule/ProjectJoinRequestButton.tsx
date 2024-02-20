import Button from '@components/common/atom/Button';
import useModal from '@hooks/store/useModal';

export default function ProjectJoinRequestButton() {
  const { openModal: openModalProjectAccept } = useModal('projectJoinRequest');

  const handleClick = () => {
    openModalProjectAccept();
  };

  return (
    <Button buttonVariant="primary" onClick={handleClick}>
      참가 신청하기
    </Button>
  );
}
