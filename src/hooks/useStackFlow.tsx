import { Activities } from '@constants/activities';
import { historySyncPlugin } from '@stackflow/plugin-history-sync';
import { webRendererPlugin } from '@stackflow/plugin-renderer-web';
import { stackflow } from '@stackflow/react';

export const { Stack, useFlow, useStepFlow } = stackflow({
  transitionDuration: 350,
  plugins: [
    webRendererPlugin(),
    historySyncPlugin({
      routes: {
        HomePage: '/',
        PeerPage: '/peer',
        ProjectPage: '/project',
        NotificationPage: '/notification',
        MyPage: '/mypage',
      },
      fallbackActivity: () => 'HomePage',
    }),
  ],
  activities: {
    ...Activities,
  },
});
