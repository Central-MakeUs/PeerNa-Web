import Button from '@components/common/atom/Button';
import SvgIcon from '@components/common/atom/SvgIcon';
import Typography from '@components/common/atom/Typography';
import ListItemContainer from '@components/wrapper/ListItemContainer';
import { Palette } from '@constants/styles';
import { PushFunction } from '@pages/notification/index/molecule/ProjectType';

export interface NotificationBase {
  display(push: PushFunction<string>): JSX.Element;
}

export class ReviewRequestNotification implements NotificationBase {
  private readonly activity: string;
  private readonly params: Record<string, string>;
  private readonly title: string;
  private readonly subtitle: string;
  private readonly readFlag: boolean;
  private readonly doneFlag: boolean;

  constructor(
    params: Record<string, string>,
    title: string,
    subtitle: string,
    readFlag: boolean,
    doneFlag: boolean,
  ) {
    this.activity = 'ReviewPeerPage';
    this.params = params;
    this.title = title;
    this.subtitle = subtitle;
    this.readFlag = readFlag;
    this.doneFlag = doneFlag;
  }

  display(push: PushFunction<string>) {
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
            <div className="flex flex-row gap-1">
              <Typography
                variant="body05"
                className={`text-[${Palette.gray05}] text-left`}
              >
                {this.subtitle}
              </Typography>
              <Typography
                variant="body05"
                className={`text-[${Palette.gray05}] text-left`}
              >
                {this.readFlag ? '읽음' : '읽지않음'}
              </Typography>
            </div>
          </div>
        </div>
        <div>
          <Button
            isDisabled={this.doneFlag}
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
  private readonly activity: string;
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
    this.activity = 'MyPage';
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
            <SvgIcon id="AlertFill" color="primary400" />
          </div>
          <div className="flex flex-col gap-1">
            <Typography variant="body01">{this.title}</Typography>
            <div className="flex flex-row gap-1">
              <Typography
                variant="body05"
                className={`text-[${Palette.gray05}] text-left`}
              >
                {this.subtitle}
              </Typography>
              <Typography
                variant="body05"
                className={`text-[${Palette.gray05}] text-left`}
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
            onClick={() => push(this.activity, this.params)}
          >
            확인
          </Button>
        </div>
      </ListItemContainer>
    );
  }
}
