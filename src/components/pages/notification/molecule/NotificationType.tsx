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

export interface NotificationBase {
  display(push: PushFunction): JSX.Element;
}

export class ReviewRequestNotification implements NotificationBase {
  private readonly activity: ActivityTypes;
  private readonly params: Record<string, string>;
  private readonly title: string;
  private readonly subtitle: string;

  constructor(params: Record<string, string>, title: string, subtitle: string) {
    this.activity = 'ReviewPeerPage';
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
            <SvgIcon id="ColorLine" color="primary400" />
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
            buttonVariant="secondary"
            buttonSize="sm"
            onClick={() => push(this.activity, this.params)}
          >
            작성
          </Button>
        </div>
      </ListItemContainer>
    );
  }
}

export class ReviewUpdateNotification implements NotificationBase {
  private readonly activity: ActivityTypes;
  private readonly params: Record<string, string>;
  private readonly title: string;
  private readonly subtitle: string;

  constructor(params: Record<string, string>, title: string, subtitle: string) {
    this.activity = 'MyPage';
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
            <SvgIcon id="AlertFill" color="primary400" />
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
            확인
          </Button>
        </div>
      </ListItemContainer>
    );
  }
}
