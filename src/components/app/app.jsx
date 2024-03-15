import React from 'react';
import './styles.css';
import { Route, Routes } from 'react-router-dom';
import MainPage from '../../pages/main-page/index.jsx';
import DetailPage from '../../pages/detail-page/index.jsx';

function App() {
  return (
    <Routes>
      <Route path='/' element={<MainPage />} />
      <Route path='/project/:id' element={<DetailPage />} />
    </Routes>
  );
}

export default App;
