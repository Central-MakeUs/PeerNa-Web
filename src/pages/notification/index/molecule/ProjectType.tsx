import Button from '@components/common/atom/Button';
import SvgIcon from '@components/common/atom/SvgIcon';
import Typography from '@components/common/atom/Typography';
import ListItemContainer from '@components/wrapper/ListItemContainer';
import { ActivityTypes } from '@constants/activities';
import { NoticeType } from '@type/enums';

export type PushFunction<K extends string> = (
  activityName: K,
  params: Record<string, string>,
  options?:
    | {
        animate?: boolean | undefined;
      }
    | undefined,
) => {
  activityId: string;
};

export interface ProjectBase {
  display(push?: PushFunction<string>): JSX.Element;
}

export class ProjectRecruitPropose implements ProjectBase {
  private readonly activity: ActivityTypes;
  private readonly params: Record<string, string>;
  private readonly title: string;
  private readonly subtitle: string;
  private readonly readFlag: boolean;

  constructor(
    params: Record<string, string>,
    title: string,
    subtitle: string,
    readFlag: boolean,
  ) {
    this.activity = 'ProjectProposePage';
    this.params = params;
    this.title = title;
    this.subtitle = subtitle;
    this.readFlag = readFlag;
  }

  display(push: PushFunction<string>) {
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
            <div className="flex flex-row gap-1">
              <Typography
                variant="body05"
                fontColor="gray05"
                className="text-left"
              >
                {this.subtitle}
              </Typography>
              <Typography
                variant="body05"
                fontColor="gray05"
                className="text-left"
              >
                {this.readFlag ? '읽음' : '읽지않음'}
              </Typography>
            </div>
          </div>
        </div>
        <div>
          <Button
            buttonVariant="tertiary"
            buttonSize="sm"
            onClick={() => push(this.activity as string, this.params)}
          >
            <Typography variant="body03" fontColor="gray08">
              자세히
            </Typography>
          </Button>
        </div>
      </ListItemContainer>
    );
  }
}

export class ProjectProposeResult implements ProjectBase {
  private readonly type: NoticeType;
  private readonly title: string;
  private readonly subtitle: string;
  private readonly readFlag: boolean;

  constructor(
    type: NoticeType,
    title: string,
    subtitle: string,
    readFlag: boolean,
  ) {
    this.type = type;
    this.title = title;
    this.subtitle = subtitle;
    this.readFlag = readFlag;
  }

  display() {
    return (
      <ListItemContainer>
        <div className="flex gap-3">
          <div
            className={`w-[24px] h-[24px] p-3 box-content rounded-full bg-primary200`}
          >
            <SvgIcon
              id={
                this.type === 'ACCEPT_PROJECT_INVITATION'
                  ? 'Person'
                  : 'AlertFill'
              }
              color="primary400"
            />
          </div>
          <div className="flex flex-col gap-1">
            <Typography variant="body01">{this.title}</Typography>
            <div className="flex flex-row gap-1">
              <Typography
                variant="body05"
                fontColor="gray05"
                className="text-left"
              >
                {this.subtitle}
              </Typography>
              <Typography
                variant="body05"
                fontColor="gray05"
                className="text-left"
              >
                {this.readFlag ? '읽음' : '읽지않음'}
              </Typography>
            </div>
          </div>
        </div>
      </ListItemContainer>
    );
  }
}
