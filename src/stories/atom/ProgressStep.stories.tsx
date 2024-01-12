import ProgressStep from '@components/common/atom/ProgressStep';
import { Meta, StoryObj } from '@storybook/react';
import SvgIcon from '@assets/SvgIcon';

const meta: Meta<typeof ProgressStep> = {
  title: 'ProgressStep',
  component: ProgressStep,
};
export default meta;

type Story = StoryObj<typeof ProgressStep>;

export const Default: Story = {
  args: {
    name: '3',
    step: 2,
  },
};

export const Complete: Story = {
  args: {
    icon: <SvgIcon id="Check" />,
    step: 2,
  },
};
