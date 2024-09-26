import Layout from '../layout-data/index.jsx';
import SwiperComponent from '../swiper/index.jsx';

function Card({ project, isLazy }) {
  return (
    <>
      <div className='project__item-description'>
        <Layout data={project} />
      </div>

      <div className='project__item-photo'>
        <SwiperComponent project={project} isLazy={isLazy} />
      </div>
    </>
  );
}

export default Card;
