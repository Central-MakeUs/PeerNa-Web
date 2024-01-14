import FullBleed from '@components/common/atom/FullBleed';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof FullBleed> = {
  title: 'FullBleed',
  component: FullBleed,
};
export default meta;

type Story = StoryObj<typeof FullBleed>;

export const Default: Story = {
  args: {},
};
