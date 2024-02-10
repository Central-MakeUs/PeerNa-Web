import Button from '@components/common/atom/Button';
import SvgIcon from '@components/common/atom/SvgIcon';
import Typography from './Typography';

interface FullBleedProps {
  type: 'showMore' | 'fold';
  onClick: () => void;
}

export default function FullBleed({ type, onClick }: FullBleedProps) {
  return (
    <div className="border-t-1 border-[#E2E6E8] flex justify-center">
      <Button buttonVariant="naked" onClick={onClick} className="w-[390px]">
        {type === 'showMore' ? (
          <>
            <Typography
              as="span"
              variant={'body05'}
              fontColor="gray08"
              className="mr-1"
            >
              더보기
            </Typography>
            <SvgIcon id="ArrowRight" width={6.5} height={12} color="gray07" />
          </>
        ) : (
          <>
            <Typography
              as="span"
              variant="body05"
              fontColor="gray08"
              className="mr-1"
            >
              접기
            </Typography>
            <SvgIcon id="ArrowUp" width={12} height={6.5} color="gray07" />
          </>
        )}
      </Button>
    </div>
  );
}
