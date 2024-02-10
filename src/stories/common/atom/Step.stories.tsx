import Step from '@components/common/atom/Step';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Step> = {
  title: 'Step',
  component: Step,
};
export default meta;

type Story = StoryObj<typeof Step>;

export const Default: Story = {
  args: {
    children: '1',
  },
};
