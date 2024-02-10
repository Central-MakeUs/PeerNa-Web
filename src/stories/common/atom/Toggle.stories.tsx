import Toggle from '@components/common/atom/Toggle';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Toggle> = {
  title: 'Toggle',
  component: Toggle,
};
export default meta;

type Story = StoryObj<typeof Toggle>;

export const Default: Story = {
  args: {},
};
