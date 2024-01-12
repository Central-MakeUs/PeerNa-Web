import Dropdown from '@components/common/molecule/Dropdown';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Dropdown> = {
  title: 'Dropdown',
  component: Dropdown,
};
export default meta;

type Story = StoryObj<typeof Dropdown>;

export const Default: Story = {
  args: {},
};
