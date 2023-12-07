import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Router from './router/Router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import SideBarContextProvider from './context/SideBarContext';



const queryClient = new QueryClient()

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
   
        <Router />
     
    </QueryClientProvider>
  </React.StrictMode>
);

