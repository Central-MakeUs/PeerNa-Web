import IconButton from '@components/common/atom/IconButton';
import Typography from '@components/common/atom/Typography';
import React from 'react';

function NavigationHeader({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full box-border flex flex-col bg-transparent">
      {children}
    </div>
  );
}

interface BackIconProps {
  handleClick: () => void;
}
function NavigationHeaderBackIcon({ handleClick }: BackIconProps) {
  return (
    <IconButton
      iconProps={{
        id: 'ArrowLeft',
        color: 'black',
      }}
      onClick={handleClick}
    />
  );
}

interface TitleProps {
  title: string;
}
function NavigationHeaderTitle({ title }: TitleProps) {
  return (
    <Typography variant="header02" fontColor="gray08">
      {title}
    </Typography>
  );
}

interface RightButtonProps {
  text: string;
  handleClick: () => void;
}
function NavigationHeaderRightButton({ text, handleClick }: RightButtonProps) {
  return (
    <button onClick={handleClick}>
      <Typography variant="body03" fontColor="gray07">
        {text}
      </Typography>
    </button>
  );
}

interface BodyProps {
  title: string;
  subtitle?: string;
  marginClass?: string;
  textAlign?: 'left' | 'center';
  children?: React.ReactNode;
}
function NavigationHeaderBody({
  title,
  subtitle,
  marginClass = '',
  textAlign = 'left',
  children,
}: BodyProps) {
  return (
    <div className={`w-full flex flex-col ${marginClass}`}>
      <div
        className={`w-full flex flex-col gap-2 justify-between py-4 ${textAlign === 'center' ? 'text-center' : 'text-left'}`}
      >
        <Typography variant="header01" fontColor="gray08">
          {title}
        </Typography>
        {subtitle && <Typography variant="body03">{subtitle}</Typography>}
        <div className="flex gap-2">{children}</div>
      </div>
    </div>
  );
}

interface AddPersonButtonProps {
  onClick: () => void;
}
function NavigationHeaderAddPersonButton({ onClick }: AddPersonButtonProps) {
  return (
    <IconButton
      iconProps={{
        id: 'AddPerson',
        width: 25,
        height: 25,
        color: 'gray07',
      }}
      onClick={onClick}
    />
  );
}

interface SearchButtonProps {
  onClick: () => void;
}
function NavigationHeaderSearchButton({ onClick }: SearchButtonProps) {
  return (
    <IconButton
      iconProps={{
        id: 'Search',
        width: 23,
        height: 23,
        color: 'gray07',
      }}
      onClick={onClick}
    />
  );
}

NavigationHeader.BackIcon = NavigationHeaderBackIcon;
NavigationHeader.Title = NavigationHeaderTitle;
NavigationHeader.RightButton = NavigationHeaderRightButton;
NavigationHeader.Body = NavigationHeaderBody;
NavigationHeader.AddPersonButton = NavigationHeaderAddPersonButton;
NavigationHeader.SearchButton = NavigationHeaderSearchButton;

export default NavigationHeader;
