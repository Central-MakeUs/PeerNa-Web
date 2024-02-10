import BottomNavigation from '@components/common/molecule/BottomNavigation';
import { Stack } from '@hooks/common/useStackFlow';
import { Meta, StoryObj } from '@storybook/react';

const Wrapper = () => (
  <div className="w-full relative h-[200px]">
    <BottomNavigation />
  </div>
);

const meta: Meta<typeof BottomNavigation> = {
  title: 'BottomNavigation',
  component: Wrapper,
  decorators: [
    () => (
      <div>
        <Stack />
      </div>
    ),
  ],
};
export default meta;

type Story = StoryObj<typeof BottomNavigation>;

export const Default: Story = {
  args: {},
};
