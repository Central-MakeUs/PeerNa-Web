import Dropdown from '@components/common/atom/Dropdown';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Dropdown> = {
  title: 'Dropdown',
  component: Dropdown,
};
export default meta;

type Story = StoryObj<typeof Dropdown>;

export const Default: Story = {
  args: {
    values: ['직업이요', '직업이에요', '직업'],
  },
};
