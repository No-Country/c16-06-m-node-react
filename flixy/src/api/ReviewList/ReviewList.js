import { useState, useEffect } from 'react';
import StarRating from 'react-star-rating-component';

const ReviewList = ({ documentaryId }) => {
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Realiza una solicitud a la API para obtener reseñas por documentaryId
    fetch(`/api/reviews?documentaryId=${documentaryId}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('No se pudo obtener la información de las reseñas');
        }
        return response.json();
      })
      .then((data) => setReviews(data))
      .catch((err) => setError(err.message));
  }, [documentaryId]);

  return (
    <div>
      <h2>Reseñas</h2>
      {error ? (
        <p>Error: {error}</p>
      ) : reviews.length === 0 ? (
        <p>No hay reseñas disponibles.</p>
      ) : (
        <ul>
          {reviews.map((review) => (
            <li key={review.id}>
              <strong>{review.author}</strong> - {review.content} 
              <br />
              <StarRating 
                name={`rating-${review.id}`} 
                value={review.rating} 
                editing={false}  // Puedes cambiar a true si quieres permitir que los usuarios califiquen
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ReviewList;
