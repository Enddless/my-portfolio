import Info from '../info';

function Lead() {
  return (
    <section className='section lead container'>
      <svg
        viewBox='0 0 200 200'
        xmlns='http://www.w3.org/2000/svg'
        className='animate-accent-point'>
        <path
          d='M28.5,-52.5C37.8,-44.1,46.7,-38.1,47.6,-29.8C48.5,-21.4,41.4,-10.7,36.5,-2.8C31.6,5.1,29,10.2,28.7,19.5C28.4,28.9,30.5,42.6,26,45.1C21.6,47.6,10.8,38.9,5,30.3C-0.9,21.7,-1.8,13.2,-16,16.4C-30.2,19.5,-57.8,34.4,-71.5,33.6C-85.2,32.9,-85,16.4,-79.7,3.1C-74.4,-10.3,-64,-20.7,-51.7,-23.8C-39.4,-26.9,-25.1,-22.8,-16.1,-31.4C-7.2,-40.1,-3.6,-61.4,3,-66.6C9.6,-71.9,19.3,-61,28.5,-52.5Z'
          transform='translate(100 100)'
          className='animation-fill'></path>
      </svg>
      <div className='lead__title'>
        <h1>Portfolio</h1>
      </div>

      <Info />
    </section>
  );
}

export default Lead;
