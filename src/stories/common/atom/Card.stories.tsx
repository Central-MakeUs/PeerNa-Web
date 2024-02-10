import Card from '@components/pages/testResult/molecule/Card';
import { Description, Keyword, Value } from '@constants/image';
import { Meta, StoryObj } from '@storybook/react';

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
