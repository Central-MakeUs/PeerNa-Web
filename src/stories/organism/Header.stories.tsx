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
    showBackButton: false,
    showSearchButton: false,
    showAddButton: false,
    centerAlign: false,
    mainText: {
      variant: 'header01',
      children: '00님이 평가한 00님은 이런 동료에요',
    },
    subText: {
      variant: 'header02',
      children: '00님이 평가한 00님은 이런 동료에요',
    },
  },
};
