import ProfileListItem from '@components/common/molecule/ProfileListItem';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof ProfileListItem> = {
  title: 'ProfileListItem',
  component: ProfileListItem,
};
export default meta;

type Story = StoryObj<typeof ProfileListItem>;

export const Default: Story = {
  args: {
    bezeled: 'Person',
    isGrayIcon: true,
    username: '홍서현',
    position: 'FE 개발자',
    information: '직장인 | 업무 적극성 57%',
    introduce: '한 줄 소개',
  },
};
