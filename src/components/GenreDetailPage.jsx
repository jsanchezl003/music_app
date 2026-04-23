import { useParams, Link } from 'react-router-dom';
import { musicData, getAlbumsByGenre } from '../data/musicData';
import AlbumCard from './AlbumCard';

export default function GenreDetailPage() {
  const { name } = useParams();
  const decodedName = decodeURIComponent(name);
  const genre = musicData.genres.find(g => g.name === decodedName);
  const albums = getAlbumsByGenre(decodedName);

  if (!genre) {
    return (
      <div className="container">
        <h1>Género no encontrado</h1>
        <Link to="/generos" className="btn">
          Volver a géneros
        </Link>
      </div>
    );
  }

  return (
    <div className="container">
      <Link to="/generos" style={{ marginBottom: '1rem', display: 'inline-block' }}>
        ← Volver a géneros
      </Link>
      
      <div style={{ 
        padding: '2rem', 
        backgroundColor: '#f9fafb', 
        borderRadius: '12px',
        borderLeft: '4px solid #8b5cf6',
        marginBottom: '2rem'
      }}>
        <h1 style={{ marginBottom: '1rem', color: '#8b5cf6' }}>{genre.name}</h1>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '1.5rem',
          marginBottom: '2rem'
        }}>
          <div>
            <h3 style={{ color: '#6b7280', marginBottom: '0.5rem' }}>Origen</h3>
            <p>{genre.origin}</p>
          </div>
          <div>
            <h3 style={{ color: '#6b7280', marginBottom: '0.5rem' }}>Álbumes</h3>
            <p>{albums.length} álbum{albums.length !== 1 ? 'es' : ''}</p>
          </div>
        </div>

        <div style={{ marginBottom: '2rem' }}>
          <h3 style={{ color: '#8b5cf6', marginBottom: '1rem' }}>Historia</h3>
          <p style={{ lineHeight: '1.6', color: '#374151' }}>{genre.history}</p>
        </div>

        <div style={{ marginBottom: '2rem' }}>
          <h3 style={{ color: '#8b5cf6', marginBottom: '1rem' }}>Características</h3>
          <p style={{ lineHeight: '1.6', color: '#374151' }}>{genre.characteristics}</p>
        </div>

        <div style={{ marginBottom: '2rem' }}>
          <h3 style={{ color: '#8b5cf6', marginBottom: '1rem' }}>Artistas Clave</h3>
          <p style={{ lineHeight: '1.6', color: '#374151' }}>{genre.keyArtists}</p>
        </div>

        <div>
          <h3 style={{ color: '#8b5cf6', marginBottom: '1rem' }}>Influencia</h3>
          <p style={{ lineHeight: '1.6', color: '#374151' }}>{genre.influence}</p>
        </div>
      </div>

      {albums.length > 0 && (
        <div>
          <h2 style={{ marginBottom: '1.5rem' }}>Álbumes de {genre.name}</h2>
          <div className="album-grid">
            {albums.map((album) => (
              <AlbumCard key={album.id} album={album} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
