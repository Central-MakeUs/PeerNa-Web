import Progress from '@components/common/molecule/Progress';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Progress> = {
  title: 'Progress',
  component: Progress,
};
export default meta;

type Story = StoryObj<typeof Progress>;

export const Default: Story = {
  args: {
    level: 1,
    step: 3,
  },
};
