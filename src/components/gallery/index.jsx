import { useContext, useRef } from 'react';
import { IdProjectContext } from '../../context/id-project-click';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards, Pagination } from 'swiper/modules';
import Spinner from '../spinner';

function Gallery({ projectsList, closeModal }) {
  const { idProject } = useContext(IdProjectContext);
  const findProject = projectsList.find((item) => item.id === idProject);

  const swiperRef = useRef(null);

  if (!findProject) {
    return <Spinner />;
  }

  return (
    <>
      <form className='mobile-overlay__close-button-wrapper' method='dialog'>
        <button
          className='mobile-overlay__close-button cross-button'
          type='submit'
          onClick={closeModal}>
          <span className='visually-hidden'>Close navigation menu</span>
        </button>
      </form>

      {findProject && (
        <Swiper
          ref={swiperRef}
          effect={'cards'}
          grabCursor={true}
          modules={[EffectCards, Pagination]}
          pagination={{
            clickable: true
          }}
          navigation={false}
          className='mySwiper'>
          {findProject.images.map((image, index) => {
            return (
              <SwiperSlide key={index}>
                <picture>
                  <source srcSet={findProject.sources[index]} type='image/webp' />
                  <img
                    className='projects__item-photo'
                    src={image}
                    alt={`это ${image}-${index}`}
                    loading='lazy'
                    decoding='async'
                  />
                </picture>
              </SwiperSlide>
            );
          })}
        </Swiper>
      )}
    </>
  );
}

export default Gallery;
