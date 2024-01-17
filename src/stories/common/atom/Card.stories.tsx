import Card from '@components/common/atom/Card';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Card> = {
  title: 'Card',
  component: Card,
};
export default meta;

type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    cardItem: {
      value: '가치관',
      keyword: '추진하는',
      description:
        '추진력 있는 모습으로 팀을 이끌어갈 분이군요! 고민보다 GO! 실행력은 좋은 결과를 만들어내죠.',
    },
  },
};
