import Badge from '@components/common/atom/Badge';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Badge> = {
  title: 'Badge',
  component: Badge,
};
export default meta;

type Story = StoryObj<typeof Badge>;

export const Default: Story = {
  args: {
    children: '마케터',
    type: 'default',
  },
};
