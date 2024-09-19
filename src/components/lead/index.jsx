import Info from '../info';
import photo from '../../assets/images/photo1.jpg';

function Lead() {
  return (
    <>
      <section className='lead container'>
        <div className='lead__photo'>
          <img src={photo} alt='' width={452} loading='lazy' />
        </div>

        <div className='lead__body'>
          <div className='lead__glitch'>
            <span className='lead__glitch-text lead__glitch-text--left'>
              html-верстальщик
            </span>
            <h1
              className='lead__glitch-text lead__glitch-text--hero '
              data-text='diana ivashchenko'>
              <span>diana ivashchenko</span>
            </h1>
            <span className='lead__glitch-text lead__glitch-text--right'>
              junior frontend-developer
            </span>
          </div>

          <Info />
        </div>
      </section>
    </>
  );
}

export default Lead;
