import React from "react";
// import data from "@/data/data";
import {newDocumentaryList, newDocumentary, title, infoSection, cardTitle, newDocumentarySection, info} from "./NewDocumentary.module.css";
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
                  <span className={cardTitle}>
                    {
                      titulo
                    }
                  </span>

                  <div className={infoSection}>
                    <div className={info}>
                      <Rating/>

                      <span style={{alignSelf:"center"}}>{fecha}</span>
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