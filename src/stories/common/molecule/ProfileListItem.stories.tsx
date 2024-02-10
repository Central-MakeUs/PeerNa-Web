import ProfileListItem from '@components/common/molecule/ProfileListItem';
import { Meta, StoryObj } from '@storybook/react';
import { JobType, PartType } from '@type/enums';

const meta: Meta<typeof ProfileListItem> = {
  title: 'ProfileListItem',
  component: ProfileListItem,
};
export default meta;

type Story = StoryObj<typeof ProfileListItem>;

export const Default: Story = {
  args: {
    isMyProfile: true,
    name: '홍서현',
    part: PartType.FRONT_END,
    job: JobType.ENTREPRENEUR,
    oneLiner: '한 줄 소개',
  },
};
