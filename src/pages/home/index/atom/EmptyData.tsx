import Typography from '@components/common/atom/Typography';

export default function EmptyData() {
  return (
    <div className="p-6 text-center">
      <Typography variant="body01" fontColor="gray04">
        데이터가 존재하지 않습니다. :(
      </Typography>
    </div>
  );
}
