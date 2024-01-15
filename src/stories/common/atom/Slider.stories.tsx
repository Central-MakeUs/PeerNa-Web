import Slider from '@components/common/atom/Slider';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Slider> = {
  title: 'Slider',
  component: Slider,
};
export default meta;

type Story = StoryObj<typeof Slider>;

export const Default: Story = {
  args: {},
};
