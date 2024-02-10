import BottomSheet from '@components/common/organism/BottomSheet';
import { bottomSheetState } from '@store/bottomSheet';
import { Meta, StoryObj } from '@storybook/react';
import { useSetRecoilState } from 'recoil';

const Wrapper = () => {
  const setOpen = useSetRecoilState(bottomSheetState);
  setOpen(() => ({
    isOpen: true,
    contents: [
      { title: '대학생', onClick: undefined },
      { title: '직장인', subtitle: '바쁘다 바빠 현대사회', onClick: undefined },
    ],
  }));

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
