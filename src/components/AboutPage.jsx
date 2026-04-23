export default function AboutPage() {
  return (
    <div className="container">
      <h1 style={{ marginBottom: '1rem' }}>ℹ️ Acerca de Música Informativa</h1>
      
      <div style={{ 
        maxWidth: '900px', 
        margin: '2rem auto',
        lineHeight: '1.8'
      }}>
        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ color: '#8b5cf6', marginBottom: '1rem' }}>Nuestra Misión</h2>
          <p style={{ color: '#6b7280', fontSize: '1.1rem' }}>
            Música Informativa es una plataforma dedicada a explorar, analizar y documentar la riqueza 
            de géneros musicales que han definido la cultura contemporánea. Nuestro objetivo es proporcionar 
            información contextualizada y educativa sobre la música, sus orígenes, evolución e influencia global.
          </p>
        </section>

        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ color: '#8b5cf6', marginBottom: '1rem' }}>¿Qué Encontrarás Aquí?</h2>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: '1fr 1fr', 
            gap: '1.5rem',
            marginBottom: '1.5rem'
          }}>
            <div style={{ 
              padding: '1.5rem',
              backgroundColor: '#f9fafb',
              borderRadius: '8px',
              borderLeft: '4px solid #8b5cf6'
            }}>
              <h3 style={{ color: '#1f2937', marginBottom: '0.5rem' }}>📚 Catálogo de Géneros</h3>
              <p style={{ color: '#6b7280', fontSize: '0.95rem' }}>
                Explorar la historia, características e influencia de 10 géneros musicales fundamentales,
                desde el Alternative Rock hasta el Hypnagogic Pop.
              </p>
            </div>

            <div style={{ 
              padding: '1.5rem',
              backgroundColor: '#f9fafb',
              borderRadius: '8px',
              borderLeft: '4px solid #ec4899'
            }}>
              <h3 style={{ color: '#1f2937', marginBottom: '0.5rem' }}>💿 Álbumes Destacados</h3>
              <p style={{ color: '#6b7280', fontSize: '0.95rem' }}>
                Una colección de 10 álbumes icónicos que representan la excelencia y la innovación
                en sus respectivos géneros musicales.
              </p>
            </div>

            <div style={{ 
              padding: '1.5rem',
              backgroundColor: '#f9fafb',
              borderRadius: '8px',
              borderLeft: '4px solid #8b5cf6'
            }}>
              <h3 style={{ color: '#1f2937', marginBottom: '0.5rem' }}>🎯 Listas Temáticas</h3>
              <p style={{ color: '#6b7280', fontSize: '0.95rem' }}>
                Listas curadas por expertos que agrupan álbumes y géneros según temáticas específicas
                y estilos musicales.
              </p>
            </div>

            <div style={{ 
              padding: '1.5rem',
              backgroundColor: '#f9fafb',
              borderRadius: '8px',
              borderLeft: '4px solid #ec4899'
            }}>
              <h3 style={{ color: '#1f2937', marginBottom: '0.5rem' }}>💬 Comunidad</h3>
              <p style={{ color: '#6b7280', fontSize: '0.95rem' }}>
                Un foro activo donde amantes de la música comparten opiniones, reseñas y discuten
                los temas más relevantes de la música.
              </p>
            </div>
          </div>
        </section>

        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ color: '#8b5cf6', marginBottom: '1rem' }}>La Importancia de Entender la Música</h2>
          <p style={{ color: '#6b7280' }}>
            La música no es solo entretenimiento; es un documento histórico que refleja la sociedad, 
            la política y las emociones de cada era. Comprender los géneros musicales nos ayuda a:
          </p>
          <ul style={{ 
            color: '#6b7280',
            marginTop: '1rem',
            marginLeft: '2rem',
            listStyleType: 'none'
          }}>
            <li style={{ marginBottom: '0.75rem' }}>✅ <strong>Apreciar</strong> la evolución de la música a lo largo del tiempo</li>
            <li style={{ marginBottom: '0.75rem' }}>✅ <strong>Conectar</strong> con otras culturas a través del sonido</li>
            <li style={{ marginBottom: '0.75rem' }}>✅ <strong>Inspirar</strong> nuevas creaciones artísticas</li>
            <li style={{ marginBottom: '0.75rem' }}>✅ <strong>Comprender</strong> la influencia de la música en la sociedad contemporánea</li>
          </ul>
        </section>

        <section style={{ 
          padding: '2rem',
          backgroundColor: '#f0f4ff',
          borderRadius: '12px',
          textAlign: 'center'
        }}>
          <h2 style={{ color: '#8b5cf6', marginBottom: '1rem' }}>Únete a Nuestra Comunidad</h2>
          <p style={{ color: '#6b7280' }}>
            Explora géneros, descubre álbumes, comparte tus reseñas y conecta con otros amantes de la música.
            La música es un viaje, ¡y te invitamos a recorrerlo con nosotros!
          </p>
        </section>
      </div>
    </div>
  );
}
