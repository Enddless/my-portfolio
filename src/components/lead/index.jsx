import React from 'react';
import './styles.css';
import Skills from '../skills/index.jsx';

function Lead() {
  const scrollTo = () => {
    const target = document.querySelector('#content');
    target.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className='lead'>
      <div className='container__glitch '>
        junior frontend
        <div className='environment'></div>
        <h2 className='hero glitch layers' data-text='diana ivashchenko'>
          <span>diana ivashchenko</span>
        </h2>
        <span className='right'>developer</span>
      </div>

      <button onClick={scrollTo} className='flowtext scroll__button'>
        <p>Scroll down</p>
      </button>
    </section>
  );
}

export default Lead;
