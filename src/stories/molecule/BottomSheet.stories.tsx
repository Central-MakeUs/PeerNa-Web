import BottomSheet from '@components/common/molecule/BottomSheet';
import { bottomSheetState } from '@store/bottomSheet';
import { Meta, StoryObj } from '@storybook/react';
import { useSetRecoilState } from 'recoil';

const Wrapper = () => {
  const setOpen = useSetRecoilState(bottomSheetState);
  setOpen(true);
  return (
    <div className="bg-white w-screen h-screen">
      <BottomSheet />
    </div>
  );
};

const meta: Meta<typeof BottomSheet> = {
  title: 'BottomSheet',
  component: Wrapper,
};
export default meta;

type Story = StoryObj<typeof BottomSheet>;

export const Default: Story = {
  args: {},
};
