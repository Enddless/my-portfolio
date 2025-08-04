import photo from 'public/images/photo1.jpg';
import Contacts from '../contacts';

function Info() {
  return (
    <div className='info'>
      <h2 className='visually-hidden'>About</h2>
      <div className='info__inner grid grid--3'>
        <div className='info__text'>
          <span className='info__text-item info__text-item--hero'>
            Diana <br /> Ivashchenko
          </span>
        </div>

        <div className='info__photo'>
          <img
            src={photo}
            alt='photo frontend dev Diana'
            width={200}
            height={200}
            loading='lazy'
          />
        </div>

        <div className='info__text'>
          <span className='info__text-item'>html - developer</span>
          <span className='info__text-item'>frontend - developer</span>
        </div>

        <Contacts />
      </div>
    </div>
  );
}

export default Info;
