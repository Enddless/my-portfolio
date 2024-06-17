import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './styles/styles.scss';
import App from './components/app/App.jsx';
import { Provider } from 'react-redux';
import { store } from './store/store.js';
import { DialogProvider } from './providers/PriceCardProvider.jsx';
import { PathProvider } from './providers/PathProvider.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter basename='/my-portfolio'>
    <Provider store={store}>
      <DialogProvider>
        <PathProvider>
          <React.StrictMode>
            <App />
          </React.StrictMode>
        </PathProvider>
      </DialogProvider>
    </Provider>
  </BrowserRouter>
);
