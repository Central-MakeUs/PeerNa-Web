import KeywordCard from '@components/common/molecule/KeywordCard';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof KeywordCard> = {
  title: 'KeywordCard',
  component: KeywordCard,
};
export default meta;

type Story = StoryObj<typeof KeywordCard>;

export const Default: Story = {
  args: {
    title: '가치관',
    subtitle: '블ㄹ라블라 설명 ~하고 ~한 어쩌구 블ㄹ라블라 설명입니당.',
    keywords: ['계획적', '과정 지향', '직설적', '숲을 보는', '솔직한 피드백'],
  },
};

export const Empty: Story = {
  args: {
    title: '가치관',
    subtitle: '블ㄹ라블라 설명 ~하고 ~한 어쩌구 블ㄹ라블라 설명입니당.',
    keywords: [],
  },
};
