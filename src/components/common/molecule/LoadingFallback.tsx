import Typography from '@components/common/atom/Typography';
import { Spinner } from '@nextui-org/spinner';

export default function LoadingFallback() {
  return (
    <div className="w-full py-12 flex flex-col justify-center items-center gap-4">
      <Spinner size="lg" />
      <Typography variant="header03" className="text-center">
        잠시만 기다려주세요.
      </Typography>
    </div>
  );
}
