import Typography from '@components/common/atom/Typography';
import useFocusTimeout from '@hooks/common/useFocusTimeout';

interface ProjectProps {
  title: string;
  subtitle: string;
  date: string;
  handleClick?: () => void;
}

export default function Project({
  title,
  subtitle,
  date,
  handleClick,
}: ProjectProps) {
  const { isFocused, handleFocus } = useFocusTimeout();

  const onClick = () => {
    handleFocus();
    if (handleClick) {
      handleClick();
    }
  };

  return (
    <div
      className={`w-full p-5 bg-gray01 flex gap-3 cursor-pointer rounded-xl border-1 transition-colors ${
        isFocused ? 'bg-primary100 border-primary500' : null
      }`}
      onClick={onClick}
    >
      {/* <div>
        <SvgIcon id="GroupPerson" color="white" width={52} height={52} />
      </div> */}
      <div className="w-[calc(100%-52px)] flex flex-col gap-1">
        <Typography variant="header03">{title}</Typography>
        <Typography
          variant="body01"
          fontColor="gray06"
          className={`w-full overflow-hidden text-ellipsis whitespace-nowrap`}
        >
          {subtitle}
        </Typography>
        <Typography variant="body03" fontColor="gray04">
          {date}
        </Typography>
      </div>
    </div>
  );
}
