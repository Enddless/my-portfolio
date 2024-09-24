import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './styles.css';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Spinner from '../spinner';

function SwiperComponent({ images, alt, sources }) {
  if (!images || !sources) {
    return <Spinner />;
  }
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      // autoplay={{
      //   delay: 2500,
      //   disableOnInteraction: false
      // }}
      pagination={{
        clickable: true
      }}
      navigation={false}
      modules={[Autoplay, Pagination, Navigation]}
      className='mySwiper'>
      {images.map((image, index) => {
        return (
          <SwiperSlide key={index}>
            <picture>
              <source srcSet={sources[index]} type='image/webp' />
              <img
                src={image}
                alt={alt}
                width={927}
                height={425}
                loading='lazy'
                // decoding='sync'
              />
            </picture>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}

export default SwiperComponent;
