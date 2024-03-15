import './App.css';
import { Route, Routes } from 'react-router-dom';
import MainPage from '../../pages/main-page/';
import DetailPage from '../../pages/detail-page/';

function App() {
  return (
    <Routes>
      <Route path='/' element={<MainPage />} />
      <Route path='/project/:id' element={<DetailPage />} />
    </Routes>
  );
}

export default App;

