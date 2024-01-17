import Picker from '@components/common/atom/Picker';
import { Meta, StoryObj } from '@storybook/react';
import SvgIcon from '@components/common/atom/SvgIcon';
import Typography from '@components/common/atom/Typography';

const meta: Meta<typeof Picker> = {
  title: 'Picker',
  component: Picker,
};
export default meta;

type Story = StoryObj<typeof Picker>;

export const Default: Story = {
  args: {
    size: 'md',
    children: <Typography variant="header03">좋은 리더</Typography>,
  },
};

export const Small: Story = {
  args: {
    size: 'sm',
    children: (
      <>
        <SvgIcon id="HeartedPerson" color="primary" width={24} height={24} />
        <Typography variant="header03">좋은 리더</Typography>
      </>
    ),
  },
};
