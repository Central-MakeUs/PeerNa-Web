import Button from '@components/common/atom/Button';
import SvgIcon from '@components/common/atom/SvgIcon';
import Typography from '@components/common/atom/Typography';
import ButtonContainer from '@components/common/molecule/ButtonContainer';
import ProjectListItem from '@components/common/molecule/ProjectListItem';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof ProjectListItem> = {
  title: 'ProjectListItem',
  component: ProjectListItem,
};
export default meta;

type Story = StoryObj<typeof ProjectListItem>;

export const Default: Story = {
  args: {
    title: '프로젝트 제목',
    subtitle: '프로젝트 한 줄 설명',
    buttons: (
      <ButtonContainer direction="row">
        <Button
          buttonVariant="tertiary"
          className="!w-[24px] !h-[20px] !px-5 !py-2.5 flex-1 !min-w-max"
        >
          <Typography variant="body03">거절</Typography>
        </Button>
        <Button
          buttonVariant="secondary"
          className="!w-[24px] !h-[20px] !px-5 !py-2.5 flex-1 !min-w-max"
        >
          <Typography variant="body03" fontColor="white">
            참여
          </Typography>
        </Button>
      </ButtonContainer>
    ),
  },
};

export const Onebtn: Story = {
  args: {
    title: '프로젝트 제목',
    subtitle: '프로젝트 한 줄 설명',
    buttons: (
      <Button
        buttonVariant="naked"
        className="!w-[72px] !h-[20px] !px-5 !py-2.5 flex-1 !min-w-max"
      >
        <Typography variant="body03" fontColor="white">
          거절
        </Typography>
        <SvgIcon id="IOSChevronRight" width={20} height={20} color="danger01" />
      </Button>
    ),
  },
};
