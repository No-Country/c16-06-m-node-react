import React from 'react';
import Slider from 'react-slick';
import data from '@/data/data';
import styles from './Carousel.module.css';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Button from '../Button/Button';

const Carousel = () => {
  const selectedDocumentaries = data.filter(
    (documentary) => [52, 31, 43, 39, 34, 29, 25, 8, 6, 1].includes(documentary.id)
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
              <Button className="btn3">Ver ahora</Button>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
