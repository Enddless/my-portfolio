import React from 'react';
import './styles.css';
import Title from '../title/index.jsx';
import Skills from '../skills/index.jsx';

function Lead() {
  const scrollTo = () => {
    const target = document.querySelector('#content');
    target.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className='lead'>
      {/* <Title text='diana ivashchenko' />
      <Title text='junior frontend developer' /> */}
      <div className='container__glitch'>
        frontend
        <div className='stack' style={{ '--stacks': 3 }}>
          <span style={{ '--index': 0 }}>diana ivashchenko</span>
          <span style={{ '--index': 1 }}>diana ivashchenko</span>
          <span style={{ '--index': 2 }}>diana ivashchenko</span>
        </div>
        <span className='right'>developer</span>
      </div>

      <Skills />
      <button onClick={scrollTo} className='flowtext scroll__button'>
        <p>Scroll down</p>
      </button>
    </section>
  );
}

export default Lead;
