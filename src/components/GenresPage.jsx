import { useNavigate } from 'react-router-dom';
import { musicData } from '../data/musicData';

export default function GenresPage() {
  const navigate = useNavigate();

  const handleGenreClick = (genreName) => {
    navigate(`/generos/${encodeURIComponent(genreName)}`);
  };

  return (
    <div className="container">
      <h1 style={{ marginBottom: '1rem' }}>🎸 Géneros Musicales</h1>
      <p style={{ color: '#6b7280', marginBottom: '2rem', fontSize: '1.1rem' }}>
        Explora la historia, características e influencias de diferentes géneros musicales
      </p>

      <div className="genres-grid">
        {musicData.genres.map((genre) => (
          <div
            key={genre.id}
            className="genre-card"
            onClick={() => handleGenreClick(genre.name)}
            style={{
              cursor: 'pointer',
              backgroundColor: '#ffffff',
              color: '#000',
              transition: 'all 0.3s ease',
              padding: '1.5rem',
              borderRadius: '12px',
              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
              border: '2px solid transparent',
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
        ))}
      </div>

      <div style={{ 
        marginTop: '3rem', 
        padding: '2rem', 
        backgroundColor: '#f0f4ff', 
        borderRadius: '12px',
        textAlign: 'center'
      }}>
        <p style={{ color: '#6b7280', fontSize: '1.1rem' }}>
          ✨ Haz clic en cualquier género para conocer su historia, características e influencia en la música moderna
        </p>
      </div>
    </div>
  );
}
