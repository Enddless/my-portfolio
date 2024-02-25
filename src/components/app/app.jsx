import React from 'react';
import Header from '../header/index.jsx';
import Projects from '../projects/index.jsx';
import Components from '../components-block/index.jsx';
import Lead from '../lead/index.jsx';
import Contacts from '../contacts/index.jsx';
import './styles.css';
// import Skills from '../skills/index.jsx';

function App() {
  return (
    <div>
      <div className='lead__overlay'>
        <Header />
        <Lead />
      </div>
      <Projects />
      <Components />
      <Contacts />
      {/* <Skills /> */}
    </div>
  );
}

export default App;
