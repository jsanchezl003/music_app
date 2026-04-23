import { musicData } from '../data/musicData';
import { Link } from 'react-router-dom';

export default function ListsPage() {
  return (
    <div className="container">
      <h1 style={{ marginBottom: '1.5rem' }}>📋 Mis Listas</h1>
      <div className="lists-grid">
        {musicData.lists.map((list) => {
          const listAlbums = list.albums.map(id =>
            musicData.albums.find(album => album.id === id)
          ).filter(Boolean);
          
          const firstAlbum = listAlbums[0];

          return (
            <Link key={list.id} to={`/listas/${list.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
              <div className="list-card">
                {firstAlbum && (
                  <div className="list-cover-container">
                    <img 
                      src={firstAlbum.cover} 
                      alt={firstAlbum.title}
                      className="list-cover-image"
                    />
                  </div>
                )}
                <h2 className="list-title">{list.name}</h2>
                <p className="list-owner">👤 {list.owner}</p>
                <p className="list-description">{list.description}</p>
                <span className="list-album-count">
                  {list.albums.length} álbum{list.albums.length !== 1 ? 'es' : ''}
                </span>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
