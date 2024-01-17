import Toaster from '@components/common/atom/Toaster';
import { Meta, StoryObj } from '@storybook/react';
import Typography from '@components/common/atom/Typography';

const meta: Meta<typeof Toaster> = {
  title: 'Toaster',
  component: Toaster,
};
export default meta;

type Story = StoryObj<typeof Toaster>;

export const Default: Story = {
  args: {
    children: <Typography variant="body04">링크 공유 완료!</Typography>,
  },
};
