import '@constants/trash.ts';
import { NextUIProvider } from '@nextui-org/react';
import '@stackflow/plugin-basic-ui/index.css';
import {
  QueryCache,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { RecoilRoot } from 'recoil';
import App from './App.tsx';
import './index.css';

const queryClient = new QueryClient({
  defaultOptions: {
    // TODO: mutation 에러에 대해서 핸들링 해야 합니다. toast를 띄우는 것을 고려하고 있습니다.
    mutations: {
      onError: error => console.log(error),
    },
  },
  // TODO: queries 에러에 대해서 핸들링 해야 합니다.
  queryCache: new QueryCache({
    onError: (error, query) => {
      if (query.meta && query.meta.errorMessage) {
        console.error('error message', query.meta.errorMessage);
        // toast(() => query.meta.errorMessage);
      }
    },
  }),
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <NextUIProvider>
        <RecoilRoot>
          <App />
          <ReactQueryDevtools initialIsOpen={false} />
        </RecoilRoot>
      </NextUIProvider>
    </QueryClientProvider>
  </React.StrictMode>,
);
