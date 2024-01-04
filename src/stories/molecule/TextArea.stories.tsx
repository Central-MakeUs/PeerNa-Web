import TextArea from '@components/common/molecule/TextArea';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof TextArea> = {
  title: 'TextArea',
  component: TextArea,
};
export default meta;

type Story = StoryObj<typeof TextArea>;

export const Default: Story = {
  args: {
    placeholder: '프로젝트 제목',
    text: '프로젝트',
  },
};
