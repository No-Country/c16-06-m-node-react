'use client'
import React, { useState } from 'react';
import { useParams } from 'next/navigation';
import ReactPlayer from 'react-player';
import Trailer from '../Trailer/Trailer';
import Recommendations from '../Recommendations/Recommendations';
import StarRatings from 'react-star-ratings'; // Importa la biblioteca

import data from '@/data/data';
import styles from './detailPage.module.css';
import Rating from '../Rating/Rating';

const DocumentaryDetailPage = () => {
  const { id } = useParams();
  const [userRating, setUserRating] = useState(0);
const [showReviews, setShowReviews] = useState(false);


  if (!id) {
    return <p>Error: Documentary ID no encontrado.</p>;
  }

  const documentaryId = parseInt(id, 10);
  const selectedDocumentary = data.find((doc) => doc.id === documentaryId);

  if (!selectedDocumentary) {
    return <p>Error: Documental no encontrado.</p>;
  }

  const currentCategory = selectedDocumentary.category[0];

  const hasCommonCategory = (categories1, categories2) => {
    return categories1.some(category => categories2.includes(category));
  };

  const recommendedDocumentaries = data
    .filter(doc => doc.id !== documentaryId && hasCommonCategory(doc.category, currentCategory))
    .slice(0, 10);

  return (
    <div className={styles.mainDiv}>
      {/* Imagen */}
      <img
        src={selectedDocumentary.image2}
        alt={`${selectedDocumentary.nameSpanish || selectedDocumentary.nameOriginal} Poster`}
        className={styles.poster}
      />

      {/* Propiedades */}
      <div className={styles.properties}>
        <h1 className={styles.title}>{selectedDocumentary.nameOriginal}</h1>
        <h2 className={styles.subtitle}>{selectedDocumentary.nameSpanish}</h2>
        <p className={styles.info}>{selectedDocumentary.year}|{selectedDocumentary.duration} | {selectedDocumentary.category.join(', ')} | {selectedDocumentary.score}</p>
        <p className={styles.info}>Director: {selectedDocumentary.director.join(', ')}</p>
        <h3 className={styles.description}>Descripción: {selectedDocumentary.description}</h3>
      </div>

      {/* Video */}
      <div className={styles.videoContainer}>
        {/* Nuevo componente para mostrar el trailer */}
        <Trailer trailerUrl={selectedDocumentary.trailer} />
      </div>
      {/* Recomendaciones con scroll horizontal */}
      <h3>Recomendados para ti</h3>
      <p>Te sugerimos esta selección según tus visualizaciones</p>
      <div className={styles.recommendedList}>
        {recommendedDocumentaries.map((doc) => (
          <div key={doc.id} className={styles.recommendedItem}>
            <img
              src={doc.image2}
              alt={`${doc.nameSpanish || doc.nameOriginal} Poster`}
              className={styles.recommendedImage}
            />
            <button onClick={() => handleShowReviews(doc.id)}>Ver Reseñas</button>
          </div>
        ))}
      </div>

      <section style={{paddingBottom: "20px"}}>
        {/* Mostrar reseñas del documental seleccionado */}
        {selectedDocumentary.reviews && (
            <div className={`${styles.reviewsContainer} ${showReviews && styles.show}`}>
              <h3 className={styles.sectionTitle}>Reseñas</h3>
              <p className={styles.sectionDesc}>Echa un vistazo de lo que dice la gente</p>
              {selectedDocumentary.reviews.map((review, index) => (
                <div key={index} className={styles.reviewItem}>
                  <p className={styles.user}>{review.user}</p>
                  <p className={styles.comment}>{review.comment}</p>
                  {/* <p>Rating: {review.rating}</p> */}
                  <Rating score={(review.rating * 2)+""}/>
                </div>
              ))}
            </div>
          )}
      </section>
    </div>
  );
};

export default DocumentaryDetailPage;