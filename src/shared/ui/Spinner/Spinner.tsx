import './Spinner.scss';

function Spinner() {
  return (
    <div className='spinner'>
      <div className='spinner__box'>
        <div className='spinner__dot spinner__dot--1' />
        <div className='spinner__dot spinner__dot--2' />
        <div className='spinner__dot spinner__dot--3' />
        <div className='spinner__dot spinner__dot--4' />
        <div className='spinner__dot spinner__dot--5' />
        <div className='spinner__dot spinner__dot--6' />
      </div>
    </div>
  );
}

export default Spinner;