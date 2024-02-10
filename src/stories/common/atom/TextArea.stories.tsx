import TextArea from '@components/common/atom/TextArea';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof TextArea> = {
  title: 'TextArea',
  component: TextArea,
  argTypes: {
    handleChangeText: { action: 'clicked' },
  },
};
export default meta;

type Story = StoryObj<typeof TextArea>;

export const Default: Story = {
  args: {
    placeholder: '프로젝트 제목',
    text: '프로젝트',
  },
};
