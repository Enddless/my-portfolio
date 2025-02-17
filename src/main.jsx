import React from 'react';
import ReactDOM from 'react-dom/client';

import './styles/styles.scss';
import App from './components/app/App.jsx';
import { Provider } from 'react-redux';
import { store } from './store/store.js';

import { onLCP, onINP, onCLS } from 'web-vitals';
import { ThemeContextProvider } from './context/index.jsx';
import { BrowserRouter } from 'react-router-dom';
import { IdProjectContextProvider } from './context/id-project-click.jsx';

onCLS(console.log);
onINP(console.log);
onLCP(console.log);

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter basename='/my-portfolio'>
    <IdProjectContextProvider>
      <Provider store={store}>
        <React.StrictMode>
          <ThemeContextProvider>
            <App />
          </ThemeContextProvider>
        </React.StrictMode>
      </Provider>
    </IdProjectContextProvider>
  </BrowserRouter>
);
