import Card from '@pages/review/result/molecule/Card';
import { Meta, StoryObj } from '@storybook/react';
import { ResultKeyword } from '@type/enums';

const meta: Meta<typeof Card> = {
  title: 'Card',
  component: Card,
};
export default meta;

type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    type: ResultKeyword.ANALYTICAL,
  },
};

export const Orange: Story = {
  args: {
    type: ResultKeyword.CAUTIOUS,
  },
};

export const Pink: Story = {
  args: {
    type: ResultKeyword.CHALLENGING,
  },
};

export const Yellow: Story = {
  args: {
    type: ResultKeyword.COMPREHENSIVE,
  },
};
