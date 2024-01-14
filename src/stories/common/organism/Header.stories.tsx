import Header from '@components/common/organism/Header';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Header> = {
  title: 'Header',
  component: Header,
};
export default meta;

type Story = StoryObj<typeof Header>;

export const Default: Story = {
  args: {
    showBackButton: true,
    title: '프로젝트',
    showSearchButton: false,
    showAddButton: false,
    centerAlign: false,
    mainText: '00님이 평가한 00님은 이런 동료에요',
    subText: '00님이 평가한 00님은 이런 동료에요',
  },
};
