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
      <Title text='diana ivashchenko' />
      <Title text='junior frontend developer' />
      <Skills />
      <p onClick={scrollTo} className='scroll__button'>
        Scroll down
      </p>
    </section>
  );
}

export default Lead;
