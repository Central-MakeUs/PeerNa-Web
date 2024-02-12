import Chip from '@components/common/atom/Chip';
import { Meta, StoryObj } from '@storybook/react';
import { TestType } from '@type/enums';

const meta: Meta<typeof Chip> = {
  title: 'Chip',
  component: Chip,
};
export default meta;

type Story = StoryObj<typeof Chip>;

export const Default: Story = {
  args: {
    children: '계획적',
    chipType: TestType.I,
  },
};
