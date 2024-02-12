import SvgIcon from '@components/common/atom/SvgIcon';
import Typography from '@components/common/atom/Typography';

type NoKeywordCardProps = {
  title: string;
  subtitle: string;
};

export default function NoKeywordCard({ title, subtitle }: NoKeywordCardProps) {
  return (
    <>
      <div className="w-full border-1 rounded-xl py-[24px] px-[20px]">
        <div className="flex flex-col gap-1">
          <Typography variant="header03">{title}</Typography>
          <Typography variant="body05" fontColor="gray05" className="mb-6">
            {subtitle}
          </Typography>
        </div>
        <div
          className="w-full min-h-[80px] bg-gray01 py-[14px] px-[58px] flex flex-col gap-1 mx-auto
         items-center rounded-xl"
        >
          <SvgIcon id="LockClosed" width={28} height={28} color="gray04" />
          <Typography variant="body04" fontColor="gray04">
            평판이 3개 이상이어야 볼 수 있어요.
          </Typography>
        </div>
      </div>
    </>
  );
}
