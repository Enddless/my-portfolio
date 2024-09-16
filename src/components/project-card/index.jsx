import Layout from '../layout-data/index.jsx';
import SwiperComponent from '../swiper/index.jsx';

function Card({ project }) {
  return (
    <>
      <div className='project__item-description'>
        <Layout data={project} />
      </div>

      <div className='project__item-photo'>
        <SwiperComponent
          images={project.images}
          videoSrc={project.video !== '' ? project.video : ''}
        />
      </div>
    </>
  );
}

export default Card;
