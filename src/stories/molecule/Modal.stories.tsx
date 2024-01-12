import ButtonContainer from '@components/common/molecule/ButtonContainer';
import Button from '@components/common/atom/Button';
import Modal from '@components/common/molecule/Modal';
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
          buttonVariant="tertiary"
          className="!w-[131px]"
          onClick={commonArgs.onClose}
        >
          아니요
        </Button>
        <Button className="!w-[131px]" onClick={commonArgs.onClose}>
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
        <Button className="!w-[270px]" onClick={commonArgs.onClose}>
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
          className="!w-[270px]"
          buttonVariant="tertiary"
          onClick={commonArgs.onClose}
        >
          아니요
        </Button>
        <Button className="!w-[270px]" onClick={commonArgs.onClose}>
          네
        </Button>
      </ButtonContainer>
    ),
  },
};
