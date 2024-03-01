// components/Trailer.js
import React from 'react';
import ReactPlayer from 'react-player';


const Trailer = ({ trailerUrl }) => {
  return (
    <div>
      <h3>Trailer</h3>
      <ReactPlayer url={trailerUrl} controls={true} />
    </div>
  );
};

export default Trailer;
