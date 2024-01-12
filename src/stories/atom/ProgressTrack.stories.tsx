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
    trackStep: 1,
    barSize: 'short',
    order: 1,
  },
};

export const Disabled: Story = {
  args: {
    isDisabled: true,
  },
};

export const Large: Story = {
  args: {
    trackStep: 1,
    barSize: 'long',
    order: 1,
  },
};
