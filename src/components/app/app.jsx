import React, { useEffect } from 'react';
import Header from '../header/index.jsx';
import Projects from '../projects/index.jsx';
import Components from '../components-block/index.jsx';
import Lead from '../lead/index.jsx';
import Contacts from '../contacts/index.jsx';
import './styles.css';

function App() {
  // useEffect(() => {
  //   const cursorHalo = document.createElement('div');
  //   cursorHalo.classList.add('cursor-halo');
  //   document.body.appendChild(cursorHalo);

  //   document.addEventListener('mousemove', (e) => {
  //     const x = e.clientX;
  //     const y = e.clientY;
  //     cursorHalo.style.left = `${x}px`;
  //     cursorHalo.style.top = `${y}px`;
  //     cursorHalo.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(34, 34, 59, 0.5), rgba(32, 83, 179, 0.702))`;
  //   });

  //   return () => {
  //     document.body.removeChild(cursorHalo);
  //   };
  // }, []);
  return (
    <div>
      <div className='lead__overlay'>
        <Header />
        <Lead />
      </div>
      <div className='main__content'>
        <Projects />
        <Components />
        <Contacts />
      </div>
    </div>
  );
}

export default App;
