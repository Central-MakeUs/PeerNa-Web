import ProgressTrack from '@components/common/atom/ProgressTrack';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof ProgressTrack> = {
  title: 'ProgressTrack',
  component: ProgressTrack,
};
export default meta;

type Story = StoryObj<typeof ProgressTrack>;

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
