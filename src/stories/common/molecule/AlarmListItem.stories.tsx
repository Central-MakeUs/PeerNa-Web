import AlarmListItem from '@components/common/molecule/AlarmListItem';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof AlarmListItem> = {
  title: 'AlarmListItem',
  component: AlarmListItem,
};
export default meta;

type Story = StoryObj<typeof AlarmListItem>;

export const Default: Story = {
  args: {
    title: '내 프로젝트를 만들어보세요!',
    subtitle: '원하는 동료들과 함께해요.',
  },
};
