// components/Recommendations/Recommendations.js
import React from "react";
import Image from "next/image";

const Recommendations = ({ recommendedDocumentaries }) => {
  return (
    <div>
      <h2>Recomendaciones</h2>
      <div className="recommended-list">
        {recommendedDocumentaries.map((doc) => (
          <div key={doc.id}>
            <Image
              src={doc.image}
              alt={doc.nameOriginal}
              width={800}
              height={600}
            />
            <p>{doc.nameOriginal}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recommendations;
