import RadioTabs from '@components/common/molecule/RadioTabs';
import { Tab } from '@nextui-org/react';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof RadioTabs> = {
  title: 'RadioTabs',
  component: RadioTabs,
};
export default meta;

type Story = StoryObj<typeof RadioTabs>;

export const Default: Story = {
  args: {
    children: [
      <Tab key="me" title="나와 비교하기" />,
      <Tab key="peer" title="동료 자세히보기" />,
    ],
  },
};
