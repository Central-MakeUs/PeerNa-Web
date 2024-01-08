import Button from '@components/common/atom/Button';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Button> = {
  title: 'Button',
  component: Button,
};
export default meta;

type Story = StoryObj<typeof Button>;

const commonArgs = {
  children: '참가',
  ButtonSize: 'lg',
  isDisabled: false,
};

export const Default: Story = {
  args: {
    buttonVariant: 'primary',
    ...commonArgs,
  },
};

export const Secondary: Story = {
  args: {
    buttonVariant: 'secondary',
    ...commonArgs,
  },
};

export const Tertiary: Story = {
  args: {
    buttonVariant: 'tertiary',
    ...commonArgs,
  },
};

export const Naked: Story = {
  args: {
    buttonVariant: 'naked',
    ...commonArgs,
  },
};
