import UnderlineTabs from '@components/common/molecule/UnderlineTabs';
import { Tab } from '@nextui-org/react';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof UnderlineTabs> = {
  title: 'UnderlineTabs',
  component: UnderlineTabs,
};
export default meta;

type Story = StoryObj<typeof UnderlineTabs>;

export const Default: Story = {
  args: {
    children: [
      <Tab key="One" title={<div>One</div>} />,
      <Tab key="Two" title={<div>Two</div>} />,
    ],
  },
};

export const ThreeTabs: Story = {
  args: {
    children: [
      <Tab key="One" title={<div>One</div>} />,
      <Tab key="Two" title={<div>Two</div>} />,
      <Tab key="Three" title={<div>Three</div>} />,
    ],
  },
};

export const FourTabs: Story = {
  args: {
    children: [
      <Tab key="One" title={<div>One</div>} />,
      <Tab key="Two" title={<div>Two</div>} />,
      <Tab key="Three" title={<div>Three</div>} />,
      <Tab key="Four" title={<div>Four</div>} />,
    ],
  },
};

export const FiveTabs: Story = {
  args: {
    children: [
      <Tab key="One" title={<div>One</div>} />,
      <Tab key="Two" title={<div>Two</div>} />,
      <Tab key="Three" title={<div>Three</div>} />,
      <Tab key="Four" title={<div>Four</div>} />,
      <Tab key="Five" title={<div>Five</div>} />,
    ],
  },
};
