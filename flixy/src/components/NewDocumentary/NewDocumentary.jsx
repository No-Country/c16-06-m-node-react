import React from "react";
import data from "@/data/data";
import styles from "./NewDocumentary.module.css";

const NewDocumentary = () => {
  const indieDocumentaries = data.filter((documentary) =>
    documentary.category.includes("Indie")
  );

  const featuredDocumentary = indieDocumentaries[0];

  return (
    <div>
      <h2 className={styles.title}>Documentales Independientes</h2>
      <p>
        Las más interesantes propuestas que muy probablemente cambiarán tu forma
        de ver el mundo.
      </p>
      <div className={styles.featuredDocumentaryCard}>
        <img
          src={featuredDocumentary.image}
          alt={featuredDocumentary.nameOriginal}
          className={styles.documentaryImage}
        />
        <div className={styles.overlay}>
          <h3>{featuredDocumentary.nameOriginal}</h3>
          <p>
            {featuredDocumentary.year}|{featuredDocumentary.score}
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewDocumentary;
