import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './styles/styles.scss';
import App from './components/app/App.jsx';
import { Provider } from 'react-redux';
import { store } from './store/store.js';

import { onLCP, onINP, onCLS } from 'web-vitals';
import { ThemeContextProvider } from './context/index.jsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// Создание экземпляра QueryClient
const queryClient = new QueryClient();

// Вывод показателей
onCLS(console.log);
onINP(console.log);
onLCP(console.log);

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter basename='/my-portfolio'>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <React.StrictMode>
          <ThemeContextProvider>
            <App />
          </ThemeContextProvider>
        </React.StrictMode>
      </QueryClientProvider>
    </Provider>
  </BrowserRouter>
);
