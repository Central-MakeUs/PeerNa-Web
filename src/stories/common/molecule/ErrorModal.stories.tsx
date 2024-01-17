import ButtonContainer from '@components/common/molecule/ButtonContainer';
import Button from '@components/common/atom/Button';
import ErrorModal from '@components/common/molecule/ErrorModal';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof ErrorModal> = {
  title: 'ErrorModal',
  component: ErrorModal,
};
export default meta;

const commonArgs = {
  modalHeader: '네트워크 문제',
  modalBody: (
    <>
      네트워크 연결이 원활하지 않아요.
      <br />
      네트워크를 확인해주세요.
    </>
  ),
  onClose: () => {},
};

type Story = StoryObj<typeof ErrorModal>;

export const Default: Story = {
  args: {
    isOpen: true,
    ...commonArgs,
    footer: (
      <ButtonContainer direction={'row'}>
        <Button
          className="flex-1"
          buttonVariant="error"
          onClick={commonArgs.onClose}
        >
          닫기
        </Button>
      </ButtonContainer>
    ),
  },
};
