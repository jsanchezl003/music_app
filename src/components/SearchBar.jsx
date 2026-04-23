import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, X } from 'lucide-react'; 

export default function SearchBar() {
  const [searchQuery, setSearchQuery] = useState('');
  const [isExpanded, setIsExpanded] = useState(false);
  const inputRef = useRef(null);
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/buscar?q=${encodeURIComponent(searchQuery)}`);
      setSearchQuery('');
      setIsExpanded(false); // Opcional: cerrar al buscar
    }
  };

  const toggleExpand = () => {
    if (!isExpanded) {
      setIsExpanded(true);
      // Pequeño timeout para esperar que la animación inicie antes de dar foco
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  };

  // Estilos Dinámicos
  const containerStyle = {
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
    backgroundColor: isExpanded ? 'rgba(255, 255, 255, 0.12)' : 'transparent',
    borderRadius: '50px',
    padding: '5px',
    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
    width: isExpanded ? '300px' : '40px',
    height: '40px',
    overflow: 'hidden',
    border: isExpanded ? '1px solid rgba(255, 255, 255, 0.2)' : '1px solid transparent',
    cursor: isExpanded ? 'default' : 'pointer'
  };

  const inputStyle = {
    background: 'none',
    border: 'none',
    outline: 'none',
    color: 'white',
    padding: '0 10px 0 40px', // Espacio para el icono de la izquierda
    width: '100%',
    height: '100%',
    fontSize: '0.95rem',
    opacity: isExpanded ? 1 : 0,
    transition: 'opacity 0.3s ease',
    pointerEvents: isExpanded ? 'auto' : 'none',
  };

  const iconContainerStyle = {
    position: 'absolute',
    left: '10px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: isExpanded ? '#3b82f6' : 'white',
    transition: 'color 0.3s ease',
    zIndex: 2,
  };

  return (
    <form 
      onSubmit={handleSearch} 
      style={containerStyle}
      onClick={toggleExpand}
    >
      {/* El icono de lupa ahora funciona como disparador */}
      <div style={iconContainerStyle}>
        <Search size={20} strokeWidth={2.5} />
      </div>

      <input
        ref={inputRef}
        type="text"
        placeholder="Buscar álbum, artista..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        onBlur={() => {
            // Si el input está vacío al perder el foco, se cierra
            if (searchQuery === '') setIsExpanded(false);
        }}
        style={inputStyle}
      />

      {/* Icono para cerrar o limpiar */}
      {isExpanded && (
        <X 
          size={18} 
          style={{ 
            cursor: 'pointer', 
            marginRight: '10px', 
            color: 'rgba(255,255,255,0.5)',
            flexShrink: 0 
          }} 
          onClick={(e) => {
            e.stopPropagation(); // Evita que el click en X active el toggle del form
            setSearchQuery('');
            setIsExpanded(false);
          }}
        />
      )}
    </form>
  );
}