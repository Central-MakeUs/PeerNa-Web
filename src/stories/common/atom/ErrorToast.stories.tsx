import ErrorToast from '@components/common/atom/ErrorToast';
import { Meta, StoryObj } from '@storybook/react';
import Typography from '@components/common/atom/Typography';

const meta: Meta<typeof ErrorToast> = {
  title: 'ErrorToast',
  component: ErrorToast,
};
export default meta;

type Story = StoryObj<typeof ErrorToast>;

export const Default: Story = {
  args: {
    children: (
      <Typography variant="body04">네트워크가 원활하지 않아요.</Typography>
    ),
  },
};
