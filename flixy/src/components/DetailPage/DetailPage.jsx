// components/DocumentaryDetail.js

import React from 'react';

const DetailPage = ({ documentary }) => {
  return (
    <div>
      <h1>{documentary.nameOriginal}</h1>
      {/* Mostrar otros detalles del documental aquí */}
    </div>
  );
};

export default DetailPage;
