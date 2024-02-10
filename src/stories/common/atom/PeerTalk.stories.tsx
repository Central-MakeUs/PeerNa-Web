import PeerTalk from '@components/common/atom/PeerTalk';
import SvgIcon from '@components/common/atom/SvgIcon';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof PeerTalk> = {
  title: 'PeerTalk',
  component: PeerTalk,
};
export default meta;

type Story = StoryObj<typeof PeerTalk>;

export const Dimed: Story = {
  args: {
    count: 24,
    icon: (
      <SvgIcon
        id="HeartedPerson"
        color="primary"
        width={20.99}
        height={20.99}
      />
    ),
    children: '이보다 완벽할 수는 없어요 최고의 동료에요!',
  },
};
