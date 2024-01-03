import Typography from '@components/common/atom/Typography';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Typography> = {
  title: 'Typography',
  component: Typography,
};
export default meta;

type Story = StoryObj<typeof Typography>;

export const Primary: Story = {
  args: {
    variant: 'header01',
    text: '디자이너세요? Are you Designer?',
  },
};
