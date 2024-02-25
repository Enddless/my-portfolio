import React from 'react';
import './styles.css';

function Robot() {
  return (
    <div className='robot__container'>
      <div className='robot__header'>
        <div className='robot__face'>
          <div className='robot__eye eye--left'></div>
          <div className='robot__eye eye--right'></div>
        </div>
        <div className='robot__body'></div>
      </div>
    </div>
  );
}

export default Robot;
