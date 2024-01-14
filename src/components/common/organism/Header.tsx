import IconButton from '../atom/IconButton';
import Typography from '../atom/Typography';

interface HeaderProps {
  showBackButton: boolean;
  title?: string;
  showSearchButton: boolean;
  showAddButton: boolean;
  centerAlign: boolean;
  mainText: string;
  subText?: string;
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
  const handleBack = () => {
    console.log('Back button clicked');
  };

  return (
    <header className="max-w-[600px] mx-auto">
      {showBackButton && (
        <section className="py-[22px] pl-5 flex items-center">
          <IconButton
            iconProps={{
              id: 'ArrowLeft',
              color: 'gray07',
              width: 10.5,
              height: 20,
            }}
            onClick={handleBack}
          />
          {title && (
            <Typography
              variant="header02"
              className={`ml-auto ${centerAlign ? 'text-center' : ''}`}
            >
              {title}
            </Typography>
          )}
        </section>
      )}
      <section className="px-5">
        <div
          className={`flex items-center justify-between ${centerAlign ? 'text-center' : ''}`}
        >
          <Typography as="h1" className="mb-2" variant="header01">
            {mainText}
          </Typography>
          <div className="flex gap-2">
            {showAddButton && (
              <IconButton
                iconProps={{
                  id: 'AddPerson',
                  width: 25,
                  height: 25,
                  color: 'gray07',
                }}
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
            className={`text-gray06 ${centerAlign ? 'text-center' : ''}`}
            variant="body02"
          >
            {subText}
          </Typography>
        )}
      </section>
    </header>
  );
};

export default Header;
