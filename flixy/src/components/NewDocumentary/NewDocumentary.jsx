import React from "react";
// import data from "@/data/data";
import {newDocumentaryList, newDocumentary, title, infoSection, cardTitle, newDocumentarySection, info, cardSign, slash} from "./NewDocumentary.module.css";
import Button from "../Button/Button";
import Rating from "../Rating/Rating";
import data from "@/data/data";

const NewDocumentary = ({list}) => {
  const NewDocumentaries = [data[data.length - 1], data[data.length - 2]]
  console.log(NewDocumentaries)

  return (
    <>
      <section className={newDocumentarySection}>
          <h4 className={title}>Populares de Flixy</h4>
          <div className={newDocumentaryList}>
            {
              NewDocumentaries.map(({nameSpanish, year, image}) => {
                return <>
                <div className={newDocumentary} key={nameSpanish} style={{backgroundImage:"url("+image+")"}}>
                  <span className={cardSign}>Nuevo</span>

                  <span className={cardTitle}>
                    {
                      nameSpanish
                    }
                  </span>

                  <div className={infoSection}>
                    <div className={info}>
                      <Rating/>

                      <div className={slash}/>

                      <span style={{alignSelf:"center", color:"var(--neutral50)", fontSize:"var(--body-1)"}}>{year}</span>
                    </div>

                    <Button className="btn3">Ver ahora</Button>
                  </div>
                </div>
                </>
              })
            }
          </div>
      </section>
    </>
  );
};

export default NewDocumentary;