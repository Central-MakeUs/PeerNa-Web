import Button from '@components/common/atom/Button';
import SvgIcon from '@components/common/atom/SvgIcon';
import Typography from '@components/common/atom/Typography';
import ListItemContainer from '@components/wrapper/ListItemContainer';
import { ActivityTypes } from '@constants/activities';
import { Palette } from '@constants/styles';

type PushFunction = (
  activity: ActivityTypes,
  params: Record<string, string>,
) => void;

export interface ProjectBase {
  display(push?: PushFunction): JSX.Element;
}

export class ProjectRecruitPropose implements ProjectBase {
  private readonly activity: ActivityTypes;
  private readonly params: Record<string, string>;
  private readonly title: string;
  private readonly subtitle: string;

  constructor(params: Record<string, string>, title: string, subtitle: string) {
    this.activity = 'ProjectDetailPage';
    this.params = params;
    this.title = title;
    this.subtitle = subtitle;
  }

  display(push: PushFunction) {
    return (
      <ListItemContainer>
        <div className="flex gap-3">
          <div
            className={`w-[24px] h-[24px] p-3 box-content rounded-full bg-primary200`}
          >
            <SvgIcon id="DocumentText" color="primary400" />
          </div>
          <div className="flex flex-col gap-1">
            <Typography variant="body01">{this.title}</Typography>
            <Typography
              variant="body05"
              className={`text-[${Palette.gray05}] text-left`}
            >
              {this.subtitle}
            </Typography>
          </div>
        </div>
        <div>
          <Button
            buttonVariant="tertiary"
            buttonSize="sm"
            onClick={() => push(this.activity, this.params)}
          >
            자세히
          </Button>
        </div>
      </ListItemContainer>
    );
  }
}

export class ProjectProposeResult implements ProjectBase {
  private readonly type: 'accept' | 'reject';
  private readonly title: string;
  private readonly subtitle: string;

  constructor(type: 'accept' | 'reject', title: string, subtitle: string) {
    this.type = type;
    this.title = title;
    this.subtitle = subtitle;
  }

  display() {
    return (
      <ListItemContainer>
        <div className="flex gap-3">
          <div
            className={`w-[24px] h-[24px] p-3 box-content rounded-full bg-primary200`}
          >
            <SvgIcon
              id={this.type === 'accept' ? 'Person' : 'AlertFill'}
              color="primary400"
            />
          </div>
          <div className="flex flex-col gap-1">
            <Typography variant="body01">{this.title}</Typography>
            <Typography
              variant="body05"
              className={`text-[${Palette.gray05}] text-left`}
            >
              {this.subtitle}
            </Typography>
          </div>
        </div>
      </ListItemContainer>
    );
  }
}
