import Typography from '@components/common/atom/Typography';

export default function EmptyData() {
  return (
    <div>
      <Typography variant="body01" fontColor="gray06">
        데이터가 존재하지 않습니다. :(
      </Typography>
    </div>
  );
}
