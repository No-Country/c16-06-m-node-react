import React from 'react';
import Slider from 'react-slick';
import data from '@/data/data';
import styles from './Carousel.module.css';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Carousel = () => {
  const selectedDocumentaries = data.filter(
    (documentary) => [25, 52, 37, 45, 33, 15].includes(documentary.id)
  );

  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,  // Agrega esta propiedad para habilitar el autoplay
    autoplaySpeed: 3000,  // Configura la velocidad de cambio en milisegundos (3 segundos en este ejemplo)
  };

  return (
    <div className={styles.carouselContainer}>
      <Slider {...carouselSettings}>
        {selectedDocumentaries.map((documentary) => (
          <div key={documentary.id} className={styles.carouselSlide}>
            {/* Contenido del slide */}
            <img src={documentary.image2} alt={documentary.title} />
            <div className={styles.carouselTextOverlay}>
              <h3>{documentary.nameOriginal}</h3>
              <p>{documentary.description}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
