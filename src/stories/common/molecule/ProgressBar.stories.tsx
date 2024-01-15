import ProgressBar from '@components/common/molecule/ProgressBar';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof ProgressBar> = {
  title: 'ProgressBar',
  component: ProgressBar,
};
export default meta;

type Story = StoryObj<typeof ProgressBar>;

export const Default: Story = {
  args: {
    step: 3,
    trackStep: 1,
  },
};
