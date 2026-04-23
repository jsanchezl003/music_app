import { useSearchParams, Link } from 'react-router-dom';
import { musicData } from '../data/musicData';
import AlbumCard from './AlbumCard';

export default function SearchResultsPage() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q')?.toLowerCase() || '';

  // Buscar en álbumes
  const albumResults = musicData.albums.filter(album =>
    album.title.toLowerCase().includes(query) ||
    album.artist.toLowerCase().includes(query) ||
    album.genre.toLowerCase().includes(query)
  );

  // Buscar en géneros
  const genreResults = musicData.genres.filter(genre =>
    genre.name.toLowerCase().includes(query) ||
    genre.keyArtists.toLowerCase().includes(query)
  );

  // Extraer artistas únicos de los álbumes encontrados
  const artistResults = Array.from(
    new Set(
      musicData.albums
        .filter(album => album.artist.toLowerCase().includes(query))
        .map(album => album.artist)
    )
  );

  const totalResults = albumResults.length + genreResults.length + artistResults.length;

  return (
    <div className="container">
      <Link to="/" style={{ marginBottom: '1rem', display: 'inline-block' }}>
        ← Volver
      </Link>

      <h1 style={{ marginBottom: '0.5rem' }}>Resultados de búsqueda</h1>
      <p style={{ color: '#6b7280', marginBottom: '2rem', fontSize: '1.1rem' }}>
        {query ? (
          <>
            Se encontraron <strong>{totalResults}</strong> resultado{totalResults !== 1 ? 's' : ''} para "<strong>{query}</strong>"
          </>
        ) : (
          'Ingresa un término de búsqueda'
        )}
      </p>

      {totalResults === 0 && query && (
        <div style={{
          padding: '2rem',
          backgroundColor: '#f0f4ff',
          borderRadius: '12px',
          textAlign: 'center'
        }}>
          <p style={{ color: '#6b7280', fontSize: '1.05rem' }}>
            No se encontraron resultados para "<strong>{query}</strong>". Intenta con otros términos.
          </p>
        </div>
      )}

      {/* Géneros */}
      {genreResults.length > 0 && (
        <div style={{ marginBottom: '3rem' }}>
          <h2 style={{ marginBottom: '1.5rem', color: '#8b5cf6' }}>
            🎸 Géneros ({genreResults.length})
          </h2>
          <div className="genres-grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))' }}>
            {genreResults.map((genre) => (
              <Link
                key={genre.id}
                to={`/generos/${encodeURIComponent(genre.name)}`}
                style={{ textDecoration: 'none' }}
              >
                <div
                  style={{
                    cursor: 'pointer',
                    backgroundColor: '#ffffff',
                    color: '#000',
                    transition: 'all 0.3s ease',
                    padding: '1.5rem',
                    borderRadius: '12px',
                    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
                    border: '2px solid transparent',
                    height: '100%'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#8b5cf6';
                    e.currentTarget.style.color = 'white';
                    e.currentTarget.style.boxShadow = '0 4px 12px rgba(139, 92, 246, 0.3)';
                    e.currentTarget.style.transform = 'translateY(-4px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#ffffff';
                    e.currentTarget.style.color = '#000';
                    e.currentTarget.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.1)';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  <div style={{ fontWeight: 'bold', fontSize: '1.1rem' }}>{genre.name}</div>
                  <div style={{ fontSize: '0.875rem', opacity: 0.8, marginTop: '0.5rem' }}>
                    {genre.origin}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Artistas */}
      {artistResults.length > 0 && (
        <div style={{ marginBottom: '3rem' }}>
          <h2 style={{ marginBottom: '1.5rem', color: '#ec4899' }}>
            🎤 Artistas ({artistResults.length})
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
            gap: '1.5rem'
          }}>
            {artistResults.map((artist, idx) => (
              <div
                key={idx}
                style={{
                  padding: '1.5rem',
                  backgroundColor: '#ffffff',
                  borderRadius: '12px',
                  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
                  borderLeft: '4px solid #ec4899'
                }}
              >
                <h3 style={{ color: '#1f2937', marginBottom: '0.5rem' }}>{artist}</h3>
                <p style={{ color: '#6b7280', fontSize: '0.9rem' }}>
                  {musicData.albums.filter(a => a.artist === artist).length} álbum{musicData.albums.filter(a => a.artist === artist).length !== 1 ? 'es' : ''}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Álbumes */}
      {albumResults.length > 0 && (
        <div>
          <h2 style={{ marginBottom: '1.5rem', color: '#fbbf24' }}>
            💿 Álbumes ({albumResults.length})
          </h2>
          <div className="album-grid">
            {albumResults.map((album) => (
              <AlbumCard key={album.id} album={album} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
