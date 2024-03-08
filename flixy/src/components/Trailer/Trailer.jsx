// components/Trailer.js
import React from 'react';
import ReactPlayer from 'react-player';
import styles from './Trailer.module.css';


const Trailer = ({ trailerUrl }) => {
  return (
    <div>
      <h3 className={styles.title}>Trailer</h3>
      <ReactPlayer url={trailerUrl} controls={true} width={"100%"} height={740} style={{margin:"0 auto",}}/>
    </div>
  );
};

export default Trailer;
