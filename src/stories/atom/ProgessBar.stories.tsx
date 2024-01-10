import ProgressBar from '@components/common/atom/ProgressBar';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof ProgressBar> = {
  title: 'ProgressBar',
  component: ProgressBar,
};
export default meta;

type Story = StoryObj<typeof ProgressBar>;

export const Default: Story = {
  args: {
    step: 1,
    barSize: 'short',
  },
};

export const Disabled: Story = {
  args: {
    isDisabled: true,
  },
};

export const Large: Story = {
  args: {
    step: 1,
    barSize: 'long',
  },
};
