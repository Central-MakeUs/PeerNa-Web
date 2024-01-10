import ProgressStep from '@components/common/atom/ProgressStep';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof ProgressStep> = {
  title: 'ProgressStep',
  component: ProgressStep,
};
export default meta;

type Story = StoryObj<typeof ProgressStep>;

export const Default: Story = {
  args: {
    level: 1,
  },
};
