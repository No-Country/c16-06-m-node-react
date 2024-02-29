import React from "react";
import data from "@/data/data";
import {title, indieDocumentarySection, text, cardDocumentary, infoSection, cardTitle} from "./IndieDocumentary.module.css";
import Button from "../Button/Button";

const IndieDocumentary = () => {
  const indieDocumentaries = data.filter((documentary) =>
    documentary.category.includes("Indie")
  );

  const featuredDocumentary = indieDocumentaries[0];

  return (
    <>
      <section className={indieDocumentarySection}>
        <h4 className={title}>Documentales independientes</h4>
        <p className={text}>Las mas interesantes propuestas que muy probablemente cambiaran tu forma de ver el mundo.</p>
        <div className={cardDocumentary}>
          <span className={cardTitle}>
            Zeitgeist: El estado del paradigma monetario socioeconomico mundial.
          </span>

          <div className={infoSection}>
            <div>
              2021
            </div>

            <Button className="btn3">Ver ahora</Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default IndieDocumentary;