import Button from '@components/common/atom/Button';
import ButtonContainer from '@components/common/molecule/ButtonContainer';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof ButtonContainer> = {
  title: 'StickyButton',
  component: ButtonContainer,
};
export default meta;

type Story = StoryObj<typeof ButtonContainer>;

export const Default: Story = {
  args: {
    children: (
      <>
        <Button className="flex-1">OneBtn</Button>
      </>
    ),
  },
};

export const Naked: Story = {
  args: {
    children: (
      <>
        <Button buttonVariant="naked" className="flex-1">
          OneBtn
        </Button>
      </>
    ),
  },
};

export const TwoBtn: Story = {
  args: {
    children: (
      <>
        <Button buttonVariant="tertiary" className="flex-1">
          OneBtn
        </Button>
        <Button className="flex-1">TwoBtn</Button>
      </>
    ),
  },
};

export const StackBtn: Story = {
  args: {
    direction: 'col',
    children: (
      <>
        <Button buttonVariant="tertiary" className="w-full">
          OneBtn
        </Button>
        <Button className="w-full">TwoBtn</Button>
      </>
    ),
  },
};
