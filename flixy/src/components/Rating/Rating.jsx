import React from 'react';
import {ratingDiv} from './Rating.module.css';

const Rating = ({ score }) => {
  let parsedScore = Math.floor(Number(score) / 2)
  let stars = []
  let fullOrEmpty = ""

  for (let index = 0; index < 5; index++) {
    //Esta logica se usa para definir si la calificacion logra cubrir una estrella de las cinco o no
    if(parsedScore>0){
      parsedScore-=1
      fullOrEmpty = "#71F9D6"
    }else{
      fullOrEmpty = "#B8B8B8"
    }

    stars.push(
      <svg
          viewBox="0 0 24 24"
          fill={fullOrEmpty}
          height="30px"
          width="30px"
          >
          <path d="M21.947 9.179a1.001 1.001 0 00-.868-.676l-5.701-.453-2.467-5.461a.998.998 0 00-1.822-.001L8.622 8.05l-5.701.453a1 1 0 00-.619 1.713l4.213 4.107-1.49 6.452a1 1 0 001.53 1.057L12 18.202l5.445 3.63a1.001 1.001 0 001.517-1.106l-1.829-6.4 4.536-4.082c.297-.268.406-.686.278-1.065z" />
      </svg>
    )
  }

  return (
    <>
      <div className={ratingDiv}>
        {
          ...stars
        }
      </div>
    </>
  );
};

export default Rating;