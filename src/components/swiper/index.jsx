import { useEffect, useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import Spinner from '../spinner';

function SwiperComponent({ project }) {
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const swiperRef = useRef(null); // Ссылка на Swiper

  const handleImageLoad = () => {
    setImagesLoaded(true);
  };

  useEffect(() => {
    if (swiperRef.current && imagesLoaded) {
      swiperRef.current.swiper.autoplay.start(); // Запускаем autoplay
    }
  }, [imagesLoaded]);

  if (!project) {
    return <Spinner />;
  }

  return (
    <Swiper
      ref={swiperRef}
      spaceBetween={30}
      centeredSlides={true}
      autoplay={
        imagesLoaded
          ? {
              delay: 2500,
              disableOnInteraction: false
            }
          : false
      }
      pagination={{
        clickable: true
      }}
      navigation={false}
      modules={[Autoplay, Pagination]}
      className='mySwiper'>
      {project.images.map((image, index) => {
        return (
          <SwiperSlide key={index}>
            <picture>
              <source srcSet={project.sources[index]} type='image/webp' />
              <img
                src={image}
                alt={project.alt}
                width={927}
                height={425}
                onLoad={handleImageLoad} // Обработчик загрузки
                decoding='async'
              />
            </picture>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}

export default SwiperComponent;
