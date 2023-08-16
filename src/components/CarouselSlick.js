import React from 'react';
import Slider from 'react-slick';

const CarouselSlick = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div>
      {/* <h2>Carousel Example</h2> */}
      <Slider {...settings}>
        <div className="slick-slide">
          <img src="./img/hero-carousel/Top-Gun-Maverick.jpeg" alt="Top Gun Maverick" />
        </div>
        <div className="slick-slide">
          <img src="./img/hero-carousel/secrets-of-dumbledore.jpg" alt="Secrets of Dumbledore" />
        </div>
        <div className="slick-slide">
          <img src="./img/hero-carousel/the-banshees-of-inisherin.jpg" alt="The Banshees of Inisherin" />
        </div>
        {/* Add more slides as needed */}
      </Slider>
    </div>
  );
};

export default CarouselSlick;