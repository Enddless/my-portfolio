import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './styles/styles.scss';
import App from './components/app/App.jsx';
// import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Provider } from 'react-redux';
import { store } from './store/store.js';

// const queryClient = new QueryClient();

import { onLCP, onINP, onCLS } from 'web-vitals';

onCLS(console.log);
onINP(console.log);
onLCP(console.log);

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter basename='/my-portfolio'>
    <Provider store={store}>
      <React.StrictMode>
        {/* <QueryClientProvider client={queryClient}> */}
        <App />
        {/* </QueryClientProvider> */}
      </React.StrictMode>
    </Provider>
  </BrowserRouter>
);
