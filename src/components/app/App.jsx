import MainPage from '@pages/main-page/';
import Blob from '../blob';

// import NeonCursor from '../neon-cursor';

function App() {
  return (
    <div className='page__overlay'>
      <Blob />
      <MainPage />
      {/* <NeonCursor /> */}
    </div>
  );
}

export default App;
