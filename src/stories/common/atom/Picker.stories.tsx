import Picker from '@components/common/atom/Picker';
import { Meta, StoryObj } from '@storybook/react';
import SvgIcon from '@components/common/atom/SvgIcon';

const meta: Meta<typeof Picker> = {
  title: 'Picker',
  component: Picker,
};
export default meta;

type Story = StoryObj<typeof Picker>;

export const Default: Story = {
  args: {
    size: 'md',
    text: '좋은 리더',
    icon: <SvgIcon id="HeartedPerson" color="primary" />,
  },
};
