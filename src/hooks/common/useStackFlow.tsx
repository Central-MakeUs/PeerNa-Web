import { PageRoutes, Pages } from '@constants/activities';
import { basicUIPlugin } from '@stackflow/plugin-basic-ui';
import { historySyncPlugin } from '@stackflow/plugin-history-sync';
import { basicRendererPlugin } from '@stackflow/plugin-renderer-basic';

import { stackflow } from '@stackflow/react';

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
  ],
  activities: {
    ...Pages,
  },
});
