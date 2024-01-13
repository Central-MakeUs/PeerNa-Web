import AvatarButton from '@components/common/atom/AvatarButton';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof AvatarButton> = {
  title: 'AvatarButton',
  component: AvatarButton,
};
export default meta;

type Story = StoryObj<typeof AvatarButton>;

export const Default: Story = {
  args: {
    type: 'default',
  },
};

export const Orange: Story = {
  args: {
    type: 'orange',
  },
};
