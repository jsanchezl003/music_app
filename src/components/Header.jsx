import { Link, useLocation } from 'react-router-dom';
import SearchBar from './SearchBar';

export default function Header() {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <header>
      <div className="header-content" style={{ justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '3rem' }}>
          <Link to="/" className="logo">
            <span className="logo-icon">🎵</span>
            <span className="logo-text">Mi Música</span>
          </Link>
          <nav>
            <Link to="/" className={isActive('/') ? 'active' : ''}>
              Catálogo
            </Link>
            <Link to="/generos" className={isActive('/generos') ? 'active' : ''}>
              Géneros
            </Link>
            <Link to="/timeline" className={isActive('/timeline') ? 'active' : ''}>
              Timeline
            </Link>
            <Link to="/listas" className={isActive('/listas') ? 'active' : ''}>
              Mis Listas
            </Link>
            <Link to="/articulos" className={isActive('/articulos') ? 'active' : ''}>
              Artículos
            </Link>
            <Link to="/acerca-de" className={isActive('/acerca-de') ? 'active' : ''}>
              Acerca de
            </Link>
          </nav>
        </div>
        <SearchBar />
      </div>
    </header>
  );
}
