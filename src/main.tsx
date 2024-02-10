import '@constants/tailwind.storybook.ts';
import { NextUIProvider } from '@nextui-org/react';
import '@stackflow/plugin-basic-ui/index.css';
import {
  QueryCache,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import ReactDOM from 'react-dom/client';
import toast from 'react-hot-toast';
import { RecoilRoot } from 'recoil';
import App from './App.tsx';
import './index.css';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
  queryCache: new QueryCache({
    onError: (error: Error | undefined) => {
      console.log(error);
      toast.error('네트워크 에러가 발생했어요.');
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
