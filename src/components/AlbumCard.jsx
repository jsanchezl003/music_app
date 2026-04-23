import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function AlbumCard({ album }) {
  const [userRating] = useState(() => {
    const savedRating = localStorage.getItem(`album-rating-${album.id}`);
    return savedRating ? parseInt(savedRating) : 0;
  });

  return (
    <Link to={`/album/${album.id}`} className="album-card">
      <img src={album.cover} alt={album.title} className="album-cover" />
      <div className="album-info">
        <h3 className="album-title">{album.title}</h3>
        <p className="album-artist">{album.artist}</p>
        <div className="album-meta">
          <span className="album-rating">
            {userRating > 0 ? `⭐ ${userRating}/5` : '⭐ Sin calificar'}
          </span>
          <span>{album.year}</span>
        </div>
      </div>
    </Link>
  );
}
