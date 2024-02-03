import SvgIcon from '@components/common/atom/SvgIcon';
import Typography from '@components/common/atom/Typography';

export default function EmptyNotification() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-4">
      <SvgIcon id="DocumentSplitHint" width={64} height={64} />
      <Typography variant="body01" fontColor="gray04">
        아직 알림이 없어요
      </Typography>
    </div>
  );
}
