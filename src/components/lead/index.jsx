import '../../styles/styles.scss';
import Info from '../info';

function Lead() {
  return (
    <>
      <section className='lead'>
        <div className='lead__glitch container'>
          <span className='lead__glitch-text lead__glitch-text--left'>
            junior frontend
          </span>
          <h1
            className='lead__glitch-text lead__glitch-text--hero lead__glitch-layers'
            data-text='diana ivashchenko'>
            <span>diana ivashchenko</span>
          </h1>
          <span className='lead__glitch-text lead__glitch-text--right'>developer</span>
        </div>
      </section>
      <Info />
    </>
  );
}

export default Lead;
