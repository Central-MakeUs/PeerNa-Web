import { DEVELOPMENT, MODE } from '@constants/environments.ts';
import '@constants/trash.ts';
import { NextUIProvider } from '@nextui-org/react';
import '@stackflow/plugin-basic-ui/index.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { RecoilRoot } from 'recoil';
import App from './App.tsx';
import './index.css';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <NextUIProvider>
        <RecoilRoot>
          {MODE === DEVELOPMENT && <ReactQueryDevtools initialIsOpen={false} />}
          <App />
        </RecoilRoot>
      </NextUIProvider>
    </QueryClientProvider>
  </React.StrictMode>,
);
