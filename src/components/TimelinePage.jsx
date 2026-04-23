import { musicData } from '../data/musicData';

export default function TimelinePage() {
  // Función para extraer el año del campo origin
  const extractYear = (originString) => {
    const match = originString.match(/\d{2,4}/);
    return match ? parseInt(match[0]) : 0;
  };

  // Ordenar géneros por año de origen (de manera cronológica)
  const sortedGenres = [...musicData.genres].sort((a, b) => {
    const yearA = extractYear(a.origin);
    const yearB = extractYear(b.origin);
    return yearA - yearB;
  });

  return (
    <div className="container">
      <h1 style={{ marginBottom: '1rem' }}>🎼 Timeline de Géneros Musicales</h1>
      <p style={{ color: '#6b7280', marginBottom: '3rem', fontSize: '1.05rem' }}>
        Observa cómo evolucionó la música a través de las décadas, con géneros que revolucionaron el sonido global
      </p>

      <div style={{ 
        position: 'relative',
        paddingLeft: '2rem'
      }}>
        {/* Línea vertical */}
        <div style={{
          position: 'absolute',
          left: '0.5rem',
          top: '0',
          bottom: '0',
          width: '2px',
          backgroundColor: '#8b5cf6'
        }} />

        {/* Items del timeline */}
        {sortedGenres.map((genre) => (
          <div key={genre.id} style={{
            marginBottom: '2rem',
            position: 'relative'
          }}>
            {/* Punto del timeline */}
            <div style={{
              position: 'absolute',
              left: '-1.1rem',
              top: '0.5rem',
              width: '1.2rem',
              height: '1.2rem',
              backgroundColor: '#8b5cf6',
              borderRadius: '50%',
              border: '4px solid white',
              boxShadow: '0 0 0 2px #8b5cf6'
            }} />

            {/* Contenido */}
            <div style={{
              padding: '1.5rem',
              backgroundColor: '#ffffff',
              borderRadius: '12px',
              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
              marginLeft: '1rem'
            }}>
              <div style={{
                display: 'grid',
                gridTemplateColumns: '150px 1fr',
                gap: '2rem',
                alignItems: 'start'
              }}>
                <div>
                  <h3 style={{ 
                    color: '#8b5cf6', 
                    marginBottom: '0.25rem',
                    fontSize: '1.3rem',
                    fontWeight: 'bold'
                  }}>
                    {extractYear(genre.origin)}s
                  </h3>
                  <p style={{ color: '#ec4899', fontSize: '0.9rem', fontWeight: '500' }}>
                    {genre.origin.split(',')[0]}
                  </p>
                </div>

                <div>
                  <h4 style={{ 
                    color: '#1f2937', 
                    marginBottom: '0.5rem',
                    fontSize: '1.2rem'
                  }}>
                    {genre.name}
                  </h4>
                  <p style={{ 
                    color: '#6b7280',
                    marginBottom: '1rem',
                    lineHeight: '1.7'
                  }}>
                    {genre.history}
                  </p>
                  
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '1rem',
                    marginTop: '1rem'
                  }}>
                    <div>
                      <p style={{ 
                        fontSize: '0.85rem',
                        color: '#8b5cf6',
                        fontWeight: '600',
                        marginBottom: '0.25rem'
                      }}>
                        ARTISTAS CLAVE
                      </p>
                      <p style={{ color: '#6b7280', fontSize: '0.9rem' }}>
                        {genre.keyArtists}
                      </p>
                    </div>
                    <div>
                      <p style={{ 
                        fontSize: '0.85rem',
                        color: '#ec4899',
                        fontWeight: '600',
                        marginBottom: '0.25rem'
                      }}>
                        INFLUENCIA
                      </p>
                      <p style={{ color: '#6b7280', fontSize: '0.9rem' }}>
                        {genre.influence}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
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
        <h3 style={{ color: '#8b5cf6', marginBottom: '1rem' }}>La Música Siempre Evoluciona</h3>
        <p style={{ color: '#6b7280' }}>
          Desde los años 70 hasta hoy, cada género ha dejado su marca en la historia musical global,
          influyendo en nuevas generaciones de artistas y oyentes.
        </p>
      </div>
    </div>
  );
}
