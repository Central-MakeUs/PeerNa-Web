import { PageRoutes, Pages } from '@constants/activities';
import { Activity } from '@stackflow/core';
import { basicUIPlugin } from '@stackflow/plugin-basic-ui';
import { historySyncPlugin } from '@stackflow/plugin-history-sync';
import { basicRendererPlugin } from '@stackflow/plugin-renderer-basic';
import { StackflowReactPlugin, stackflow, useStack } from '@stackflow/react';
import { ReactNode, useState } from 'react';
import { Freeze } from 'react-freeze';

interface FreezeWrapperProps {
  freeze: boolean;
  children: ReactNode;
}

// eslint-disable-next-line react-refresh/only-export-components
function DelayedFreeze({ freeze, children }: FreezeWrapperProps) {
  const [freezeState, setFreezeState] = useState(false);
  const stack = useStack();

  if (freeze !== freezeState) {
    setTimeout(() => {
      setFreezeState(freeze);
    }, stack.transitionDuration);
  }

  return <Freeze freeze={freeze ? freezeState : false}>{children}</Freeze>;
}

const reactFreezePlugin: StackflowReactPlugin = () => ({
  key: 'react-freeze-plugin',
  wrapActivity({
    activity,
  }: {
    activity: Activity & {
      render: () => React.ReactNode;
    };
  }) {
    const shouldFreeze = !activity.isActive && !activity.isTop;
    return (
      <DelayedFreeze freeze={shouldFreeze}>{activity.render()}</DelayedFreeze>
    );
  },
});

export const { Stack, useFlow, useStepFlow } = stackflow({
  transitionDuration: 350,
  plugins: [
    basicUIPlugin({
      theme: 'cupertino',
    }),
    basicRendererPlugin(),
    historySyncPlugin({
      routes: {
        ...PageRoutes,
      },
      fallbackActivity: () => 'HomePage',
    }),
    reactFreezePlugin,
  ],
  activities: {
    ...Pages,
  },
});
