import MainPage from '@pages/main-page/';
import NeonCursor from '../neon-cursor';

function App() {
  return (
    <div className='page__overlay'>
      <MainPage />
      <NeonCursor />
    </div>
  );
}

export default App;
