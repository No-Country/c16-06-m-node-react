import React from "react";
import Slider from "react-slick";
import Link from "next/link";
import data from "@/data/data";
import styles from "./Carousel.module.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Button from "../Button/Button";
import Image from "next/image";

const Carousel = () => {
  const selectedDocumentaries = data.filter((documentary) =>
    [52, 31, 43, 39, 34, 29, 25, 8, 6, 1].includes(documentary.id)
  );

  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className={styles.carouselContainer}>
      <Slider {...carouselSettings}>
        {selectedDocumentaries.map((documentary) => (
          <div key={documentary.id} className={styles.carouselSlide}>
            <Link href="/[id]" as={`/${documentary.id}`}>
              <Image
                src={documentary.image2}
                alt={documentary.title}
                width={1440}
                height={560}
              />
            </Link>
            <div className={styles.carouselTextOverlay}>
              <h3>{documentary.nameOriginal}</h3>
              <p>{documentary.description}</p>

              <Link href="/[id]" as={`/${documentary.id}`}>
                <Button className="btn3">Ver ahora</Button>
              </Link>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
