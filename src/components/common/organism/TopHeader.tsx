import IconButton from '@components/common/atom/IconButton';
import Typography from '@components/common/atom/Typography';

interface TopHeaderProps {
  title: string;
  onClick: () => void;
}

export default function TopHeader({ title, onClick }: TopHeaderProps) {
  return (
    <header className="w-full py-[20px]">
      <div className="flex px-[20px]">
        <IconButton
          iconProps={{
            id: 'ArrowLeft',
            color: 'gray07',
            width: 10.5,
            height: 20,
          }}
          onClick={onClick}
        />
        {title && (
          <Typography variant="header02" className="w-full text-center">
            {title}
          </Typography>
        )}
      </div>
    </header>
  );
}
