import { useParams, Link } from 'react-router-dom';
import { getAlbumById, getReviewsForAlbum } from '../data/musicData';
import TrackList from './TrackList';
import ReviewList from './ReviewList';

export default function AlbumDetailPage() {
  const { id } = useParams();
  const album = getAlbumById(id);
  const reviews = getReviewsForAlbum(album?.id);

  if (!album) {
    return (
      <div className="container">
        <h1>Álbum no encontrado</h1>
        <Link to="/" className="btn">
          Volver al catálogo
        </Link>
      </div>
    );
  }

  return (
    <div className="container">
      <Link to="/" style={{ marginBottom: '1rem', display: 'inline-block' }}>
        ← Volver al catálogo
      </Link>
      <div className="album-detail">
        <div className="album-detail-header">
          <img src={album.cover} alt={album.title} className="album-cover-large" />
          <div className="album-header-info">
            <h1>{album.title}</h1>
            <p className="artist">{album.artist}</p>
            <div className="album-stats">
              <div className="stat">
                <span className="stat-label">Calificación</span>
                <span className="stat-value">⭐ {album.rating}</span>
              </div>
              <div className="stat">
                <span className="stat-label">Año</span>
                <span className="stat-value">{album.year}</span>
              </div>
              <div className="stat">
                <span className="stat-label">Género</span>
                <span className="stat-value">{album.genre}</span>
              </div>
              <div className="stat">
                <span className="stat-label">Reseñas</span>
                <span className="stat-value">{album.reviews}</span>
              </div>
            </div>
            <p className="album-description">{album.description}</p>
          </div>
        </div>
        <TrackList tracks={album.tracks} />
        <ReviewList reviews={reviews} />
      </div>
    </div>
  );
}
