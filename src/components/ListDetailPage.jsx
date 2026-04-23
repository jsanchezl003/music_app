import { useParams, useNavigate } from 'react-router-dom';
import { musicData } from '../data/musicData';
import AlbumCard from './AlbumCard';

export default function ListDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const list = musicData.lists.find(l => l.id === parseInt(id));
  
  if (!list) {
    return (
      <div className="container">
        <h1>Lista no encontrada</h1>
        <button onClick={() => navigate('/listas')} style={{ marginTop: '1rem', padding: '0.5rem 1rem', cursor: 'pointer' }}>
          Volver a Listas
        </button>
      </div>
    );
  }
  
  const listAlbums = list.albums.map(albumId =>
    musicData.albums.find(album => album.id === albumId)
  ).filter(Boolean);
  
  return (
    <div className="container">
      <button 
        onClick={() => navigate('/listas')} 
        style={{ 
          marginBottom: '1.5rem', 
          padding: '0.5rem 1rem', 
          cursor: 'pointer',
          backgroundColor: '#8b5cf6',
          color: 'white',
          border: 'none',
          borderRadius: '4px'
        }}
      >
        ← Volver a Listas
      </button>
      
      <div style={{ marginBottom: '2rem' }}>
        <h1 style={{ marginBottom: '0.5rem' }}>{list.name}</h1>
        <p style={{ color: '#6b7280', marginBottom: '0.25rem' }}>👤 {list.owner}</p>
        <p style={{ color: '#6b7280', marginBottom: '1rem' }}>{list.description}</p>
        <span style={{ backgroundColor: '#e5e7eb', padding: '0.25rem 0.75rem', borderRadius: '20px', fontSize: '0.875rem' }}>
          {list.albums.length} álbum{list.albums.length !== 1 ? 'es' : ''}
        </span>
      </div>
      
      <div className="album-grid">
        {listAlbums.map((album) => (
          <AlbumCard key={album.id} album={album} />
        ))}
      </div>
    </div>
  );
}
