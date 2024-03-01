'use client'
import React from 'react';
import { useParams } from 'next/navigation';
import ReactPlayer from 'react-player';
import Trailer from '../Trailer/Trailer';
import Recommendations from '../Recommendations/Recommendations';
import data from '@/data/data';
import styles from './detailPage.module.css';

const DocumentaryDetailPage = () => {
  const { id } = useParams();

  if (!id) {
    return <p>Error: Documentary ID no encontrado.</p>;
  }

  const documentaryId = parseInt(id, 10);
  const selectedDocumentary = data.find((doc) => doc.id === documentaryId);

  if (!selectedDocumentary) {
    return <p>Error: Documental no encontrado.</p>;
  }

   
   const currentCategory = selectedDocumentary.category[0];

   
   const recommendedDocumentaries = data
     .filter(doc => doc.id !== documentaryId && doc.category.includes(currentCategory))
     .slice(0, 3); 

  return (
    <div className={styles.container}>
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
      <Recommendations recommendedDocumentaries={recommendedDocumentaries} />
    </div>
  );
};

export default DocumentaryDetailPage;
