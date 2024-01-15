import Tooltip from '@components/common/atom/Tooltip';
import { Button } from '@nextui-org/react';
import { Meta, StoryObj } from '@storybook/react';

const TooltipWrapper = () => (
  <div>
    <Tooltip content="hello">
      <Button>여기에 마우스를 올려주세요</Button>
    </Tooltip>
  </div>
);

const meta: Meta<typeof Tooltip> = {
  title: 'Tooltip',
  component: TooltipWrapper,
};
export default meta;

type Story = StoryObj<typeof Tooltip>;

export const Default: Story = {
  args: {},
};
