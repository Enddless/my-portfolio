import photo from 'public/images/photo1.jpg';
import Contacts from '../contacts';

function Info() {
  return (
    <section className='info' id='About'>
      <h2 className='visually-hidden'>About</h2>
      <div className='info__inner grid grid--3'>
        <div className='info__text'>
          <h2 className='info__text-item info__text-item--hero'>
            <p>
              Diana <br /> Ivashchenko
            </p>
          </h2>
        </div>

        <div className='info__photo'>
          <img src={photo} alt='' width={200} height={200} loading='lazy' />
        </div>

        <div className='info__text'>
          <p className='info__text-item'>html - верстальщик</p>
          <p className='info__text-item'>frontend - developer</p>
        </div>

        <Contacts />
      </div>
    </section>
  );
}

export default Info;
