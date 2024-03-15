import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './styles.css';
import App from './components/app/App.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter basename='/my-portfolio'>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>
);

