import SvgIcon from '@assets/SvgIcon';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof SvgIcon> = {
  title: 'SvgIcon',
  component: SvgIcon,
};
export default meta;

type Story = StoryObj<typeof SvgIcon>;

export const Default: Story = {
  args: {
    id: 'AddPerson',
    width: 24,
    height: 24,
    color: 'black',
  },
};
