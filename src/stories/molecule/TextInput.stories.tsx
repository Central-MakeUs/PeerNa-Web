import TextInput from '@components/common/molecule/TextInput';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof TextInput> = {
  title: 'TextInput',
  component: TextInput,
};
export default meta;

type Story = StoryObj<typeof TextInput>;

export const Default: Story = {
  args: {
    placeholder: '프로젝트 제목',
    text: '프로젝트',
  },
};
