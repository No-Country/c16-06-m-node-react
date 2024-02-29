import React from "react";
// import data from "@/data/data";
import {newDocumentaryList, newDocumentary, title, infoSection, cardTitle, newDocumentarySection, info, cardSign, slash} from "./NewDocumentary.module.css";
import Button from "../Button/Button";
import Rating from "../Rating/Rating";

const NewDocumentary = ({list}) => {

  return (
    <>
      <section className={newDocumentarySection}>
          <h4 className={title}>Populares de Flixy</h4>
          <div className={newDocumentaryList}>
            {
              list.map(({titulo, fecha}) => {
                return <>
                <div className={newDocumentary} key={titulo}>
                  <span className={cardSign}>Nuevo</span>

                  <span className={cardTitle}>
                    {
                      titulo
                    }
                  </span>

                  <div className={infoSection}>
                    <div className={info}>
                      <Rating/>

                      <div className={slash}/>

                      <span style={{alignSelf:"center", color:"var(--neutral50)", fontSize:"var(--body-1)"}}>{fecha}</span>
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