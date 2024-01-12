import Project from '@components/common/molecule/Project';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Project> = {
  title: 'Project',
  component: Project,
};
export default meta;

type Story = StoryObj<typeof Project>;

export const Default: Story = {
  args: {
    title: '프로젝트 제목',
    subtitle:
      'ㅍ설명글입니다. 설명글입니다. 설명글입니다. 설설명글입니다. 설명글입니다. 설명글입니다. 설',
    date: '2023.12.20 ~ 2023.12.31',
  },
};
