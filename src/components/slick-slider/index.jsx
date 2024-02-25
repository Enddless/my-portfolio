import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './styles.css';
import Slider from 'react-slick';

const settings = {
  dots: true,
  arrows: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  // autoplay: true,
  autoplaySpeed: 4000
};

function Galery({ images }) {
  return (
    <Slider {...settings} className='slider'>
      {images.map((img) => {
        return <img src={img.url} key={img.idImage} alt='Projects 1' />;
      })}
    </Slider>
  );
}

export default Galery;
