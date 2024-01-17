import Talk from '@components/common/atom/Talk';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Talk> = {
  title: 'Talk',
  component: Talk,
};
export default meta;

type Story = StoryObj<typeof Talk>;

export const Dimed: Story = {
  args: {
    type: 'dimed',
    children: '본인 셀프 PR 20자 미만 내용입니다.',
  },
};

export const Filled: Story = {
  args: {
    type: 'filled',
    children: '동료 피드백 20자 미만 내용입니다.',
  },
};
