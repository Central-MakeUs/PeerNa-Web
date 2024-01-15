import { FontVariantsClassName } from '@constants/styles';
import { Tabs, TabsProps } from '@nextui-org/react';
import { ReactNode } from 'react';

interface UnderlineTabsProps extends TabsProps {
  children: ReactNode;
}

export default function UnderlineTabs({
  children,
  ...props
}: UnderlineTabsProps) {
  return (
    <Tabs
      {...props}
      aria-label="Options"
      color="primary"
      variant="underlined"
      className="flex w-full"
      classNames={{
        tabList:
          'gap-6 w-full relative rounded-none p-0 border-b border-divider',
        cursor: 'w-full bg-[#67737E]',
        tab: 'px-0 h-12',
        tabContent: `${FontVariantsClassName.body01} text-gray04 group-data-[selected=true]:text-gray08`,
      }}
    >
      {children}
    </Tabs>
  );
}
