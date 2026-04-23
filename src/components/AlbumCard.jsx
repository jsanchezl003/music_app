import { Link } from 'react-router-dom';

export default function AlbumCard({ album }) {
  return (
    <Link to={`/album/${album.id}`} className="album-card">
      <img src={album.cover} alt={album.title} className="album-cover" />
      <div className="album-info">
        <h3 className="album-title">{album.title}</h3>
        <p className="album-artist">{album.artist}</p>
        <div className="album-meta">
          <span className="album-rating">⭐ {album.rating}</span>
          <span>{album.year}</span>
        </div>
      </div>
    </Link>
  );
}
