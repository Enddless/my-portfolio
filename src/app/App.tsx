import { Blob } from '@widgets/blob';
import { ScrollToTop } from '@widgets/scroll-to-top';

import MainPage from '@/pages/main-page'; 

function App() {
  return (
    <div className='page__overlay'>
      <Blob />
      <MainPage />
      <ScrollToTop /> 
    </div>
  );
}

export default App;