import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles/index.css';
import Layout from './components/Layout';
import CatalogPage from './components/CatalogPage';
import AlbumDetailPage from './components/AlbumDetailPage';
import GenresPage from './components/GenresPage';
import GenreDetailPage from './components/GenreDetailPage';
import ListsPage from './components/ListsPage';
import ListDetailPage from './components/ListDetailPage';
import ArticlesPage from './components/ArticlesPage';
import AboutPage from './components/AboutPage';
import TimelinePage from './components/TimelinePage';
import SearchResultsPage from './components/SearchResultsPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<CatalogPage />} />
          <Route path="/album/:id" element={<AlbumDetailPage />} />
          <Route path="/generos" element={<GenresPage />} />
          <Route path="/generos/:name" element={<GenreDetailPage />} />
          <Route path="/buscar" element={<SearchResultsPage />} />
          <Route path="/listas" element={<ListsPage />} />
          <Route path="/listas/:id" element={<ListDetailPage />} />
          <Route path="/articulos" element={<ArticlesPage />} />
          <Route path="/acerca-de" element={<AboutPage />} />
          <Route path="/timeline" element={<TimelinePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
