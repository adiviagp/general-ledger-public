import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { NextUIProvider } from '@nextui-org/react';
import { RouterProvider } from 'react-router-dom';
import Router from './Router.tsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { queryClient } from './utils/reactQuery.ts';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { create } from 'zustand';
import moment from 'moment';

export const useDateStore = create((set) => ({
  date: {
    startDate: new Date(),
    endDate: new Date(),
  },
  setDate: (date: any) => set(() => ({ date: date })),
  count: 1,
  inc: () => set((state: any) => ({ count: state.count + 1 })),
}));

export const useUangMuka = create((set) => ({
  startDate: moment().format('YYYY-MM-DD'),
  endDate: moment().format('YYYY-MM-DD'),

  setStartDate: (date: any) => set(() => ({ startDate: date })),
  setEndDate: (date: any) => set(() => ({ endDate: date })),
}));

export const usePengguna = create((set) => ({
  pengguna: {
    username: '',
    hakAkses: '',
  },
  setPengguna: (data: any) => set(() => ({ pengguna: data })),
}));

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <NextUIProvider>
        <ToastContainer />
        <RouterProvider router={Router} />
      </NextUIProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </React.StrictMode>
);
