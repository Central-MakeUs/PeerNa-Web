import Chip from '@components/common/atom/Chip';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Chip> = {
  title: 'Chip',
  component: Chip,
};
export default meta;

type Story = StoryObj<typeof Chip>;

export const Default: Story = {
  args: {
    children: '계획적',
    type: 'I',
  },
};
