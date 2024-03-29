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
import Button from '../Button/Button';
import Image from 'next/image';
import Link from 'next/link';

const DocumentaryDetailPage = () => {
  const { id } = useParams();
  const [userRating, setUserRating] = useState(0);
const [showReviews, setShowReviews] = useState(false);

let platformLinks = {
  Apple:"https://tv.apple.com/?l=es-CO",
  Netflix:"https://www.netflix.com/",
  Disney:"https://www.disneyplus.com/es-co",
  Google:"https://www.google.com",
  Max:"https://www.max.com/",
  PrimeVideo:"https://www.primevideo.com/",
  Youtube:"https://www.youtube.com"
}


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
      
      
      <section style={{width:"100%", maxWidth:"unset", margin:"unset"}}>
        <div className={styles.heroImg} style={{backgroundImage:"linear-gradient(90deg, black, transparent 60%, black), url("+selectedDocumentary.image2+")"}}>
          {/* Propiedades */}
          <div className={styles.properties}>
            <h1 className={styles.title}>{selectedDocumentary.nameOriginal}</h1>
            <h2 className={styles.subtitle}>{selectedDocumentary.nameSpanish}</h2>
            <p className={styles.info}>{selectedDocumentary.year} | {selectedDocumentary.duration} | {selectedDocumentary.category.join(', ')} | {selectedDocumentary.score}</p>
            <p className={styles.info} style={{color:"var(--primary-200)"}}>Director: {selectedDocumentary.director.join(', ')}</p>
            <p className={styles.description}>{selectedDocumentary.description}</p>
          </div>
        </div>
      </section>

      <section className={styles.sectionCover} style={{backgroundColor:"var(--neutral-800)"}}>
        <div className={styles.documentaryInfoSection} style={{marginTop:"unset", padding:"60px 0 0 0"}}>
          <div>
            <p style={{textAlign:"center"}}>Puedes verlo en: </p>

            <div className={styles.platformsList}>
              {
                selectedDocumentary.streaming.map((platform) => {
                  let link = platform==="Disney+" ? "Disney" : platform

                  return <>
                    <Link href={platformLinks[link]} target='_blank' style={{marginTop:"20px"}}>
                      <Image
                        src={`/streaming/${platform}.svg`}
                        alt={`Icono de ${platform}`}
                        width={50}
                        height={50}
                      />
                    </Link>
                  </>
                })
              }
            </div>
          </div>

          <div className={styles.documentaryRating}>
            <span style={{color:"var(--primary-400)", fontSize:"var(--body-1)"}}>
              Valoración media
            </span>
            
            <div style={{display:"flex", justifyContent:"space-between", alignContent:"baseline", marginTop:"15px", gap:"5px"}}>
              <p style={{fontSize:"var(--subtitle-2)", color:"var(--primary-400)"}}>
                {
                  selectedDocumentary.score
                }
                <span style={{fontSize:"var(--caption)", marginLeft:"2px", color:"var(--primary-600)"}}>
                  /10
                </span>
              </p>

              <Rating score={selectedDocumentary.score}/>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.sectionCover} style={{display:"flex", flexDirection:"column", justifyContent:"center"}}>
        {/* Video */}
        <div className={styles.trailerSection}>
          <div className={styles.videoContainer}>
            {/* Nuevo componente para mostrar el trailer */}
            <Trailer trailerUrl={selectedDocumentary.trailer} />
          </div>
        </div>
      </section>

      <section>
        {/* Recomendaciones con scroll horizontal */}
        <h3 className={styles.sectionTitle}>Recomendados para ti</h3>
        <p className={styles.sectionDesc}>Te sugerimos esta selección según tus visualizaciones</p>
        <div className={styles.recommendedList}>
          {recommendedDocumentaries.map((doc) => (
            <div key={doc.id} className={styles.recommendedItem}>
              <Image
                src={`${doc.image2}`}
                alt={`${doc.nameSpanish || doc.nameOriginal} Poster`}
                className={styles.recommendedImage}
                width={0}
                height={0}
                style={{width:"100%", height:"35%"}}
                loader={() => doc.image2}
              />
              <div className={styles.cardDesc}>
                <h4 className={styles.cardTitleE}>{doc.nameOriginal}</h4>

                <div className={styles.row} style={{marginTop:"20px"}}>
                  <h5 className={styles.cardTitleS} style={{maxWidth:"280px"}}>{doc.nameSpanish}</h5> 
                  <span className={styles.cardTitleS}>{doc.year}</span>
                </div>

                <div className={styles.row} style={{marginTop:"15px"}}>
                  <p className={styles.cardInfo} style={{maxWidth:"280px"}}>{doc.duration}</p> 
                  <span className={styles.cardInfo}>{doc.certification === "Not Rated" ? "Sin calificaión" : doc.certification}</span>
                </div>

                <div className={styles.row} style={{marginTop:"10px"}}>
                  <Rating score={doc.score}/>
                  <span style={{color:"var(--primary-500)", fontSize:"var(--body-2)"}}>{doc.score}</span>
                </div>

                <p style={{ color:"var(--neutral-200)",marginTop:"20px"}}>{doc.description}</p>
                
                {/* <button style={{margin:"auto 0 0 0"}} onClick={() => handleShowReviews(doc.id)}>Ver Reseñas</button> */}
                <Button className="btn2" style={{margin:"auto 0 0 0", display:"flex", justifyContent:"center"}}  to="/[id]" as={`/${doc.id}`}>Ver</Button>
              </div>
            </div>
          ))}
        </div>
      </section>

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