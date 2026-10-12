import React from 'react';

import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { onLCP, onINP, onCLS } from 'web-vitals';

import './styles/styles.scss';

import App from './App';
import { ColorSchemeProvider } from './providers/ColorSchemeProvider';
import { store } from './store';

onCLS(console.log);
onINP(console.log);
onLCP(console.log);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter basename='/my-portfolio'>
    <Provider store={store}>
      <React.StrictMode>
        <ColorSchemeProvider>
          <App />
        </ColorSchemeProvider>
      </React.StrictMode>
    </Provider>
  </BrowserRouter>
);