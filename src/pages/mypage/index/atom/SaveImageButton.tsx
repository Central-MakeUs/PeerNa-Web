import Button from '@components/common/atom/Button';
import SvgIcon from '@components/common/atom/SvgIcon';
import Typography from '@components/common/atom/Typography';

export default function SaveImageButton() {
  return (
    <Button buttonVariant="naked">
      <Typography variant="body01" fontColor="primary500">
        이미지 저장
      </Typography>
      <SvgIcon id="Save" color="primary" width={11.9} height={16} />
    </Button>
  );
}
