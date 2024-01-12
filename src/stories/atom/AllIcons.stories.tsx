import SvgIcon from '@assets/SvgIcon';
import Typography from '@components/common/atom/Typography';
import { Icon } from '@constants/icons';
import { Meta, StoryObj } from '@storybook/react';

const AllIcons = () => {
  return (
    <div className="flex flex-wrap gap-2">
      {Object.keys(Icon).map(iconKey => (
        <div className="w-[80px] flex flex-col items-center justify-center">
          <SvgIcon
            key={iconKey}
            id={iconKey as keyof typeof Icon}
            color="secondary-orange"
          />
          <Typography variant="caption01">{iconKey}</Typography>
        </div>
      ))}
    </div>
  );
};

const meta: Meta<typeof AllIcons> = {
  title: 'AllIcons',
  component: AllIcons,
};
export default meta;

type Story = StoryObj<typeof AllIcons>;

export const Default: Story = {
  args: {},
};
