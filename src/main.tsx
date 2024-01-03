import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { DEVELOPMENT, MODE } from '@constants/environments.ts';
import { NextUIProvider } from '@nextui-org/react';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <NextUIProvider>
        {MODE === DEVELOPMENT && <ReactQueryDevtools initialIsOpen={false} />}
        <App />
      </NextUIProvider>
    </QueryClientProvider>
  </React.StrictMode>,
);
