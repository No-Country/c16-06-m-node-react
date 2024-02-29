import React from "react";
import data from "@/data/data";
import {title, indieDocumentarySection, text, cardDocumentary, infoSection, cardTitle, info, cardSign, slash} from "./IndieDocumentary.module.css";
import Button from "../Button/Button";
import Rating from "../Rating/Rating";

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
        <div className={cardDocumentary} style={{backgroundImage:"url(https://i.ytimg.com/vi/OYfnkLurLA8/maxresdefault.jpg)"}}>
          <span className={cardSign}>Inglés</span>

          <span className={cardTitle}>
            Zeitgeist: El estado del paradigma monetario socioeconomico mundial.
          </span>

          <div className={infoSection}>
            <div className={info}>
              <Rating/>

              <div className={slash}/>

              <span style={{alignSelf:"center", color:"var(--neutral50)", fontSize:"var(--body-1)"}}>2021</span>
            </div>

            <Button className="btn3">Ver ahora</Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default IndieDocumentary;