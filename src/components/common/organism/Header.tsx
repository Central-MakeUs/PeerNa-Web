import IconButton from '../atom/IconButton';
import Typography, { TypographyProps } from '../atom/Typography';

interface HeaderProps {
  showBackButton: boolean;
  title?: TypographyProps;
  showSearchButton: boolean;
  showAddButton: boolean;
  centerAlign: boolean;
  mainText: TypographyProps;
  subText?: TypographyProps;
}

const Header = ({
  showBackButton,
  title,
  showSearchButton,
  showAddButton,
  centerAlign,
  mainText,
  subText,
}: HeaderProps) => {
  const textAlign = centerAlign && 'text-center m-auto';
  const handleBack = () => {
    console.log('back');
  };

  return (
    <header className="max-w-[600px] m-auto">
      {showBackButton && (
        <section className="py-[22px] pl-5 flex">
          {showBackButton && (
            <IconButton
              iconProps={{
                id: 'ArrowLeft',
                color: 'gray07',
                width: 10.5,
                height: 20,
              }}
              onClick={handleBack}
            />
          )}
          {title && (
            <Typography variant="header02" className="m-auto">
              {title.children}
            </Typography>
          )}
        </section>
      )}
      <section className="px-5">
        <div className="flex items-center justify-between">
          <Typography
            as="h1"
            className={`${textAlign} mb-2`}
            variant={mainText.variant}
          >
            {mainText.children}
          </Typography>
          <div className="flex gap-2">
            {showAddButton && (
              <IconButton
                iconProps={{
                  id: 'AddPerson',
                  width: 25,
                  height: 25,
                }}
                color="gray07"
                onClick={handleBack}
              />
            )}
            {showSearchButton && (
              <IconButton
                onClick={handleBack}
                iconProps={{
                  id: 'Search',
                  width: 23,
                  height: 23,
                }}
              />
            )}
          </div>
        </div>
        {subText && (
          <Typography
            className={`${textAlign} text-gray06`}
            variant={subText.variant}
          >
            {subText.children}
          </Typography>
        )}
      </section>
    </header>
  );
};

export default Header;