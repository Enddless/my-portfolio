import React from 'react';
import './styles.css';
import Title from '../title/index.jsx';

function Components() {
  return (
    <section className='wrapper' id='components'>
      <div className='title__container'>
        <Title text='Components' />
      </div>
      <section className='components__container'>Components</section>
    </section>
  );
}

export default Components;
