import { useState } from 'react';
import { musicData } from '../data/musicData';

export default function ArticlesPage() {
  const [selectedArticle, setSelectedArticle] = useState(null);
  const articles = musicData.forumTopics;
  const categories = [...new Set(articles.map(a => a.category))];

  return (
    <div className="container">
      <h1 style={{ marginBottom: '1rem' }}>📰 Artículos Informativos</h1>
      <p style={{ color: '#6b7280', marginBottom: '2rem', fontSize: '1.05rem' }}>
        Explora artículos detallados sobre géneros, artistas y la historia de la música
      </p>

      {/* Lista de Artículos */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: selectedArticle ? '1fr 1fr' : '1fr',
        gap: '2rem',
        marginBottom: '2rem'
      }}>
        <div>
          <div style={{ marginBottom: '1.5rem' }}>
            <h3 style={{ color: '#1f2937', marginBottom: '1rem' }}>Categorías</h3>
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
              <button
                onClick={() => setSelectedArticle(null)}
                style={{
                  padding: '0.5rem 1rem',
                  backgroundColor: !selectedArticle ? '#8b5cf6' : '#f3f4f6',
                  color: !selectedArticle ? 'white' : '#6b7280',
                  border: 'none',
                  borderRadius: '20px',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  fontSize: '0.9rem'
                }}
              >
                Todos
              </button>
              {categories.map(category => (
                <button
                  key={category}
                  style={{
                    padding: '0.5rem 1rem',
                    backgroundColor: '#f3f4f6',
                    color: '#6b7280',
                    border: 'none',
                    borderRadius: '20px',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    fontSize: '0.9rem'
                  }}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {articles.map((article) => (
              <div
                key={article.id}
                onClick={() => setSelectedArticle(article)}
                style={{
                  padding: '1.5rem',
                  backgroundColor: selectedArticle?.id === article.id ? '#ede9fe' : '#ffffff',
                  border: selectedArticle?.id === article.id ? '2px solid #8b5cf6' : '1px solid #e5e7eb',
                  borderRadius: '12px',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  boxShadow: selectedArticle?.id === article.id ? '0 4px 12px rgba(139, 92, 246, 0.15)' : 'none'
                }}
                onMouseEnter={(e) => {
                  if (selectedArticle?.id !== article.id) {
                    e.currentTarget.style.backgroundColor = '#f9fafb';
                    e.currentTarget.style.borderColor = '#8b5cf6';
                  }
                }}
                onMouseLeave={(e) => {
                  if (selectedArticle?.id !== article.id) {
                    e.currentTarget.style.backgroundColor = '#ffffff';
                    e.currentTarget.style.borderColor = '#e5e7eb';
                  }
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '0.5rem' }}>
                  <h3 style={{ color: '#1f2937', margin: 0, flex: 1, fontSize: '1.1rem' }}>
                    {article.title}
                  </h3>
                </div>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: '0.75rem', flexWrap: 'wrap' }}>
                  <span style={{
                    backgroundColor: '#fce7f3',
                    color: '#ec4899',
                    padding: '0.25rem 0.75rem',
                    borderRadius: '12px',
                    fontSize: '0.8rem',
                    fontWeight: '600'
                  }}>
                    {article.category}
                  </span>
                  <span style={{ color: '#6b7280', fontSize: '0.9rem' }}>👤 {article.author}</span>
                  <span style={{ color: '#6b7280', fontSize: '0.9rem' }}>📅 {article.date}</span>
                </div>
                <p style={{ color: '#6b7280', fontSize: '0.95rem', margin: 0, lineHeight: '1.5' }}>
                  {article.excerpt}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Panel de Artículo Seleccionado */}
        {selectedArticle && (
          <div style={{
            padding: '2rem',
            backgroundColor: '#ffffff',
            borderRadius: '12px',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
            height: 'fit-content',
            position: 'sticky',
            top: '2rem'
          }}>
            <button
              onClick={() => setSelectedArticle(null)}
              style={{
                backgroundColor: 'transparent',
                border: 'none',
                color: '#8b5cf6',
                cursor: 'pointer',
                fontSize: '1.5rem',
                marginBottom: '1rem'
              }}
            >
              ✕
            </button>

            <span style={{
              display: 'inline-block',
              backgroundColor: '#fce7f3',
              color: '#ec4899',
              padding: '0.35rem 0.85rem',
              borderRadius: '12px',
              fontSize: '0.85rem',
              fontWeight: '600',
              marginBottom: '1rem'
            }}>
              {selectedArticle.category}
            </span>

            <h2 style={{
              color: '#1f2937',
              fontSize: '1.8rem',
              marginBottom: '1rem',
              marginTop: '0.5rem'
            }}>
              {selectedArticle.title}
            </h2>

            <div style={{
              display: 'flex',
              gap: '1rem',
              alignItems: 'center',
              marginBottom: '1.5rem',
              paddingBottom: '1.5rem',
              borderBottom: '1px solid #e5e7eb',
              flexWrap: 'wrap'
            }}>
              <span style={{ color: '#6b7280', fontSize: '0.9rem' }}>👤 {selectedArticle.author}</span>
              <span style={{ color: '#6b7280', fontSize: '0.9rem' }}>📅 {selectedArticle.date}</span>
            </div>

            <p style={{
              color: '#6b7280',
              fontSize: '1.05rem',
              lineHeight: '1.8',
              margin: 0
            }}>
              {selectedArticle.content}
            </p>

            <div style={{
              marginTop: '2rem',
              padding: '1rem',
              backgroundColor: '#f0f4ff',
              borderRadius: '8px',
              borderLeft: '4px solid #8b5cf6'
            }}>
              <p style={{
                color: '#6b7280',
                fontSize: '0.9rem',
                margin: 0
              }}>
                ✨ Este artículo forma parte de nuestra colección educativa sobre géneros musicales y sus influencias culturales.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
