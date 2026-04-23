import { useState, useEffect } from 'react';
import { musicData } from '../data/musicData';
import { Link } from 'react-router-dom';
import AlbumCard from './AlbumCard';

export default function CatalogPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const albums = musicData.albums;
  const currentAlbum = albums[currentIndex];

  // Avance automático del carrusel
  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === albums.length - 1 ? 0 : prevIndex + 1
        );
        setIsTransitioning(false);
      }, 300);
    }, 5000); 

    return () => clearInterval(interval);
  }, [albums.length]);

  const goToPrevious = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? albums.length - 1 : prevIndex - 1
      );
      setIsTransitioning(false);
    }, 300);
  };

  const goToNext = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === albums.length - 1 ? 0 : prevIndex + 1
      );
      setIsTransitioning(false);
    }, 300);
  };

  const goToSlide = (index) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex(index);
      setIsTransitioning(false);
    }, 300);
  };

  // Estilo común para las flechas mejoradas
  const arrowStyle = {
    padding: '0',
    backgroundColor: 'white',
    color: '#8b5cf6',
    border: '2px solid #f3f4f6',
    borderRadius: '50%',
    width: '60px',
    height: '60px',
    fontSize: '1.8rem',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    outline: 'none',
    zIndex: 2
  };

  return (
    <div className="container">
      <h1 style={{ marginBottom: '2rem' }}>📚 Catálogo de Álbumes</h1>
      
      {/* Carrusel Principal */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '2rem',
        marginBottom: '3rem',
        position: 'relative'
      }}>
        {/* Botón Anterior */}
        <button
          onClick={goToPrevious}
          style={arrowStyle}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#8b5cf6';
            e.currentTarget.style.color = 'white';
            e.currentTarget.style.transform = 'scale(1.1) translateX(-5px)';
            e.currentTarget.style.boxShadow = '0 6px 20px rgba(139, 92, 246, 0.3)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'white';
            e.currentTarget.style.color = '#8b5cf6';
            e.currentTarget.style.transform = 'scale(1) translateX(0)';
            e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
          }}
        >
          ‹
        </button>

        {/* Álbum Central */}
        <Link
          to={`/album/${currentAlbum.id}`}
          style={{
            flex: 1,
            textDecoration: 'none',
            color: 'inherit'
          }}
        >
          <div style={{
            backgroundColor: 'white',
            borderRadius: '16px',
            overflow: 'hidden',
            boxShadow: '0 10px 25px rgba(0, 0, 0, 0.15)',
            padding: '2rem',
            textAlign: 'center',
            cursor: 'pointer',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease, opacity 0.3s ease',
            opacity: isTransitioning ? 0.5 : 1,
            transform: isTransitioning ? 'scale(0.95)' : 'scale(1)'
          }}
          onMouseEnter={(e) => {
            if (!isTransitioning) {
              e.currentTarget.style.transform = 'translateY(-5px) scale(1)';
              e.currentTarget.style.boxShadow = '0 15px 35px rgba(0, 0, 0, 0.2)';
            }
          }}
          onMouseLeave={(e) => {
            if (!isTransitioning) {
              e.currentTarget.style.transform = 'translateY(0) scale(1)';
              e.currentTarget.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.15)';
            }
          }}
          >
            <img
              src={currentAlbum.cover}
              alt={currentAlbum.title}
              style={{
                width: '100%',
                height: 'auto',
                objectFit: 'scale-down',
                marginBottom: '1.5rem',
                maxHeight: '300px',
                transition: 'transform 0.4s ease',
                transform: isTransitioning ? 'rotateY(10deg)' : 'rotateY(0deg)'
              }}
            />
            <h2 style={{
              fontSize: '1.8rem',
              color: '#1f2937',
              marginBottom: '0.5rem',
              transition: 'opacity 0.3s ease',
              opacity: isTransitioning ? 0 : 1
            }}>
              {currentAlbum.title}
            </h2>
            <p style={{
              fontSize: '1.2rem',
              color: '#8b5cf6',
              fontWeight: '600',
              marginBottom: '1rem',
              transition: 'opacity 0.3s ease',
              opacity: isTransitioning ? 0 : 1
            }}>
              {currentAlbum.artist}
            </p>
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr 1fr',
              gap: '1rem',
              marginBottom: '1rem',
              transition: 'opacity 0.3s ease',
              opacity: isTransitioning ? 0 : 1
            }}>
              <div>
                <p style={{ color: '#6b7280', fontSize: '0.9rem', marginBottom: '0.25rem' }}>AÑO</p>
                <p style={{ fontSize: '1.1rem', fontWeight: 'bold', color: '#1f2937' }}>{currentAlbum.year}</p>
              </div>
              <div>
                <p style={{ color: '#6b7280', fontSize: '0.9rem', marginBottom: '0.25rem' }}>GÉNERO</p>
                <p style={{ fontSize: '1.1rem', fontWeight: 'bold', color: '#1f2937' }}>{currentAlbum.genre}</p>
              </div>
              <div>
                <p style={{ color: '#6b7280', fontSize: '0.9rem', marginBottom: '0.25rem' }}>CALIFICACIÓN</p>
                <p style={{ fontSize: '1.1rem', fontWeight: 'bold', color: '#fbbf24' }}>⭐ {currentAlbum.rating}</p>
              </div>
            </div>
            <p style={{
              color: '#6b7280',
              lineHeight: '1.6',
              transition: 'opacity 0.3s ease',
              opacity: isTransitioning ? 0 : 1
            }}>
              {currentAlbum.description}
            </p>
          </div>
        </Link>

        {/* Botón Siguiente */}
        <button
          onClick={goToNext}
          style={arrowStyle}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#8b5cf6';
            e.currentTarget.style.color = 'white';
            e.currentTarget.style.transform = 'scale(1.1) translateX(5px)';
            e.currentTarget.style.boxShadow = '0 6px 20px rgba(139, 92, 246, 0.3)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'white';
            e.currentTarget.style.color = '#8b5cf6';
            e.currentTarget.style.transform = 'scale(1) translateX(0)';
            e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
          }}
        >
          ›
        </button>
      </div>

      {/* Indicadores de Página */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '0.5rem',
        marginBottom: '3rem',
        flexWrap: 'wrap'
      }}>
        {albums.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            style={{
              width: index === currentIndex ? '32px' : '10px',
              height: '10px',
              backgroundColor: index === currentIndex ? '#8b5cf6' : '#e5e7eb',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
          />
        ))}
      </div>

      {/* Contador */}
      <div style={{
        textAlign: 'center',
        color: '#6b7280',
        marginBottom: '3rem',
        fontSize: '0.95rem'
      }}>
        Álbum {currentIndex + 1} de {albums.length}
      </div>

      {/* Grid de Álbumes */}
      <h2 style={{ marginBottom: '1.5rem', color: '#1f2937' }}>Todos los Álbumes</h2>
      <div className="album-grid">
        {musicData.albums.map((album) => (
          <AlbumCard key={album.id} album={album} />
        ))}
      </div>
    </div>
  );
}