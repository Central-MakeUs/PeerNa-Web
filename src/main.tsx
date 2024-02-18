import '@constants/tailwind.storybook.ts';
import { NextUIProvider } from '@nextui-org/react';
import '@stackflow/plugin-basic-ui/index.css';
import {
  QueryCache,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { removeAccessToken, removeRefreshToken } from '@utils/token.ts';
import { AxiosError } from 'axios';
import ReactDOM from 'react-dom/client';
import toast from 'react-hot-toast';
import { RecoilRoot } from 'recoil';
import App from './App.tsx';
import './index.css';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
  queryCache: new QueryCache({
    onError: (error: Error | undefined) => {
      if (error instanceof AxiosError) {
        if (error.config?.url?.includes('new-token')) {
          removeAccessToken();
          removeRefreshToken();
          toast.error('다시 로그인 시도를 해주세요');
        }
      }
    },
  }),
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={queryClient}>
    <NextUIProvider>
      <RecoilRoot>
        <App />
        <ReactQueryDevtools initialIsOpen={false} />
      </RecoilRoot>
    </NextUIProvider>
  </QueryClientProvider>,
);
