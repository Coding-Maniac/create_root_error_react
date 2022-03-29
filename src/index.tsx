import './index.css';

import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';
/**
 * Root file of the application
 * Entry point for React
 * */
import { createRoot } from 'react-dom/client';
import { QueryClient, QueryClientProvider } from 'react-query';

import App from './App';
import baseTheme from './theme/baseTheme';

const container = document.getElementById('root');
const root = createRoot(container);

const queryClient = new QueryClient();

root.render(
  <React.StrictMode>
    <ChakraProvider theme={baseTheme}>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </ChakraProvider>
  </React.StrictMode>,
);
