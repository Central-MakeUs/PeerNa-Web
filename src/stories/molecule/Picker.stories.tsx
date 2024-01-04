import Picker from '@components/common/molecule/Picker';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Picker> = {
  title: 'Picker',
  component: Picker,
};
export default meta;

type Story = StoryObj<typeof Picker>;

export const Default: Story = {
  args: {
    variant: 'l',
    text: '좋은 리더',
  },
};
