import React from "react";
import data from "@/data/data";
import styles from "./TopDocumentary.module.css";

const TopDocumentary = () => {
  const sortedDocumentaries = data.sort((a, b) => b.rating - a.rating);

  const topRatedDocumentaries = sortedDocumentaries.slice(0, 3);

  return (
    <div>
      <h2 className={styles.title}>Populares de Flixy</h2>
      <div className={styles.documentaryCardsContainer}>
        {topRatedDocumentaries.map((documentary) => (
          <div
            key={documentary.nameOriginal}
            className={styles.documentaryCard}
          >
            <img
              src={documentary.image}
              alt={documentary.nameOriginal}
              className={styles.documentaryImage}
            />
            <div className={styles.documentaryDetails}>
              <h3>{documentary.nameOriginal}</h3>
              <p>Año: {documentary.year}</p>
              <p>Puntuación: {documentary.score}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopDocumentary;
