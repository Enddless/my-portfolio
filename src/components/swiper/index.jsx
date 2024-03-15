import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './styles.css';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

function SwiperComponent({ images }) {
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false
      }}
      pagination={{
        clickable: true
      }}
      navigation={false}
      modules={[Autoplay, Pagination, Navigation]}
      className='mySwiper'>
      {images.map((image) => {
        return (
          <SwiperSlide key={image.idImage}>
            <img src={image.url} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}

export default SwiperComponent;
