import Indicator from '@components/common/atom/Indicator';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Indicator> = {
  title: 'Indicator',
  component: Indicator,
};
export default meta;

type Story = StoryObj<typeof Indicator>;

export const Default: Story = {
  args: {
    level: 1,
  },
};
