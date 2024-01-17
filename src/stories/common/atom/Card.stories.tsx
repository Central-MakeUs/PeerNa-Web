import Card from '@components/common/atom/Card';
import { Meta, StoryObj } from '@storybook/react';
import { Value, Keyword, Description } from '@constants/image';

const meta: Meta<typeof Card> = {
  title: 'Card',
  component: Card,
};
export default meta;

type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    type: 'CardPurple',
    value: Value.CardPurple,
    keyword: Keyword.CardPurple,
    description: Description.CardPurple,
  },
};

export const Orange: Story = {
  args: {
    type: 'CardOrange',
    value: Value.CardOrange,
    keyword: Keyword.CardOrange,
    description: Description.CardOrange,
  },
};

export const Pink: Story = {
  args: {
    type: 'CardPink',
    value: Value.CardPink,
    keyword: Keyword.CardPink,
    description: Description.CardPink,
  },
};

export const Yellow: Story = {
  args: {
    type: 'CardYellow',
    value: Value.CardYellow,
    keyword: Keyword.CardYellow,
    description: Description.CardYellow,
  },
};
