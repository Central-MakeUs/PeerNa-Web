import Typography, { TypographyProps } from '../atom/Typography';
import IconButton from '../atom/IconButton';

interface HeaderProps {
  showBackButton: boolean;
  showSearchButton: boolean;
  showAddButton: boolean;
  centerAlign: boolean;
  firstTypo: TypographyProps;
  secondTypo: TypographyProps;
  showSecondTypo: boolean;
}

const handleBack = () => {
  console.log('back');
};

const BackButton = () => (
  <section className="py-[22px] pl-5">
    <IconButton id="ArrowLeft" onClick={handleBack} />
  </section>
);

const Header = ({
  showBackButton,
  showSearchButton,
  showAddButton,
  centerAlign,
  firstTypo,
  secondTypo,
  showSecondTypo,
}: HeaderProps) => {
  const textAlign = centerAlign && 'text-center m-auto';

  return (
    <header className="max-w-[600px] m-auto">
      {showBackButton && <BackButton />}
      <section className="px-5">
        <div className="flex items-center justify-between">
          <Typography
            as="h1"
            className={`${textAlign} mb-2`}
            {...firstTypo}
          ></Typography>
          <div className="flex gap-2">
            {showAddButton && (
              <IconButton id="AddPerson" onClick={handleBack} />
            )}
            {showSearchButton && (
              <IconButton id="Search" onClick={handleBack} />
            )}
          </div>
        </div>
        {showSecondTypo && (
          <Typography className={`${textAlign}`} {...secondTypo}></Typography>
        )}
      </section>
    </header>
  );
};

export default Header;
