import Button from '@components/common/atom/Button';
import SvgIcon from '@components/common/atom/SvgIcon';
import Typography from './Typography';

export default function FullBleed() {
  const handleClick = () => {
    console.log('클릭');
  };

  return (
    <div className="w-[390px] border-t-1 border-[#E2E6E8] flex justify-center">
      <Button buttonVariant="naked" onClick={handleClick} className="w-[390px]">
        <Typography
          as="span"
          variant={'body05'}
          fontColor="gray08"
          className="mr-1"
        >
          더보기
        </Typography>
        <SvgIcon id="ArrowRight" width={6} height={12} color="gray07" />
      </Button>
    </div>
  );
}
