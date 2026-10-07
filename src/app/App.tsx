import { Blob } from '@widgets/blob';

import MainPage from '@/pages/main-page';

function App() {
  return (
    <div className='page__overlay'>
      <Blob />
      <MainPage />
    </div>
  );
}

export default App;