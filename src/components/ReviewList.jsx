export default function ReviewList({ reviews }) {
  return (
    <div className="reviews-section">
      <h2 className="section-title">💬 Reseñas</h2>
      {reviews.length === 0 ? (
        <p className="empty-state">No hay reseñas aún para este álbum.</p>
      ) : (
        <div>
          {reviews.map((review) => (
            <div key={review.id} className="review-item">
              <div className="review-header">
                <span className="review-author">{review.author}</span>
                <span className="review-date">{review.date}</span>
              </div>
              <div className="review-rating">⭐ {review.rating}/10</div>
              <p className="review-text">{review.text}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
