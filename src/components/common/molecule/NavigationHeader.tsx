import IconButton from '@components/common/atom/IconButton';
import Typography from '@components/common/atom/Typography';

interface NavigationHeaderProps {
  backIconProps?: {
    isShow?: boolean;
    handleClick?: () => void;
  };
  rightButtonProps?: {
    isShow?: boolean;
    text?: string;
    handleClick?: () => void;
  };
  bodyProps?: {
    isShow?: boolean;
    title?: string;
    subtitle?: string;
    textAlign?: 'left' | 'center';
    showAddPerson?: boolean;
    showSearchButton?: boolean;
    handleClickAddPerson?: () => void;
    handleClickSearch?: () => void;
  };
}

export default function NavigationHeader({
  backIconProps = {},
  rightButtonProps = {},
  bodyProps = {},
}: NavigationHeaderProps) {
  return (
    <div className="box-borde flex flex-col bg-transparent">
      <div className="w-full flex items-center justify-between  h-[68px] px-2 py-[18px]">
        {backIconProps.isShow && backIconProps.handleClick && (
          <IconButton
            iconProps={{
              id: 'ArrowLeft',
              color: 'black',
            }}
            onClick={backIconProps.handleClick}
          />
        )}
        {!backIconProps.isShow && <div />}
        {rightButtonProps.isShow && (
          <button onClick={rightButtonProps.handleClick}>
            <Typography variant="body03" fontColor="gray07">
              {rightButtonProps.text}
            </Typography>
          </button>
        )}
      </div>
      {bodyProps.isShow && (
        <div className="w-full flex flex-col">
          <div className="w-full flex justify-between">
            {bodyProps.textAlign === 'center' && (
              <div className="w-1 h-1"></div>
            )}
            <Typography
              variant="header01"
              fontColor="gray08"
              className={
                bodyProps.textAlign === 'center' ? 'text-center' : 'text-left'
              }
            >
              {bodyProps.title}
            </Typography>
            {bodyProps.subtitle && (
              <Typography variant="body03">{bodyProps.subtitle}</Typography>
            )}
            <div className="flex gap-2">
              {bodyProps.showAddPerson && bodyProps.handleClickAddPerson && (
                <IconButton
                  iconProps={{
                    id: 'AddPerson',
                    width: 25,
                    height: 25,
                    color: 'gray07',
                  }}
                  onClick={bodyProps.handleClickAddPerson}
                />
              )}
              {bodyProps.showSearchButton && bodyProps.handleClickSearch && (
                <IconButton
                  iconProps={{
                    id: 'Search',
                    width: 23,
                    height: 23,
                    color: 'gray07',
                  }}
                  onClick={bodyProps.handleClickSearch}
                />
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
