import Button from '@components/common/atom/Button';
import RequestListItem from '@components/common/atom/RequestListItem';
import Typography from '@components/common/atom/Typography';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof RequestListItem> = {
  title: 'RequestListItem',
  component: RequestListItem,
};
export default meta;

type Story = StoryObj<typeof RequestListItem>;

export const Default: Story = {
  args: {
    bezeled: 'AlertFill',
    title: '000님이 평판 작성을 요청했어요.',
    subtitle: '1분 전',
    button: (
      <Button
        buttonVariant="secondary"
        className="!w-[24px] !h-[20px] !px-5 !py-2.5 flex-1 !min-w-min"
      >
        <Typography variant="body03">작성</Typography>
      </Button>
    ),
  },
};
