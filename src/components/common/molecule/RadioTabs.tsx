import { FontVariantsClassName } from '@constants/styles';
import { Tabs, TabsProps } from '@nextui-org/react';
import { ReactNode } from 'react';

interface RadioTabsProps extends TabsProps {
  children: ReactNode;
}

export default function RadioTabs({ children, ...props }: RadioTabsProps) {
  return (
    <Tabs
      {...props}
      aria-label="Options"
      color="primary"
      variant="solid"
      className="flex w-full justify-center"
      classNames={{
        tabList: 'bg-gray01',
        cursor: 'bg-white border-1',
        tab: '!w-[524px] !h-[48px]',
        tabContent: `${FontVariantsClassName.body03} text-gray04 group-data-[selected=true]:text-gray06`,
      }}
    >
      {children}
    </Tabs>
  );
}
