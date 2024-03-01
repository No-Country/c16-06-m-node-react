// components/Recommendations/Recommendations.js
import React from "react";

const Recommendations = ({ recommendedDocumentaries }) => {
  return (
    <div>
      <h2>Recomendaciones</h2>
      <div className="recommended-list">
        {recommendedDocumentaries.map((doc) => (
          <div key={doc.id}>
            <img src={doc.image} alt={doc.nameOriginal} />
            <p>{doc.nameOriginal}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recommendations;
