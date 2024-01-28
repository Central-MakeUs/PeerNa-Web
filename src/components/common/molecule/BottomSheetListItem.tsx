import Typography from '@components/common/atom/Typography';

interface BottomSheetListItemProps {
  title: string;
  subtitle?: string;
  // TODO) BottonSheet 클릭 동작 파악시 타입 수정
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onClick: any;
}

export default function BottomSheetListItem({
  title,
  subtitle,
  onClick,
}: BottomSheetListItemProps) {
  return (
    <div
      className={`w-full max-w-[350px] z-20 h-[40px] flex items-center py-3 box-content cursor-pointer ${subtitle ? 'gap-3' : ''}`}
      onClick={onClick}
    >
      <Typography variant="body01">{title}</Typography>
      {subtitle && (
        <Typography variant="caption01" className="!font-normal text-gray06">
          {subtitle}
        </Typography>
      )}
    </div>
  );
}
