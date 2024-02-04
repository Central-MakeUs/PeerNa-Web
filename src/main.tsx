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
    // TODO: mutation 에러에 대해서 핸들링 해야 합니다. toast를 띄우는 것을 고려하고 있습니다.
    mutations: {
      onError: undefined,
    },
  },
  // TODO: queries 에러에 대해서 핸들링 해야 합니다.
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
