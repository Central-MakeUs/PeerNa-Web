import Button from '@components/common/atom/Button';
import ButtonContainer from '@components/common/molecule/ButtonContainer';
import Modal from '@components/common/molecule/LegacyModal';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Modal> = {
  title: 'Modal',
  component: Modal,
};
export default meta;

type Story = StoryObj<typeof Modal>;

const commonArgs = {
  modalHeader: '프로젝트에 참가할까요?',
  modalBody: '프로젝트에 참가할까요?',
  onClose: () => {},
};

export const SubBtn: Story = {
  args: {
    isOpen: true,
    ...commonArgs,
    footer: (
      <ButtonContainer direction={'row'}>
        <Button
          className="flex-1"
          buttonVariant="tertiary"
          onClick={commonArgs.onClose}
        >
          아니요
        </Button>
        <Button className="flex-1" onClick={commonArgs.onClose}>
          네
        </Button>
      </ButtonContainer>
    ),
  },
};

export const OneBtn: Story = {
  args: {
    ...commonArgs,
    footer: (
      <ButtonContainer direction={'col'}>
        <Button className="flex-1 box-border" onClick={commonArgs.onClose}>
          네
        </Button>
      </ButtonContainer>
    ),
  },
};

export const TwoBtn: Story = {
  args: {
    ...commonArgs,
    footer: (
      <ButtonContainer direction={'col'}>
        <Button
          className="flex-1 box-border"
          buttonVariant="tertiary"
          onClick={commonArgs.onClose}
        >
          아니요
        </Button>
        <Button className="flex-1 box-border" onClick={commonArgs.onClose}>
          네
        </Button>
      </ButtonContainer>
    ),
  },
};
